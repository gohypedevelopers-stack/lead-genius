"use client";

import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-ink-900 text-white">
      <div className="flex">
        <Sidebar />

        {/* Content */}
        <section className="min-h-screen flex-1 px-6 py-6">
          {/* Top bar */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back, Alex
              </h1>
              <p className="mt-1 text-sm text-white/55">
                Here is your pipeline health check for the last 7 days.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative">
                <input
                  placeholder="Search leads..."
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-11 pr-4 text-sm text-white/85 outline-none placeholder:text-white/35 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 sm:w-[320px]"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45">
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
                </span>
              </div>

              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white/85 hover:bg-white/[0.06]">
                <span className="text-white/55">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 3v3M17 3v3"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 7h16v14H4V7Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M4 11h16"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
                Last 7 Days
              </button>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            <StatCard
              title="TOTAL EXTRACTED"
              value="12,450"
              chip="+12% vs last week"
            />
            <StatCard
              title="QUALIFIED LEADS"
              value="845"
              chip="+5% High intent"
            />
            <StatCard
              title="ACTIVE CAMPAIGNS"
              value="12"
              chip="0% Running smoothly"
            />
            <StatCard
              title="RESPONSES"
              value="342"
              chip="+4.2% Response rate"
            />
            <StatCard title="PENDING TASKS" value="8" chip="2 Urgent items" />
          </div>

          {/* Main grid */}
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {/* Quick actions */}
            <Card className="lg:col-span-1">
              <CardTitle>Quick Actions</CardTitle>

              <div className="mt-4 space-y-3">
                <ActionTile
                  title="Start Extraction"
                  desc="Import list or scrape URL to find prospects."
                  highlight
                />
                <ActionTile
                  title="View Scored Leads"
                  desc="Review 845 high-intent leads pending."
                />
                <ActionTile
                  title="Launch Campaign"
                  desc="Select template and target audience."
                />
              </div>
            </Card>

            {/* Donut */}
            <Card className="lg:col-span-1">
              <div className="flex items-center justify-between">
                <CardTitle>Performance Analytics</CardTitle>
                <span className="text-xs text-white/45">
                  Lead Quality Distribution
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:items-center">
                {/* Fake donut (CSS ring) */}
                <div className="mx-auto grid h-44 w-44 place-items-center">
                  <div className="relative h-44 w-44">
                    {/* Base grey track (full ring behind) */}
                    <div className="absolute inset-0 rounded-full bg-[#5f6f87]/70" />

                    {/* Colored segments on top */}
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(#2563ff_0_45%,#10b981_45%_70%,#64748b_70%_100%)]" />

                    {/* Inner hole (controls ring thickness) */}
                    <div className="absolute inset-[16px] rounded-full bg-ink-900" />

                    {/* Inner shadow for depth (dark ring inside) */}
                    <div className="pointer-events-none absolute inset-[16px] rounded-full shadow-[inset_0_0_0_10px_rgba(0,0,0,0.35)]" />

                    {/* Soft highlight (top-left glow) */}
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_45%)]" />

                    {/* Center content */}
                    <div className="absolute inset-[16px] grid place-items-center rounded-full">
                      <div className="text-center">
                        <div className="text-3xl font-semibold tracking-tight">
                          12.4k
                        </div>
                        <div className="mt-1 text-sm text-white/45">
                          Total Leads
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <LegendDot
                    color="bg-green-500"
                    label="Hot (25%)"
                    sub="Highly Qualified"
                  />
                  <LegendDot
                    color="bg-blue-500"
                    label="Warm (45%)"
                    sub="Engagement detected"
                  />
                  <LegendDot
                    color="bg-slate-500"
                    label="Cold (30%)"
                    sub="No activity"
                  />
                </div>
              </div>
            </Card>

            {/* Bar chart */}
            <Card className="lg:col-span-1">
              <div className="flex items-center justify-between">
                <CardTitle>Outreach Performance</CardTitle>
                <span className="text-xs text-white/45">Last 30 Days</span>
              </div>

              <div className="mt-6">
                <div className="flex items-end gap-3">
                  {[38, 62, 24, 55, 32, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex w-full flex-col items-center gap-2"
                    >
                      <div
                        className="w-full rounded-lg bg-blue-600/90"
                        style={{ height: `${h * 2}px` }}
                      />
                      <div className="text-[11px] text-white/45">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Table */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/90">
                Recent Pipeline Activity
              </div>
              <button className="text-sm font-semibold text-blue-400 hover:text-blue-300">
                View All
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-white/45">
                  <tr className="border-b border-white/10">
                    <th className="py-3">Lead / Campaign</th>
                    <th className="py-3">Action</th>
                    <th className="py-3">Status</th>
                    <th className="py-3">Date</th>
                    <th className="py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-white/80">
                  <Row
                    name="Jane Doe"
                    sub="Acme Corp"
                    action={`Replied to "Intro Sequence"`}
                    status="Interested"
                    statusColor="green"
                    date="Just now"
                  />
                  <Row
                    name="LinkedIn Extraction"
                    sub="Source: Sales Nav"
                    action="50 new leads enriched"
                    status="Completed"
                    statusColor="blue"
                    date="2 mins ago"
                  />
                  <Row
                    name="HubSpot Sync"
                    sub="Weekly Batch"
                    action="Syncing new contacts"
                    status="Pending"
                    statusColor="yellow"
                    date="15 mins ago"
                  />
                  <Row
                    name="Michael Scott"
                    sub="Dunder Mifflin"
                    action={`Opened email "Demo Request"`}
                    status="Active"
                    statusColor="blue"
                    date="1 hour ago"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------- Small UI components ---------- */

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-semibold text-white/90">{children}</div>;
}

function StatCard({
  title,
  value,
  chip,
}: {
  title: string;
  value: string;
  chip: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-[11px] font-semibold tracking-wider text-white/45">
        {title}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      <div className="mt-2 inline-flex rounded-lg bg-white/[0.04] px-2 py-1 text-[11px] text-white/60">
        {chip}
      </div>
    </div>
  );
}

function ActionTile({
  title,
  desc,
  highlight,
}: {
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      className={[
        "w-full rounded-2xl border p-4 text-left transition",
        highlight
          ? "border-blue-500/40 bg-blue-600/20 hover:bg-blue-600/25"
          : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]",
      ].join(" ")}
    >
      <div className="text-sm font-semibold text-white/90">{title}</div>
      <div className="mt-1 text-xs text-white/55">{desc}</div>
    </button>
  );
}

