"use client";

import { useEffect, useState } from "react";
import { Comment } from "@/lib/supabase";

interface CommentsProps {
  pagePath: string;
  siteName: string;
}

interface FormData {
  name: string;
  comment: string;
  website: string; // honeypot field
}

interface ValidationErrors {
  name?: string;
  comment?: string;
}

export default function Comments({ pagePath, siteName }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    comment: "",
    website: "",
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rateLimitActive, setRateLimitActive] = useState(false);
  const [supabaseConfigured, setSupabaseConfigured] = useState(true);

  // Fetch comments on mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `/api/comments?path=${encodeURIComponent(pagePath)}&site=${encodeURIComponent(siteName)}`
        );

        if (!response.ok) {
          if (response.status === 503) {
            setSupabaseConfigured(false);
            setLoading(false);
            return;
          }
          throw new Error("Failed to fetch comments");
        }

        const data = await response.json();
        setComments(data.comments || []);
      } catch (err) {
        console.error("Error fetching comments:", err);
        setError(
          "Unable to load comments. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [pagePath, siteName]);

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 50) {
      errors.name = "Name must be no more than 50 characters";
    }

    if (!formData.comment || formData.comment.trim().length < 10) {
      errors.comment = "Comment must be at least 10 characters";
    } else if (formData.comment.trim().length > 2000) {
      errors.comment = "Comment must be no more than 2000 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error for this field
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check - if filled, silently fail
    if (formData.website) {
      setFormData({ name: "", comment: "", website: "" });
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      setSuccess(false);

      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          comment: formData.comment.trim(),
          page_path: pagePath,
          site_name: siteName,
          website: formData.website, // honeypot
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit comment");
      }

      // Reset form
      setFormData({ name: "", comment: "", website: "" });
      setValidationErrors({});
      setSuccess(true);

      // Refetch comments
      const commentsResponse = await fetch(
        `/api/comments?path=${encodeURIComponent(pagePath)}&site=${encodeURIComponent(siteName)}`
      );
      if (commentsResponse.ok) {
        const commentsData = await commentsResponse.json();
        setComments(commentsData.comments || []);
      }

      // Show success message for 3 seconds
      setTimeout(() => setSuccess(false), 3000);

      // Activate rate limit for 60 seconds
      setRateLimitActive(true);
      setTimeout(() => setRateLimitActive(false), 60000);
    } catch (err) {
      console.error("Error submitting comment:", err);
      setError(
        err instanceof Error ? err.message : "Failed to submit comment"
      );
    } finally {
      setSubmitting(false);
    }
  };

  // If Supabase is not configured, show a graceful message
  if (!supabaseConfigured) {
    return (
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-600">
            Comments are coming soon. Check back soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments</h2>

      {/* Existing Comments */}
      <div className="mb-8">
        {loading ? (
          <p className="text-gray-500">Loading comments...</p>
        ) : error && comments.length === 0 ? (
          <p className="text-gray-500">{error}</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-500">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">
                    {comment.display_name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {new Date(comment.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {comment.comment_text}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comment Form */}
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Leave a Comment
        </h3>

        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-green-800 text-sm">
            Thank you! Your comment has been posted.
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              maxLength={50}
              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                validationErrors.name
                  ? "border-red-300"
                  : "border-gray-300"
              }`}
              disabled={submitting || rateLimitActive}
            />
            {validationErrors.name && (
              <p className="text-xs text-red-600 mt-1">{validationErrors.name}</p>
            )}
          </div>

          {/* Comment Field */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-900 mb-1">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Share your thoughts... (10-2000 characters)"
              maxLength={2000}
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                validationErrors.comment
                  ? "border-red-300"
                  : "border-gray-300"
              }`}
              disabled={submitting || rateLimitActive}
            />
            <div className="flex justify-between mt-1">
              {validationErrors.comment && (
                <p className="text-xs text-red-600">
                  {validationErrors.comment}
                </p>
              )}
              <p className="text-xs text-gray-500 ml-auto">
                {formData.comment.length}/2000
              </p>
            </div>
          </div>

          {/* Honeypot Field (hidden) */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Rate Limit Message */}
          {rateLimitActive && (
            <p className="text-xs text-gray-500">
              Please wait before posting another comment...
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting || rateLimitActive}
            className={`w-full py-2 px-3 rounded-lg font-medium text-sm transition-colors ${
              submitting || rateLimitActive
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {submitting ? "Posting..." : "Post Comment"}
          </button>
        </form>
      </div>
    </section>
  );
}
