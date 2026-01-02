"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function GroupsScraperPage() {
  const [excludeBots, setExcludeBots] = useState(true);
  const [autoEnrich, setAutoEnrich] = useState(false);

  return (
    <main className="min-h-screen bg-ink-900 text-white">
      <div className="flex">
        <Sidebar />

        {/* Page content */}
        <section className="h-screen flex-1 overflow-y-auto">
          {/* Top search bar */}
          <div className="border-b border-white/10 bg-white/[0.02] px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative w-full max-w-[560px]">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45">
                  <SearchIcon />
                </span>
                <input
                  placeholder="Search groups, leads, or segments..."
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 text-sm text-white/85 outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.06]"
                  aria-label="Notifications"
                  title="Notifications"
                >
                  <BellIcon />
                </button>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.06]"
                  aria-label="Help"
                  title="Help"
                >
                  <HelpIcon />
                </button>

                <div className="h-9 w-px bg-white/10" />

                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-sm font-semibold">
                  JD
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-6">
            {/* Breadcrumb */}
            <div className="text-xs text-white/45">
              Campaigns <span className="px-1">›</span>{" "}
              <span className="text-white/75">Groups Engagement</span>
            </div>

            {/* Title row */}
            <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight">
                  Groups Engagement
                </h1>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/45">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                    Status: Draft
                  </span>
                  <span>Last edited 2 hours ago</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white/75 hover:bg-white/[0.06]"
                >
                  Discard
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  <SaveIcon />
                  Save Segment
                </button>
              </div>
            </div>

            {/* Steps */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <div className="grid gap-4 lg:grid-cols-3 lg:items-center">
                <Step
                  done
                  number="1"
                  title="Connect Source"
                  align="left"
                />
                <Step
                  active
                  number="2"
                  title="Parsing Logic"
                  align="center"
                />
                <Step
                  number="3"
                  title="Qualification"
                  align="right"
                />
              </div>
            </div>

            {/* Main content grid */}
            <div className="mt-6 grid gap-4 lg:grid-cols-[360px_1fr]">
              {/* LEFT: Parsing rules */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                  <span className="text-blue-400">
                    <SlidersIcon />
                  </span>
                  Parsing Rules
                </div>

                {/* Community source */}
                <div className="mt-4">
                  <div className="text-xs font-semibold text-white/55">
                    Community Source
                  </div>

                  <div className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.04] ring-1 ring-white/10">
                        <span className="text-[10px] font-semibold text-white/70">
                          Slack
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white/85">
                          SaaS Founders Club
                        </div>
                        <div className="text-xs text-white/45">
                          #general • 14.5k messages
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      Edit
                    </button>
                  </div>
                </div>

                {/* Signal keywords */}
                <div className="mt-5">
                  <div className="text-xs font-semibold text-white/55">
                    Signal Keywords
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <Tag text="budget" />
                    <Tag text="demo" />
                    <Tag text="hiring" />
                  </div>

                  <button
                    type="button"
                    className="mt-3 text-xs text-white/45 hover:text-white/70"
                  >
                    Add keyword...
                  </button>

                  <div className="mt-2 text-[11px] text-white/35">
                    Triggers intent scoring when found in messages.
                  </div>
                </div>

                {/* Toggles */}
                <div className="mt-5 space-y-3">
                  <ToggleRow
                    label="Exclude Bots/Admins"
                    on={excludeBots}
                    setOn={setExcludeBots}
                  />
                  <ToggleRow
                    label="Auto-Enrich Email"
                    on={autoEnrich}
                    setOn={setAutoEnrich}
                  />
                </div>

                {/* Run button */}
                <button
                  type="button"
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  <PlayIcon />
                  Run Extraction
                </button>

                {/* Mini stats */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MiniStat title="MEMBERS" value="1,248" />
                  <MiniStat title="SIGNALS" value="86" accent />
                </div>
              </div>

              {/* RIGHT: Extraction preview */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 p-4">
                  <div className="text-sm font-semibold text-white/90">
                    Extraction Preview
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="h-8 rounded-lg border border-white/10 bg-white/[0.02] px-3 text-xs font-semibold text-white/55 hover:bg-white/[0.06]"
                    >
                      Raw Log
                    </button>
                    <button
                      type="button"
                      className="h-8 rounded-lg border border-white/10 bg-white/[0.06] px-3 text-xs font-semibold text-white/80"
                    >
                      Parsed Data
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  {/* Table header */}
                  <div className="grid grid-cols-[1.2fr_2.2fr_0.8fr_0.9fr_0.6fr] gap-3 border-b border-white/10 pb-3 text-[11px] font-semibold tracking-wider text-white/45">
                    <div>PROFILE</div>
                    <div>MESSAGE CONTEXT</div>
                    <div>INTENT SCORE</div>
                    <div>STATUS</div>
                    <div className="text-right">ACTION</div>
                  </div>

                  {/* Rows */}
                  <PreviewRow
                    name="Sarah Miller"
                    handle="@sarah_m_design"
                    msg="Does anyone have recommendations for a..."
                    time="Today at 10:42 AM"
                    score={92}
                    status="Email Found"
                    statusDot="green"
                  />
                  <PreviewRow
                    name="David Kim"
                    handle="@dkim_dev"
                    msg="Just launched our beta! Would love some..."
                    time="Yesterday at 4:15 PM"
                    score={65}
                    status="Enriching..."
                    statusDot="yellow"
                  />
                  <PreviewRow
                    name="Elena Rossi"
                    handle="@erossi_pm"
                    msg="We are actively hiring for a Senior Backend..."
                    time="Yesterday at 2:00 PM"
                    score={88}
                    status="Email Found"
                    statusDot="green"
                    highlightWord="hiring"
                  />

                  <div className="mt-4 flex items-center justify-between text-xs text-white/45">
                    <div>Showing 3 of 86 signals</div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-white/60 hover:bg-white/[0.06]"
                        aria-label="Previous"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-white/60 hover:bg-white/[0.06]"
                        aria-label="Next"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom spacer like screenshot */}
            <div className="h-6" />
          </div>
        </section>
      </div>
    </main>
  );
}

