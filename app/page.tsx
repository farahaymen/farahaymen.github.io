"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  GraduationCap,
  Trophy,
  BookOpen,
  BrainCircuit,
  Activity,
  ShieldCheck,
  Microscope,
  ArrowUpRight,
  Cpu,
  BarChart3,
  Network,
  Globe,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const profile = {
  name: "Farah Aymen",
  role: "AI Researcher • Assistant Lecturer • PhD Applicant",
  location: "Cairo, Egypt",
  email: "farah.a.monir@gmail.com",
  GitHub: "https://GitHub.com/farahaymen", // change this
  tagline:
    "I build mathematically grounded machine learning systems for time series, generative AI, multimodal learning, and interpretable architectures.",
  bio:
    "M.Sc. in Artificial Intelligence with First Class Honors (GPA 4.0, Valedictorian). My research centers on representation learning, approximation-driven neural architectures, and robust model design across structured and sequential data.",
};

const quickStats = [
  { label: "GPA", value: "4.0/4.0", note: "First Class Honors" },
  { label: "Award", value: "Best Paper", note: "FICTA 2025" },
  { label: "Research Focus", value: "KANs", note: "Approximation & efficiency" },
  { label: "Teaching", value: "AI + NLP", note: "Labs, projects, mentoring" },
];

const researchAreas = [
  {
    title: "Structured Neural Architectures",
    text:
      "Kolmogorov–Arnold Networks, polynomial basis substitutions, efficient approximation, and interpretable edge-wise function learning.",
    icon: Network,
  },
  {
    title: "Time-Series Modeling",
    text:
      "ECG forecasting, sequential dynamics, and compact architectures that balance predictive fidelity with computational cost.",
    icon: Activity,
  },
  {
    title: "Vision & Multimodal AI",
    text:
      "Deepfake detection, wavelet/frequency-domain representations, and transformer-based video understanding.",
    icon: ShieldCheck,
  },
  {
    title: "Generative AI",
    text:
      "VAE-GANs, diffusion models, synthetic image generation, and data augmentation for small or imbalanced datasets.",
    icon: BrainCircuit,
  },
];

const publications = [
  {
    year: "2025",
    type: "Conference • Best Paper Award",
    title: "KANs: Comparative Analysis of Polynomial Bases for ECG Time-Series Forecasting",
    venue: "FICTA 2025, Manchester, UK",
    summary:
      "Compared B-spline, Chebyshev, Hermite, and Legendre KAN variants on MIT–BIH ECG forecasting, demonstrating near-equivalent accuracy with substantially lower computational cost for polynomial bases.",
    highlight:
      "Chebyshev and Hermite KANs matched B-spline accuracy within 2×10⁻⁴ MSE while roughly halving parameters and MACs.",
    tags: ["KANs", "ECG", "Approximation Theory", "Time Series"],
  },
  {
    year: "2024",
    type: "Conference Paper",
    title: "Application of Spatial and Wavelet Transforms for Improved Deep Fake Detection",
    venue: "AIRC 2024",
    summary:
      "Studied spatial and frequency-domain representations for deepfake detection and showed the advantage of wavelet-transformed inputs in a CNN-LSTM pipeline.",
    highlight:
      "Wavelet CNN-LSTM achieved 92.24% accuracy, outperforming spatial-domain baselines.",
    tags: ["Deepfake Detection", "Wavelets", "CNN-LSTM", "Video Forensics"],
  },
  {
    year: "2024",
    type: "Conference Paper",
    title: "Large Vision Models: How Transformer-based Models excelled over Traditional Deep Learning Architectures in Video Processing",
    venue: "AIRC 2024",
    summary:
      "Analyzed why transformer-based large vision models outperform traditional CNN/GAN pipelines in video summarization and prediction.",
    highlight:
      "Frames a strong research narrative around long-range dependency modeling in visual data.",
    tags: ["Vision Transformers", "Video Processing", "LVMs"],
  },
  {
    year: "2024",
    type: "Journal Article",
    title: "Advances in Breast Cancer Segmentation: A Comprehensive Review",
    venue: "Acadlore Transactions on AI and Machine Learning",
    summary:
      "A review of segmentation methods across classical, machine learning, deep learning, and manual pipelines for breast cancer imaging.",
    highlight:
      "Synthesizes evaluation metrics and clinical integration challenges; cites U-Net performance up to 99.7% in surveyed work.",
    tags: ["Medical AI", "Segmentation", "Review", "Breast Imaging"],
  },
  {
    year: "2024",
    type: "Research Paper",
    title: "Synthetic Water Crystal Image Generation using VAE-GANs and Diffusion Models",
    venue: "Research Collaboration",
    summary:
      "Explored VAE-GANs and diffusion pipelines for generating synthetic water crystal images to address severe class imbalance in a 13-class dataset.",
    highlight:
      "Investigated loss behavior, preprocessing choices, and synthetic data quality for the Microparticle class.",
    tags: ["Generative AI", "Diffusion", "VAE-GAN", "Image Synthesis"],
  },
];

