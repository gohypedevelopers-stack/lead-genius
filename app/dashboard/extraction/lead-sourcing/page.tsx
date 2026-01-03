"use client";

import Sidebar from "@/components/Sidebar";

export default function LeadSourcingPage() {
  return (
    <main className="min-h-screen bg-ink-900 text-white">
      <div className="flex">
        <Sidebar />

        {/* Page content */}
        <section className="h-screen flex-1 overflow-y-auto px-6 py-6">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="text-white/45">
                <SearchIcon />
              </span>
              <input
                className="w-full bg-transparent text-sm text-white/85 outline-none placeholder:text-white/35"
                placeholder="Search leads, lists, or campaigns..."
              />
              <span className="text-white/35 text-xs">⌘K</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06]"
                aria-label="Notifications"
                title="Notifications"
              >
                <BellIcon />
              </button>
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06]"
                aria-label="Help"
                title="Help"
              >
                <QuestionIcon />
              </button>

              <button className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold hover:bg-blue-500">
                <span className="text-lg leading-none">+</span>
                New Project
              </button>

              <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600/20 text-sm font-semibold text-blue-200 ring-1 ring-blue-500/25">
                JD
              </div>
            </div>
          </div>
          <div className="px-3 py-3">
            {/* Breadcrumb */}
            <div className="text-xs text-white/75">
              Home /{" "}
              <span className="text-xs text-white/75">Lead Extraction /{" "}</span>
              <span className="text-xs text-white/75">Lead Sourcing</span>
            </div> </div>

          {/* Header */}
          <div className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">
                Lead Sourcing
              </h1>
              <p className="mt-2 text-sm text-white/55">
                Find, enrich, and score high-intent leads using multi-channel
                intelligence.
              </p>

              {/* Tabs */}
              <div className="mt-5 flex items-center gap-6 text-sm">
                <Tab active icon={<SearchSmallIcon />}>
                  Standard Search
                </Tab>
                <Tab icon={<CompassIcon />}>Sales Navigator</Tab>
                <Tab icon={<FileSmallIcon />}>CSV Import</Tab>
              </div>

              <div className="mt-2 h-px bg-white/10" />
            </div>

            <div className="flex items-center gap-8">
              <Metric label="CREDITS LEFT" value="2,450" />
              <Metric
                label="LEADS FOUND"
                value="14.2k"
                valueClass="text-blue-400"
              />
            </div>
          </div>

          {/* Main grid */}
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_360px]">
            {/* LEFT: Search Criteria */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
                  <span className="text-blue-400">
                    <FilterIcon />
                  </span>
                  Search Criteria
                </div>

                <div className="flex items-center gap-4 text-xs text-white/45">
                  <button className="hover:text-white/70 hover:underline">
                    Load Saved Search
                  </button>
                  <button className="hover:text-white/70 hover:underline">
                    Clear All
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {/* Keywords */}
                <div>
                  <label className="mb-2 block text-xs font-semibold text-white/55">
                    Keywords / Boolean
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <input
                      className="w-full bg-transparent text-sm text-white/85 outline-none placeholder:text-white/30"
                      placeholder={`e.g. ("SaaS" OR "Software") AND "Marketing" NOT "Intern"`}
                    />
                    <span className="text-white/35">
                      <CodeIcon />
                    </span>
                  </div>
                </div>

                {/* Job Title + Location */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-white/55">
                      Job Title
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <span className="text-white/35">
                        <BriefcaseIcon />
                      </span>
                      <input
                        className="w-full bg-transparent text-sm text-white/85 outline-none placeholder:text-white/30"
                        placeholder="e.g. Marketing Director"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-white/55">
                      Location
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <span className="text-white/35">
                        <PinIcon />
                      </span>
                      <input
                        className="w-full bg-transparent text-sm text-white/85 outline-none placeholder:text-white/30"
                        placeholder="e.g. San Francisco, Remote"
                      />
                    </div>
                  </div>
                </div>

                {/* Industry + Company size */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-white/55">
                      Industry
                    </label>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <span className="text-white/35">
                        <GridSmallIcon />
                      </span>
                      <input
                        className="w-full bg-transparent text-sm text-white/85 outline-none placeholder:text-white/30"
                        placeholder="e.g. Computer Software"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-white/55">
                      Company Size
                    </label>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                      <span className="text-sm text-white/50">
                        Select size range
                      </span>
                      <span className="text-white/35">
                        <ChevronDownIcon />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Toggles */}
                <div className="mt-2 flex flex-wrap items-center gap-6 border-t border-white/10 pt-4">
                  <Toggle label="Has Verified Email" defaultOn />
                  <Toggle label="Changed Job Recently" />
                </div>

                {/* Bottom action row */}
                <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/55">
                    <span className="text-yellow-300">⚡</span>
                    Estimated Reach:{" "}
                    <span className="font-semibold text-white/85">
                      ~12,000+
                    </span>{" "}
                    candidates
                  </div>

                  <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold hover:bg-blue-500">
                    <SearchSmallIcon />
                    Find Leads
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT column */}
            <div className="space-y-4">
              {/* Quick CSV Import */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/[0.02]">
                    <UploadIcon />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold text-white/90">
                    Quick CSV Import
                  </div>
                  <div className="mt-2 text-xs text-white/50">
                    Drag files here or click to browse
                  </div>
                  <div className="mt-2 text-[11px] text-white/35">
                    SUPPORTS .CSV, .XLSX
                  </div>
                </div>
              </div>

              {/* Saved lists */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-wider text-white/45">
                    SAVED FROM SALES NAV
                  </div>
                  <button className="text-xs font-semibold text-blue-400 hover:text-blue-300">
                    Sync Now
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  <SavedCard
                    title="Q3 SaaS Founders"
                    meta="Created 2 days ago • 145 leads"
                    tag="New"
                  />
                  <SavedCard
                    title="NYC Marketing VP"
                    meta="Synced 4 hours ago • 52 leads"
                  />
                </div>
              </div>

              {/* Recent activity */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs font-semibold tracking-wider text-white/45">
                  RECENT ACTIVITY
                </div>

                <div className="mt-4 space-y-3">
                  <ActivityRow
                    title={`Search: "Head of Sales" in UK`}
                    meta="2 mins ago • 340 results"
                  />
                  <ActivityRow
                    title="Import: october_leads.csv"
                    meta="1 hour ago • 1,200 rows"
                    icon={<FileSmallIcon />}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------- small UI ---------- */

function Tab({
  active,
  icon,
  children,
}: {
  active?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={[
        "relative inline-flex items-center gap-2 pb-3 transition", // ✅ relative added
        active ? "text-white" : "text-white/55 hover:text-white/80",
      ].join(" ")}
    >
      <span className={active ? "text-white/80" : "text-white/40"}>{icon}</span>
      <span className="font-medium">{children}</span>

      {active ? (
        <span className="absolute bottom-0 left-0 h-[2px] w-full rounded bg-blue-500/80" />
      ) : null}
    </button>
  );
}


function Metric({
  label,
  value,
  valueClass = "text-white/90",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="text-right">
      <div className="text-[11px] font-semibold tracking-wider text-white/45">
        {label}
      </div>
      <div className={["mt-1 text-lg font-semibold", valueClass].join(" ")}>
        {value}
      </div>
    </div>
  );
}

function Toggle({ label, defaultOn }: { label: string; defaultOn?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className={[
          "relative h-6 w-11 rounded-full border transition",
          defaultOn
            ? "border-blue-500/30 bg-blue-600"
            : "border-white/15 bg-white/[0.06]",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white transition",
            defaultOn ? "left-6" : "left-1",
          ].join(" ")}
        />
      </button>
      <span className="text-xs text-white/55">{label}</span>
    </div>
  );
}

function SavedCard({
  title,
  meta,
  tag,
}: {
  title: string;
  meta: string;
  tag?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-white/55">
              <BookmarkIcon />
            </span>
            <div className="truncate text-sm font-semibold text-white/85">
              {title}
            </div>
            {tag ? (
              <span className="rounded-full border border-green-500/20 bg-green-500/15 px-2 py-0.5 text-[10px] font-semibold text-green-200">
                {tag}
              </span>
            ) : null}
          </div>
          <div className="mt-1 text-xs text-white/45">{meta}</div>
        </div>
      </div>

      <button className="mt-3 h-9 w-full rounded-xl border border-white/10 bg-white/[0.02] text-xs font-semibold text-white/70 hover:bg-white/[0.06]">
        Load Filter
      </button>
    </div>
  );
}

function ActivityRow({
  title,
  meta,
  icon,
}: {
  title: string;
  meta: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="mt-0.5 text-white/45">{icon ?? <SearchSmallIcon />}</div>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-white/85">
          {title}
        </div>
        <div className="mt-1 text-xs text-white/45">{meta}</div>
      </div>
    </div>
  );
}

/* ---------- icons ---------- */
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
function SearchSmallIcon() {
  return <SearchIcon />;
}
function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16M7 12h10M10 18h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18 3 12l6-6M15 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 7h16v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
function GridSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h7v7H4V4Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M13 4h7v7h-7V4Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 13h7v7H4v-7Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M13 13h7v7h-7v-7Z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 16V4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M7 9l5-5 5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20h16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3h12v18l-6-4-6 4V3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m14.5 9.5-2 5-5 2 2-5 5-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function FileSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M14 2v5h5" stroke="currentColor" strokeWidth="1.7" />
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
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19a2.5 2.5 0 0 0 5 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function QuestionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9.7 9a2.3 2.3 0 1 1 3.7 1.8c-.9.6-1.4 1.1-1.4 2.2v.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12 17h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
