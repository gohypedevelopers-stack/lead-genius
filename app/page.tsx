"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen w-full bg-ink-900 text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[460px_1fr]">
        {/* LEFT */}
        <section className="border-r border-white/10 bg-white/[0.02] px-6 py-10 sm:px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
              <div className="grid h-6 w-6 place-items-center rounded-lg bg-blue-600">
                <span className="text-xs font-bold">LG</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-white/90">
              LeadGenius
            </div>
          </div>

          <h1 className="mt-8 text-3xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-white/60">
            Log in to access your lead intelligence dashboard.
          </p>

          {/* Social buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/90 hover:bg-white/[0.05]"
            >
              Google
            </button>
            <button
              type="button"
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-white/90 hover:bg-white/[0.05]"
            >
              LinkedIn
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4 text-xs text-white/45">
            <div className="h-px flex-1 bg-white/10" />
            <span>Or continue with email</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // After login button click => go to setup page
              router.push("/dashboard");
            }}
            className="space-y-4"
          >
            <div>
              <label className="mb-2 block text-xs font-medium text-white/70">
                Work Email
              </label>
              <input
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                placeholder="name@company.com"
                type="email"
                required
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-xs font-medium text-white/70">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 pr-12 text-sm text-white/90 outline-none placeholder:text-white/30 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/70 hover:bg-white/[0.06]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-xs text-white/65">
              <input type="checkbox" className="h-4 w-4 accent-blue-600" />
              Remember me for 30 days
            </label>

            <button
              type="submit"
              className="mt-2 flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold hover:bg-blue-500"
            >
              Log In
            </button>

            <p className="pt-2 text-center text-xs text-white/55">
              New here?{" "}
              <button
                type="button"
                onClick={() => router.push("/setup")}
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Start your free trial
              </button>
            </p>

            <p className="pt-3 text-center text-[11px] text-white/40">
              SOC2 Type II Compliant &amp; Encrypted
            </p>
          </form>
        </section>

        {/* RIGHT */}
        <aside className="relative hidden overflow-hidden lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,255,0.16),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.12),transparent_55%),linear-gradient(180deg,#050814,#070B13)]" />

          {/* Network style SVG */}
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <svg viewBox="0 0 900 520" className="w-[92%]">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g stroke="#56E0FF" strokeOpacity="0.55" strokeWidth="2">
                <path d="M110 330 L230 220 L390 260 L520 160 L700 210 L820 120" />
                <path d="M110 330 L260 380 L420 360 L560 420 L740 350 L820 120" />
                <path d="M230 220 L260 380 L390 260 L420 360 L520 160 L560 420" />
              </g>

              <g filter="url(#glow)" fill="#9EE7FF">
                {[
                  [110, 330],
                  [230, 220],
                  [390, 260],
                  [520, 160],
                  [700, 210],
                  [820, 120],
                  [260, 380],
                  [420, 360],
                  [560, 420],
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r={10} opacity="0.9" />
                ))}
              </g>
            </svg>
          </div>

          {/* Quote */}
          <div className="absolute bottom-10 left-1/2 w-[560px] max-w-[92%] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div className="text-yellow-300">★★★★★</div>
            <p className="mt-3 text-lg leading-snug text-white/90">
              “LeadGenius has completely transformed our outbound strategy.
              We’ve seen a 3x increase in qualified leads since implementing
              their scoring models.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-400/20 ring-1 ring-white/15" />
              <div>
                <div className="text-sm font-semibold">Marcus Chen</div>
                <div className="text-xs text-white/55">
                  VP of Sales at TechFlow
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
