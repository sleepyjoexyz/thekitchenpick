"use client";

import React from "react";

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) {
        parts.push(remaining.slice(0, boldMatch.index));
      }
      parts.push(<strong key={`b${key++}`}>{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
    } else {
      parts.push(remaining);
      break;
    }
  }

  return parts;
}

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const paragraphs = content.split("\n\n");

  return (
    <div className="prose prose-lg max-w-none text-gray-700">
      {paragraphs.map((paragraph, i) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return null;

        // H2
        if (trimmed.startsWith("## ")) {
          const heading = trimmed.replace(/^##\s+/, "");
          return (
            <h2
              key={i}
              className="text-2xl font-bold text-gray-900 mt-8 mb-4"
            >
              {heading}
            </h2>
          );
        }

        // H3
        if (trimmed.startsWith("### ")) {
          const heading = trimmed.replace(/^###\s+/, "");
          return (
            <h3
              key={i}
              className="text-xl font-bold text-gray-900 mt-6 mb-3"
            >
              {heading}
            </h3>
          );
        }

        // Unordered list
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n");
          return (
            <ul key={i} className="list-disc list-inside space-y-2 my-4">
              {items.map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  {renderInline(item.replace(/^-\s*/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        // Table
        if (trimmed.includes("|")) {
          const lines = trimmed.split("\n");
          if (lines.length >= 3 && lines[1].includes("-")) {
            return (
              <div key={i} className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-gray-300">
                  <tbody>
                    {lines
                      .filter(
                        (line) => !line.match(/^\|?\s*[-:]+\s*\|/) && line.trim()
                      )
                      .map((line, idx) => {
                        const cells = line
                          .split("|")
                          .map((cell) => cell.trim())
                          .filter((cell) => cell);
                        return (
                          <tr
                            key={idx}
                            className={idx === 0 ? "bg-gray-100" : ""}
                          >
                            {cells.map((cell, cidx) => (
                              <td
                                key={cidx}
                                className={`border border-gray-300 px-4 py-2 ${
                                  idx === 0 ? "font-bold" : ""
                                }`}
                              >
                                {renderInline(cell)}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // Regular paragraph with inline formatting
        return (
          <p key={i} className="text-gray-700 leading-relaxed my-4">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