const deepfakeResults = [
  { model: "3D-CNN", accuracy: 86.07 },
  { model: "CNN-LSTM (Spatial)", accuracy: 90.26 },
  { model: "CNN-LSTM (Wavelet)", accuracy: 92.24 },
];

const kanTradeoff = [
  { basis: "B-spline", efficiency: 55, accuracyScore: 99.9 },
  { basis: "Chebyshev", efficiency: 100, accuracyScore: 99.7 },
  { basis: "Hermite", efficiency: 98, accuracyScore: 99.7 },
  { basis: "Legendre", efficiency: 92, accuracyScore: 99.4 },
];

const waterCrystalLosses = [
  { metric: "GAN Loss", value: 1.273 },
  { metric: "Reconstruction", value: 0.2619 },
  { metric: "Prior", value: 0.19 },
];

const breastCancerReview = [
  { subject: "U-Net", score: 99.7 },
  { subject: "Dice / F-score", score: 88 },
  { subject: "IoU", score: 82 },
  { subject: "AUC", score: 90 },
  { subject: "Clinical Relevance", score: 94 },
  { subject: "Data Challenges", score: 78 },
];

const experience = [
  {
    period: "2024 – 2025",
    title: "Kolmogorov–Arnold Networks for ECG Forecasting and PDE Solving",
    bullets: [
      "Replaced B-spline parameterizations with orthogonal polynomial bases to analyze approximation stability and expressivity.",
      "Designed reproducible pipelines for ECG forecasting and Burgers' equation experiments.",
      "Benchmarked accuracy, MSE, MACs, and runtime under controlled conditions.",
    ],
  },
  {
    period: "2024",
    title: "Protein Graph Classification using GCNs",
    bullets: [
      "Built a PyTorch Geometric pipeline for protein structure classification.",
      "Implemented clique-based graph feature extraction and interpretable analysis.",
    ],
  },
  {
    period: "Ongoing",
    title: "Teaching and Academic Mentoring",
    bullets: [
      "Assistant Lecturer in AI-related modules with hands-on teaching in ML, NLP, and programming.",
      "Mentoring student projects and designing technically rigorous applied AI learning experiences.",
    ],
  },
];

const skillGroups = [
  ["Python", "PyTorch", "Tensorflow", "JAX", "Equinox", "Optax"],
  ["Transformers", "LLMs", "RAG", "LangChain", "Langgraph", "Langsmith"],
  ["Time Series", "Graph ML", "Generative AI", "Medical AI", "Computer Vision"],
  ["Experiment Design", "Interpretability", "Evaluation", "Academic Writing", "Teaching"],
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="text-slate-300 leading-7">{text}</p>
    </div>
  );
}

function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl">
      <CardContent className="p-6">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
        <p className="mt-1 text-sm text-slate-300">{note}</p>
      </CardContent>
    </Card>
  );
}

