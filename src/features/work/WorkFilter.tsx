"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { caseStudies, workFilters, type WorkFilterLabel } from "@/data/work";

export default function WorkFilter() {
  const [filter, setFilter] = useState<WorkFilterLabel>("All");
  const cases =
    filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <>
      <section className="mx-auto max-w-[1426px] px-9 pt-16 pb-12">
        <div className="flex flex-wrap gap-3">
          {workFilters.map((label) => {
            const active = label === filter;
            return (
              <button
                key={label}
                onClick={() => setFilter(label)}
                className={`cursor-pointer rounded-full border-[1.5px] px-[26px] py-3 text-[15.5px] font-medium transition-colors ${
                  active
                    ? "border-ink bg-ink text-lime"
                    : "border-ink/25 bg-transparent text-ink hover:border-ink"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1426px] px-9 pb-[110px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-7">
          {cases.map((c) => (
            <article
              key={c.client}
              className="flex flex-col overflow-hidden rounded-card bg-lilac transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,26,51,.18)]"
            >
              <div className="relative mx-5 mt-5 aspect-video overflow-hidden rounded-frame bg-white/35">
                {/* TODO: replace with real case-study image via next/image */}
                <PlaceholderImage
                  label={c.client}
                  className="absolute inset-0 bg-transparent text-ink/40"
                />
              </div>
              <div className="px-8 pt-[26px] pb-[30px]">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[26px] font-semibold tracking-[-.5px] text-white">
                    {c.client}
                  </h2>
                  <span className="whitespace-nowrap rounded-full bg-lime px-3.5 py-[5px] text-[13px] font-semibold">
                    {c.category}
                  </span>
                </div>
                <p className="mt-3 text-[15.5px] leading-[1.6] text-white/90">
                  {c.summary}
                </p>
                <div className="mt-[22px] flex gap-8 border-t border-white/35 pt-[18px]">
                  {[
                    [c.stat1, c.stat1label],
                    [c.stat2, c.stat2label],
                  ].map(([stat, label]) => (
                    <div key={label}>
                      <strong className="text-2xl text-white">{stat}</strong>
                      <span className="block text-[12.5px] text-white/80">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        {cases.length === 0 && (
          <p className="py-[60px] text-center text-[17px] text-ink/55">
            No case studies in this category yet.
          </p>
        )}
      </section>
    </>
  );
}
