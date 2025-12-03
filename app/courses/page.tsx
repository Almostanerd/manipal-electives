"use client";

import { useState } from "react";
import { courses, type Course } from "@/data/courses";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfWrKcnar-8aFrvBkSpl1jGTZ5Wk1xo2xmiWB65FejrzPOHZg/viewform?usp=publish-editor"; // 🔁 put your real form link here

type Filter = "ALL" | "OE" | "PE_with_minor" | "PE_without_minor";

function filterCourses(filter: Filter): Course[] {
  if (filter === "ALL") return courses;
  if (filter === "OE") return courses.filter((c) => c.type === "OE");

  if (filter === "PE_with_minor") {
    return courses.filter((c) =>
      c.buckets.some((b) => b === "PE1_with_minor" || b === "PE2_with_minor")
    );
  }

  // PE_without_minor
  return courses.filter((c) =>
    c.buckets.some((b) => b === "PE1_without_minor" || b === "PE2_without_minor")
  );
}

export default function CoursesPage() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const filtered = filterCourses(filter);

  return (
    <div className="card">
      <h1 className="hero-title">Browse electives</h1>
      <p className="hero-subtitle">
        Scroll through the electives, read the short summary, and if you&apos;ve
        taken one, share your experience using the form. I&apos;ll keep updating
        this page manually from seniors&apos; inputs.
      </p>

      <div className="filter-bar">
        <button
          className={`filter-button ${filter === "ALL" ? "active" : ""}`}
          onClick={() => setFilter("ALL")}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === "OE" ? "active" : ""}`}
          onClick={() => setFilter("OE")}
        >
          Open Electives (OE)
        </button>
        <button
          className={`filter-button ${filter === "PE_with_minor" ? "active" : ""}`}
          onClick={() => setFilter("PE_with_minor")}
        >
          PE 1/2 (with minor)
        </button>
        <button
          className={`filter-button ${
            filter === "PE_without_minor" ? "active" : ""
          }`}
          onClick={() => setFilter("PE_without_minor")}
        >
          PE 1/2 (without minor)
        </button>
      </div>

      <div className="course-grid">
        {filtered.map((course) => (
          <div
  key={course.code}
  className={`course-card ${
    course.buckets.includes("OE")
      ? "oe"
      : course.buckets.some((b) =>
          ["PE1_with_minor", "PE2_with_minor"].includes(b)
        )
      ? "pe-with-minor"
      : "pe-without-minor"
  }`}
>

            <h2>{course.name}</h2>
            <div className="course-meta">
              {course.code} • {course.type} • {course.credits} credits
            </div>
            <p className="course-summary">{course.summary}</p>

            <div className="pill-row">
              <span className="badge-soft">{course.dept}</span>
              <span className="badge-soft">Sem {course.semester}</span>
              {course.buckets.includes("OE") && (
                <span className="badge-soft">OE</span>
              )}
              {course.buckets.some((b) =>
                ["PE1_with_minor", "PE2_with_minor"].includes(b)
              ) && <span className="badge-soft">PE (with minor)</span>}
              {course.buckets.some((b) =>
                ["PE1_without_minor", "PE2_without_minor"].includes(b)
              ) && <span className="badge-soft">PE (without minor)</span>}
            </div>

            <div className="button-row" style={{ marginTop: "0.8rem" }}>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                📝 Share your insight for this course
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="section" style={{ marginTop: "2rem" }}>
        <h2>How this works</h2>
        <p>
          This is not some official portal. It&apos;s literally just a bunch of
          students trying to make elective selection less confusing. Seniors fill
          the form, I clean up the responses and update the summaries/notes here.
        </p>
      </div>
    </div>
  );
}