function PublicationCard({
  item,
}: {
  item: {
    year: string;
    type: string;
    title: string;
    venue: string;
    summary: string;
    highlight: string;
    tags: string[];
  };
}) {
  return (
    <Card className="h-full rounded-3xl border-white/10 bg-white/[0.04] shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="rounded-full bg-white/10 text-slate-100 hover:bg-white/10">
            {item.year}
          </Badge>
          <Badge
            variant="outline"
            className="rounded-full border-white/15 text-slate-300"
          >
            {item.type}
          </Badge>
        </div>
        <div>
          <CardTitle className="text-xl leading-7 text-white">
            {item.title}
          </CardTitle>
          <CardDescription className="pt-2 text-slate-400">
            {item.venue}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-300 leading-7">{item.summary}</p>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-50">
          {item.highlight}
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full bg-slate-800 text-slate-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function FarahAymenPortfolio() {
  return (
    <div className="min-h-screen bg-[#06111f] text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_25%),linear-gradient(180deg,#06111f_0%,#081423_45%,#020617_100%)]" />

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-8 lg:px-10">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl md:p-10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="rounded-full bg-cyan-400/15 px-4 py-1 text-cyan-100 hover:bg-cyan-400/15">
                PhD Application Portfolio
              </Badge>
              <Badge
                variant="outline"
                className="rounded-full border-white/15 px-4 py-1 text-slate-300"
              >
                AI Research • Approximation • Time Series
              </Badge>
            </div>

            <div className="mt-8 flex items-start gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400/80 to-violet-500/80 text-2xl font-semibold text-white shadow-xl">
                FA
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {profile.name}
                </h1>
                <p className="text-lg text-cyan-100 md:text-xl">{profile.role}</p>
                <p className="text-sm text-slate-400">{profile.location}</p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
              {profile.tagline}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              {profile.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                className="rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                asChild
              >
                <a href={`mailto:${profile.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> {profile.email}
                </a>
              </Button>

              <Button
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent text-slate-100 hover:bg-white/5"
                asChild
              >
                <a href={profile.GitHub} target="_blank" rel="noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                className="rounded-2xl border-white/15 bg-transparent text-slate-100 hover:bg-white/5"
              >
                <BookOpen className="mr-2 h-4 w-4" /> Publications
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
          >
            {quickStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="Research Identity"
            title="A portfolio designed for PhD selection committees"
            text="This page is structured to make your profile legible in under a minute: clear academic positioning, quantitative research highlights, focused publication summaries, and visual evidence from your papers."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {researchAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.title}
                  className="rounded-3xl border-white/10 bg-white/[0.04] shadow-xl"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-6 w-6 text-cyan-200" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {area.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-24 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Trophy className="h-5 w-5 text-cyan-200" />
                Featured Achievement
              </CardTitle>
              <CardDescription className="text-slate-400">
                Signature result from the KAN ECG forecasting work
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-emerald-100">
                  Best Paper • FICTA 2025
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Polynomial KANs that stay accurate while getting lighter
                </h3>
                <p className="mt-4 text-slate-200 leading-7">
                  The core result: cubic Chebyshev and Hermite KANs preserve ECG
                  forecasting performance while cutting the computational burden
                  substantially relative to B-spline KANs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm text-slate-400">Accuracy Gap</p>
                  <p className="mt-2 text-3xl font-semibold text-white">≤ 2×10⁻⁴</p>
                  <p className="mt-1 text-sm text-slate-300">MSE difference to B-splines</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm text-slate-400">Efficiency</p>
                  <p className="mt-2 text-3xl font-semibold text-white">~50%</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Fewer parameters and MACs
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm text-slate-400">Architecture</p>
                  <p className="mt-2 text-3xl font-semibold text-white">3-layer</p>
                  <p className="mt-1 text-sm text-slate-300">Comparative KAN topology</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <BarChart3 className="h-5 w-5 text-cyan-200" />
                Recreated Paper Diagram
              </CardTitle>
              <CardDescription className="text-slate-400">
                KAN basis trade-off: efficiency versus accuracy
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[360px] p-2 pr-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={kanTradeoff}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="basis" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      background: "#08111f",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 16,
                    }}
                  />
                  <Bar dataKey="efficiency" radius={[10, 10, 0, 0]} fill="#22d3ee" />
                  <Bar dataKey="accuracyScore" radius={[10, 10, 0, 0]} fill="#a78bfa" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="mt-24">
          <SectionHeading
            eyebrow="Publication Highlights"
            title="Selected papers and what they show"
            text="The emphasis here is not only on titles, but on the concrete research signal behind each paper: methodology, result, and why it matters for doctoral work."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {publications.map((item) => (
              <PublicationCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 xl:grid-cols-3">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-5 w-5 text-cyan-200" />
                Deepfake Detection Results
              </CardTitle>
              <CardDescription className="text-slate-400">
                Spatial versus wavelet-domain performance
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[320px] p-2 pr-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deepfakeResults}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis
                    dataKey="model"
                    stroke="#94a3b8"
                    interval={0}
                    angle={-8}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis domain={[80, 95]} stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      background: "#08111f",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 16,
                    }}
                  />
                  <Bar dataKey="accuracy" radius={[10, 10, 0, 0]} fill="#34d399" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Cpu className="h-5 w-5 text-cyan-200" />
                Research Signal
              </CardTitle>
              <CardDescription className="text-slate-400">
                Why this portfolio is PhD-strong
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-slate-300">
              <p>Quantitative work in approximation-driven architecture design.</p>
              <p>
                Evidence across time series, vision, generative AI, medical AI, and
                graph learning.
              </p>
              <p>
                Strong academic indicators: 4.0 GPA, valedictorian standing, Best
                Paper distinction.
              </p>
              <p>Clear progression toward rigorous, theory-aware doctoral research.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-24 grid gap-8 xl:grid-cols-2">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Microscope className="h-5 w-5 text-cyan-200" />
                Water Crystal Generation
              </CardTitle>
              <CardDescription className="text-slate-400">
                Loss profile reported for the VAE-GAN experiments
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[320px] p-2 pr-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={waterCrystalLosses}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="metric" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      background: "#08111f",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 16,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#22d3ee"
                    fill="#22d3ee"
                    fillOpacity={0.35}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <GraduationCap className="h-5 w-5 text-cyan-200" />
                Breast Cancer Segmentation Review
              </CardTitle>
              <CardDescription className="text-slate-400">
                Visual summary of review themes and reported strength areas
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[320px] p-2 pr-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={breastCancerReview} outerRadius="72%">
                  <PolarGrid stroke="rgba(255,255,255,0.12)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#cbd5e1", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    tick={{ fill: "#94a3b8", fontSize: 10 }}
                    domain={[0, 100]}
                  />
                  <Radar
                    dataKey="score"
                    stroke="#a78bfa"
                    fill="#a78bfa"
                    fillOpacity={0.35}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#08111f",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 16,
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="mt-24 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Experience Timeline</CardTitle>
              <CardDescription className="text-slate-400">
                Research and academic development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((item, idx) => (
                <div key={item.title} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-cyan-300" />
                  {idx !== experience.length - 1 && (
                    <div className="absolute left-[5px] top-6 h-full w-px bg-white/10" />
                  )}
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border-white/10 bg-white/[0.04] shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Technical Toolkit</CardTitle>
              <CardDescription className="text-slate-400">
                Methods, libraries, and research competencies
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-slate-950/40 p-5"
                >
                  <div className="flex flex-wrap gap-2">
                    {group.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-full bg-white/10 text-slate-100 hover:bg-white/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-24">
          <Card className="rounded-[2rem] border-white/10 bg-gradient-to-r from-cyan-500/15 via-violet-500/10 to-transparent shadow-2xl">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-100">
                  Open to PhD opportunities
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Looking for doctoral research positions in machine learning, AI, and
                  structured learning systems.
                </h2>
                <p className="mt-4 text-slate-200 leading-7">
                  I am particularly interested in research environments that value
                  mathematical grounding, careful evaluation, interpretability, and
                  impactful machine learning applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-2xl bg-white text-slate-950 hover:bg-slate-100" asChild>
                  <a href={`mailto:${profile.email}`}>
                    Contact Me <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl border-white/15 bg-transparent text-slate-100 hover:bg-white/5"
                >
                  View CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}