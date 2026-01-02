"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: GridIcon },
  {
    label: "Lead Extraction",
    href: "/dashboard/extraction",
    icon: DatabaseIcon,
  },
  { label: "Scoring", href: "/dashboard/scoring", icon: SparkIcon },

  // ✅ NEW: below Scoring
  { label: "Enrichment", href: "/dashboard/enrichment", icon: WandIcon },

  { label: "Campaigns", href: "/dashboard/campaigns", icon: PlayIcon },
  { label: "CRM Integration", href: "/dashboard/crm", icon: PlugIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[280px] flex-col border-r border-white/10 bg-white/[0.02]">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600/20 ring-1 ring-blue-500/20">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-xs font-bold">
            G
          </div>
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-white/90">LeadIntel</div>
          <div className="text-xs text-white/45">Growth Platform</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="px-3">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition",
                active
                  ? "bg-blue-600 text-white shadow-[0_14px_30px_rgba(37,99,255,0.25)]"
                  : "text-white/70 hover:bg-white/[0.04] hover:text-white",
              ].join(" ")}
            >
              <item.icon className={active ? "text-white" : "text-white/55"} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom area */}
      <div className="mt-auto p-4">
        {/* ✅ Affiliate / Program (above profile card) */}
        <div className="mb-3 flex flex-col gap-2">
          <Link
            href="/pricing"
            className="w-full rounded-lg  bg-white/[0.03] px-3 py-2 text-left font-size: 15px; font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white"
          >
            Pricing
          </Link>

          <Link
            href="/affiliate-program"
            className="w-full rounded-lg  bg-white/[0.03] px-3 py-2 text-left font-size: 15px; font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white"
          >
            Affiliate Program
          </Link>
        </div>

        {/* Profile card */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-400/20 ring-1 ring-white/10" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white/90">
              Alex Morgan
            </div>
            <div className="truncate text-xs text-white/45">
              alex@leadintel.io
            </div>
          </div>

          <button
            type="button"
            className="ml-auto rounded-lg border border-white/10 bg-white/[0.03] p-2 text-white/60 hover:bg-white/[0.06]"
            aria-label="Settings"
            title="Settings"
          >
            <GearIcon className="text-white/60" />
          </button>
        </div>

        {/* ✅ Privacy / Terms (below profile card) */}
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-white/45">
          <Link href="/privacy" className="hover:text-white/75 hover:underline">
            Privacy
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/terms" className="hover:text-white/75 hover:underline">
            Term &amp; Condition
          </Link>
        </div>
      </div>
    </aside>
  );
}

/* ------- Icons ------- */
function IconWrap({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={["grid h-5 w-5 place-items-center", className ?? ""].join(" ")}
    >
      {children}
    </span>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h7v7H4V4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M13 4h7v7h-7V4Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 13h7v7H4v-7Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M13 13h7v7h-7v-7Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    </IconWrap>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 7c0 1.7 2.7 3 6 3s6-1.3 6-3-2.7-3-6-3-6 1.3-6 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M6 7v10c0 1.7 2.7 3 6 3s6-1.3 6-3V7"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M6 12c0 1.7 2.7 3 6 3s6-1.3 6-3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    </IconWrap>
  );
}

function SparkIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2.2 7.3L22 12l-7.8 2.7L12 22l-2.2-7.3L2 12l7.8-2.7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

function WandIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 20 20 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 17l-3 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M14 4l6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 6l.8-2.2L15 3l-2.2-.8L12 0l-.8 2.2L9 3l2.2.8L12 6Z"
          fill="currentColor"
        />
      </svg>
    </IconWrap>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 5l12 7-12 7V5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}

function PlugIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 3v6M15 3v6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 9h10v3a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V9Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M12 17v4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    </IconWrap>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <IconWrap className={className}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M19.4 15a7.9 7.9 0 0 0 .1-1l2-1.2-2-3.4-2.3.7a8 8 0 0 0-1.7-1L15 6h-6l-.5 2.1a8 8 0 0 0-1.7 1L4.5 8.4l-2 3.4 2 1.2a7.9 7.9 0 0 0 .1 1 7.9 7.9 0 0 0-.1 1l-2 1.2 2 3.4 2.3-.7a8 8 0 0 0 1.7 1L9 22h6l.5-2.1a8 8 0 0 0 1.7-1l2.3.7 2-3.4-2-1.2a7.9 7.9 0 0 0-.1-1Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrap>
  );
}