function LegendDot({
  color,
  label,
  sub,
}: {
  color: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={["mt-1 h-2.5 w-2.5 rounded-full", color].join(" ")} />
      <div>
        <div className="text-sm font-semibold text-white/85">{label}</div>
        <div className="text-xs text-white/45">{sub}</div>
      </div>
    </div>
  );
}

function Row({
  name,
  sub,
  action,
  status,
  statusColor,
  date,
}: {
  name: string;
  sub: string;
  action: string;
  status: string;
  statusColor: "green" | "blue" | "yellow";
  date: string;
}) {
  const badge =
    statusColor === "green"
      ? "bg-green-500/15 text-green-300 border-green-500/20"
      : statusColor === "yellow"
      ? "bg-yellow-500/15 text-yellow-200 border-yellow-500/20"
      : "bg-blue-500/15 text-blue-200 border-blue-500/20";

  return (
    <tr className="border-b border-white/5 last:border-b-0">
      <td className="py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-white/[0.06] ring-1 ring-white/10" />
          <div>
            <div className="font-semibold text-white/90">{name}</div>
            <div className="text-xs text-white/45">{sub}</div>
          </div>
        </div>
      </td>
      <td className="py-4 text-white/70">{action}</td>
      <td className="py-4">
        <span
          className={[
            "inline-flex rounded-full border px-3 py-1 text-xs font-semibold",
            badge,
          ].join(" ")}
        >
          {status}
        </span>
      </td>
      <td className="py-4 text-white/55">{date}</td>
      <td className="py-4 text-right text-white/50">⋮</td>
    </tr>
  );
}
