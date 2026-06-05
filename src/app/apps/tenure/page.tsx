"use client";

import { useEffect, useState } from "react";
import { formatDuration, intervalToDuration } from "date-fns";

export default function TenurePage() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentYear = new Date().getFullYear();
  const years: string[] = Array.from({ length: 31 }, (_, i) =>
    (currentYear - i).toString()
  );

  const [startMonth, setStartMonth] = useState<string>("");
  const [startYear, setStartYear] = useState<string>("");
  const [endMonth, setEndMonth] = useState<string>("");
  const [endYear, setEndYear] = useState<string>("");
  const [tenure, setTenure] = useState<string | undefined>();

  useEffect(() => {
    try {
      if (startMonth && startYear && endMonth && endYear) {
        const startMonthIndex = months.findIndex((m) => m === startMonth);
        const endMonthIndex = months.findIndex((m) => m === endMonth);

        const tenureDuration = intervalToDuration({
          start: new Date(+startYear, startMonthIndex),
          end: new Date(+endYear, endMonthIndex),
        });
        const tenureFormatted = formatDuration(tenureDuration, {
          format: ["years", "months"],
        });

        setTenure(tenureFormatted);
      } else throw "Incomplete dates";
    } catch (_error) {
      setTenure(undefined);
    }
  }, [startMonth, startYear, endMonth, endYear]);

  const selectCls =
    "w-full border-2 border-black/12 bg-transparent px-4 py-4 text-xl outline-none transition-colors focus:border-black md:text-2xl";

  const labelCls = "space-y-3 text-xl text-neutral-700 md:text-2xl";

  return (
    <div className="space-y-16 pb-24 pt-12 md:space-y-24 md:pb-32 md:pt-16">
      <header className="space-y-6 md:space-y-10">
        <h1 className="text-[clamp(2rem,4.75vw,3.85rem)] font-semibold tracking-[-0.03em] text-black">
          Tenure calculator
        </h1>
        <p className="w-full max-w-none text-xl leading-relaxed text-neutral-600 md:text-2xl md:leading-relaxed">
          Rough span between two month/year pairs — handy for counting stints at
          work (or anywhere time matters).
        </p>
      </header>

      <div className="grid gap-16 border-t border-black/10 pt-16 sm:grid-cols-2 md:gap-24 md:pt-24">
        <div className="space-y-8">
          <p className="text-base font-mono uppercase tracking-[0.32em] text-neutral-400 md:text-lg">
            Start date
          </p>
          <label className={`block ${labelCls}`}>
            <span className="text-neutral-500">Month</span>
            <select
              className={selectCls}
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
            >
              <option value="">Choose month</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label className={`block ${labelCls}`}>
            <span className="text-neutral-500">Year</span>
            <select
              className={selectCls}
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
            >
              <option value="">Choose year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="space-y-8">
          <p className="text-base font-mono uppercase tracking-[0.32em] text-neutral-400 md:text-lg">
            End date
          </p>
          <label className={`block ${labelCls}`}>
            <span className="text-neutral-500">Month</span>
            <select
              className={selectCls}
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
            >
              <option value="">Choose month</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label className={`block ${labelCls}`}>
            <span className="text-neutral-500">Year</span>
            <select
              className={selectCls}
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
            >
              <option value="">Choose year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {tenure ? (
        <p className="border-t border-black/10 pt-16 font-mono text-3xl text-black md:pt-24 md:text-4xl md:tracking-tight">
          {tenure}
        </p>
      ) : (
        <p className="border-t border-black/10 pt-16 text-xl text-neutral-400 md:pt-24 md:text-2xl">
          Select both dates.
        </p>
      )}
    </div>
  );
}