/* --------- Small UI Components ---------- */

function Step({
  number,
  title,
  done,
  active,
  align,
}: {
  number: string;
  title: string;
  done?: boolean;
  active?: boolean;
  align: "left" | "center" | "right";
}) {
  const alignCls =
    align === "left"
      ? "justify-start text-left"
      : align === "right"
      ? "justify-end text-right"
      : "justify-center text-center";

  return (
    <div className={["flex items-center gap-4", alignCls].join(" ")}>
      <div className="flex items-center gap-3">
        <div
          className={[
            "grid h-9 w-9 place-items-center rounded-full border text-sm font-semibold",
            done
              ? "border-green-500/30 bg-green-500/15 text-green-200"
              : active
              ? "border-blue-500/40 bg-blue-600/20 text-blue-200"
              : "border-white/15 bg-white/[0.02] text-white/55",
          ].join(" ")}
        >
          {done ? "✓" : number}
        </div>

        <div className="text-sm font-semibold text-white/80">{title}</div>
      </div>

      <div className="hidden lg:block h-px flex-1 bg-white/10" />
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-blue-600/15 px-3 py-1 text-xs font-semibold text-blue-200">
      {text}
      <span className="text-white/35">×</span>
    </span>
  );
}

function ToggleRow({
  label,
  on,
  setOn,
}: {
  label: string;
  on: boolean;
  setOn: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-white/70">{label}</div>

      <button
        type="button"
        onClick={() => setOn(!on)}
        className={[
          "relative h-6 w-11 rounded-full border transition",
          on ? "border-blue-500/30 bg-blue-600" : "border-white/15 bg-white/[0.06]",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white transition",
            on ? "left-6" : "left-1",
          ].join(" ")}
        />
      </button>
    </div>
  );
}

function MiniStat({
  title,
  value,
  accent,
}: {
  title: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-[11px] font-semibold tracking-wider text-white/45">
        {title}
      </div>
      <div className={["mt-2 text-2xl font-semibold", accent ? "text-blue-400" : "text-white/90"].join(" ")}>
        {value}
      </div>
    </div>
  );
}

function PreviewRow({
  name,
  handle,
  msg,
  time,
  score,
  status,
  statusDot,
  highlightWord,
}: {
  name: string;
  handle: string;
  msg: string;
  time: string;
  score: number;
  status: string;
  statusDot: "green" | "yellow";
  highlightWord?: string;
}) {
  const scoreBadge =
    score >= 85
      ? "bg-green-500/15 text-green-200 border-green-500/20"
      : "bg-yellow-500/15 text-yellow-200 border-yellow-500/20";

  const dot =
    statusDot === "green"
      ? "bg-green-400"
      : "bg-yellow-300";

  const msgRendered = highlightWord
    ? msg.replace(highlightWord, `**${highlightWord}**`)
    : msg;

  return (
    <div className="grid grid-cols-[1.2fr_2.2fr_0.8fr_0.9fr_0.6fr] gap-3 border-b border-white/10 py-4 text-sm">
      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
          <span className="text-xs font-semibold text-white/70">
            {name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
          </span>
        </div>
        <div className="min-w-0">
          <div className="truncate font-semibold text-white/85">{name}</div>
          <div className="truncate text-xs text-white/45">{handle}</div>
        </div>
      </div>

      {/* Message context */}
      <div className="min-w-0">
        <div className="truncate text-white/70">
          {highlightWord ? (
            <>
              {msg.split(highlightWord)[0]}
              <span className="rounded bg-blue-600/20 px-1 text-blue-200">
                {highlightWord}
              </span>
              {msg.split(highlightWord)[1]}
            </>
          ) : (
            msgRendered
          )}
        </div>
        <div className="mt-1 text-xs text-white/35">{time}</div>
      </div>

      {/* Intent score */}
      <div className="flex items-start">
        <span
          className={[
            "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold",
            scoreBadge,
          ].join(" ")}
        >
          {score}
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 text-sm text-white/70">
        <span className={["h-2 w-2 rounded-full", dot].join(" ")} />
        {status}
      </div>

      {/* Action */}
      <div className="text-right text-white/45">⋮</div>
    </div>
  );
}

/* -------- Icons (small, inline) -------- */

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M14 20a2 2 0 0 1-4 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 18h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.9.7-1.2 1.1-1.2 2.2v.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h12l2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M7 4v6h10V4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 6v0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M15 12v0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M10 18v0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 5l12 7-12 7V5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
