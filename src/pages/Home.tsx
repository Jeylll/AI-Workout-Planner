import { Link, Navigate } from "react-router-dom";
import {
  Zap,
  Target,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Plans",
    description:
      "Get a training program tailored to your goals, experience, and schedule.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Whether you want to build muscle, lose fat, or get stronger — we optimize for your goal.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Plans that fit your lifestyle. Train 2 days or 6 — we adapt to you.",
  },
  {
    icon: Clock,
    title: "Time-Efficient",
    description:
      "Every workout is designed to maximize results in your available time.",
  },
];

export default function Home() {
  const { user, isLoading } = useAuth();

  // Redirect authenticated users to profile
  if (!isLoading && user) {
    return <Navigate to="/profile" replace />;
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-28 md:pt-36 pb-20 px-6 overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/8 via-transparent to-transparent" />
        <div className="absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-[var(--color-accent)]/12 blur-3xl animate-float-slow" />
        <div className="absolute top-40 left-[-15%] w-[420px] h-[420px] rounded-full bg-white/5 blur-3xl animate-float-slower" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[color:rgba(24,24,27,0.6)] backdrop-blur-xl mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-muted)]">
              Build a smarter plan in under 60 seconds
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up animate-fade-up-delay-1">
            Your Perfect
            <br />
            <span className="text-gradient">Gym Plan</span> in Seconds
          </h1>

          <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10 animate-fade-up animate-fade-up-delay-2">
            Stop guessing. Get a personalized training program built by AI,
            tailored to your goals, experience, and schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-fade-up-delay-3">
            <Link to="/auth/sign-up">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="secondary">
                See How It Works
              </Button>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up animate-fade-up-delay-4">
            {[
              { value: "30s", label: "Personalized in minutes" },
              { value: "4.9/5", label: "User satisfaction" },
              { value: "2k+", label: "Plans generated" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-[var(--color-border)] bg-[color:rgba(24,24,27,0.7)] backdrop-blur-xl px-5 py-4"
              >
                <div className="text-2xl font-semibold text-[var(--color-foreground)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
              Why Lift.Smart?
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto animate-fade-up animate-fade-up-delay-1">
              We combine fitness expertise with AI to create programs that
              actually work for you.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] mb-12">
            <Card
              variant="bordered"
              className="feature-card bg-[color:rgba(24,24,27,0.75)] backdrop-blur-xl"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
                Built for real gyms
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Train smarter with structure, not guesswork.
              </h3>
              <p className="text-[var(--color-muted)]">
                Lift.Smart adapts to the equipment you have, the time you can
                train, and the progress you want. Every plan balances volume,
                recovery, and progressive overload.
              </p>
            </Card>

            <Card
              variant="bordered"
              className="feature-card bg-[color:rgba(24,24,27,0.75)] backdrop-blur-xl"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
                The project
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                From onboarding to your next PR, fast.
              </h3>
              <p className="text-[var(--color-muted)]">
                Answer a few questions, get a full routine, and tweak it as you
                grow. The system keeps your plan aligned with your goals so you
                stay consistent.
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 features-grid">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="bordered"
                className="group feature-card"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[var(--color-muted)] text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-border)] px-6 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold">Lift.Smart</div>
            <p className="text-sm text-[var(--color-muted)] max-w-md mt-2">
              Smarter training plans powered by AI, built for real schedules and
              real progress.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
            <Link className="hover:text-[var(--color-foreground)]" to="/auth/sign-up">
              Get started
            </Link>
            <a className="hover:text-[var(--color-foreground)]" href="#features">
              Features
            </a>
            <Link className="hover:text-[var(--color-foreground)]" to="/auth/sign-in">
              Sign in
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}