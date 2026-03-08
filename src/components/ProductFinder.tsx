"use client";

import { useState, useMemo } from "react";

// --- Types ---

export interface FinderOption {
  value: string;
  label: string;
  description?: string;
  icon?: string; // emoji
}

export interface FinderStep {
  id: string;
  question: string;
  subtitle?: string;
  options: FinderOption[];
  filterFn: (product: any, selectedValue: string) => boolean;
}

export interface FinderResultConfig {
  /** Fields to display on result cards */
  displayFields: {
    label: string;
    getValue: (product: any) => string;
  }[];
  /** How to get the product name */
  getName: (product: any) => string;
  /** How to get price */
  getPrice: (product: any) => number;
  /** How to get rating */
  getRating: (product: any) => number;
  /** How to get the bestFor/summary text */
  getSummary: (product: any) => string;
  /** How to get Amazon link (returns ASIN or null) */
  getAsin: (product: any) => string | null;
  /** Amazon affiliate tag (optional — omit if not enrolled) */
  affiliateTag?: string;
}

export interface ProductFinderProps {
  title: string;
  subtitle?: string;
  steps: FinderStep[];
  products: any[];
  resultConfig: FinderResultConfig;
}

// --- Component ---

export default function ProductFinder({
  title,
  subtitle,
  steps,
  products,
  resultConfig,
}: ProductFinderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Filter products based on all selections so far
  const matchedProducts = useMemo(() => {
    let result = [...products];
    for (const step of steps) {
      const selected = selections[step.id];
      if (selected && selected !== "any") {
        result = result.filter((p) => step.filterFn(p, selected));
      }
    }
    // Sort by rating descending
    result.sort((a, b) => resultConfig.getRating(b) - resultConfig.getRating(a));
    return result;
  }, [products, steps, selections, resultConfig]);

  // Count products remaining after current selections
  const remainingCount = matchedProducts.length;

  const handleSelect = (stepId: string, value: string) => {
    const newSelections = { ...selections, [stepId]: value };
    setSelections(newSelections);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({});
    setShowResults(false);
  };

  const progressPercent = showResults
    ? 100
    : ((currentStep) / steps.length) * 100;

  // --- Render ---

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔍</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        {(currentStep > 0 || showResults) && (
          <button
            onClick={handleReset}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Start Over
          </button>
        )}
      </div>
      {subtitle && (
        <p className="text-gray-600 text-sm mb-6">{subtitle}</p>
      )}

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step Indicator */}
      {!showResults && (
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-xs text-gray-500">
            {remainingCount} product{remainingCount !== 1 ? "s" : ""} match{remainingCount === 1 ? "es" : ""}
          </span>
        </div>
      )}

      {/* Question & Options */}
      {!showResults && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {steps[currentStep].question}
          </h3>
          {steps[currentStep].subtitle && (
            <p className="text-sm text-gray-500 mb-4">{steps[currentStep].subtitle}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {steps[currentStep].options.map((option) => {
              const isSelected = selections[steps[currentStep].id] === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(steps[currentStep].id, option.value)}
                  className={`text-left p-4 rounded-lg border-2 transition-all duration-150 ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {option.icon && (
                      <span className="text-xl flex-shrink-0 mt-0.5">{option.icon}</span>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      {option.description && (
                        <div className="text-sm text-gray-500 mt-1">{option.description}</div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Back Button */}
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700 font-medium flex items-center gap-1"
            >
              <span>←</span> Back
            </button>
          )}
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {matchedProducts.length === 0
                ? "No exact matches"
                : matchedProducts.length === 1
                ? "Your perfect match!"
                : `Your top ${matchedProducts.length} matches`}
            </h3>
            <button
              onClick={handleBack}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium flex items-center gap-1"
            >
              <span>←</span> Back
            </button>
          </div>

          {matchedProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                No products match all your criteria. Try adjusting your preferences.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
              >
                Start Over
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {matchedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Rank badge */}
                      {index < 3 && (
                        <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2 ${
                          index === 0
                            ? "bg-yellow-100 text-yellow-800"
                            : index === 1
                            ? "bg-gray-100 text-gray-700"
                            : "bg-orange-50 text-orange-700"
                        }`}>
                          {index === 0 ? "Best Match" : index === 1 ? "#2" : "#3"}
                        </span>
                      )}
                      <h4 className="font-bold text-gray-900">
                        {resultConfig.getName(product)}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {resultConfig.getSummary(product)}
                      </p>

                      {/* Key specs */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {resultConfig.displayFields.map((field) => (
                          <span
                            key={field.label}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {field.label}: {field.getValue(product)}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & Rating */}
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold text-gray-900">
                        ${resultConfig.getPrice(product).toLocaleString()}
                      </div>
                      <div className="text-sm text-yellow-600 font-medium">
                        {"★".repeat(Math.round(resultConfig.getRating(product)))} {resultConfig.getRating(product).toFixed(1)}
                      </div>
                      {resultConfig.getAsin(product) && (
                        <a
                          href={`https://amazon.com/dp/${resultConfig.getAsin(product)}${resultConfig.affiliateTag ? `?tag=${resultConfig.affiliateTag}` : ""}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-block mt-2 text-xs bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 font-medium"
                        >
                          Check Price →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Selection Summary */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-400 mb-2">Your selections:</p>
            <div className="flex flex-wrap gap-2">
              {steps.map((step) => {
                const selected = selections[step.id];
                if (!selected) return null;
                const option = step.options.find((o) => o.value === selected);
                return (
                  <span
                    key={step.id}
                    className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {option?.label || selected}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
