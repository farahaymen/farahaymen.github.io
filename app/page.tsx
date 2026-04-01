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
import { cn } from "@/lib/utils";
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
  role: "Assistant Lecturer • AI Researcher • PhD Applicant",
  location: "Cairo, Egypt",
  email: "farah.a.monir@gmail.com",
  github: "https://github.com/farahaymen",
  scholar: "https://scholar.google.com/citations?user=MVng0zAAAAAJ&hl=en",
  cv: "/files/farah_aymen_cv.pdf",
  tagline:
    "I build mathematically grounded machine learning systems for time series, generative AI, multimodal learning, and interpretable architectures.",
  bio:
    "M.Sc. in Artificial Intelligence with First Class Honors (GPA 4.0, Valedictorian). My research centers on representation learning, approximation-driven neural architectures, and robust model design across structured and sequential data.",
};

const quickStats = [
  { label: "GPA", value: "4.0/4.0", note: "First Class Honors" },
  { label: "Award", value: "Best Paper", note: "FICTA 2025" },
  { label: "Research Focus", value: "SciML", note: "Approximation & efficiency" },
  { label: "Teaching", value: "AI, NLP, OS", note: "Labs, projects, mentoring" },
];

const researchAreas = [
  {
    title: "Structured Neural Architectures",
    text:
      "Kolmogorov-Arnold Networks, polynomial basis substitutions, efficient approximation, and interpretable edge-wise function learning.",
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
      "Deepfake detection, wavelet and frequency-domain representations, and transformer-based video understanding.",
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
      "Analyzed why transformer-based large vision models outperform traditional CNN and GAN pipelines in video summarization and prediction.",
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
      "Assistant Lecturer in AI-related modules with hands-on teaching in machine learning, NLP, and programming.",
      "Mentoring student projects and designing technically rigorous applied AI learning experiences.",
    ],
  },
];

const skillGroups = [
  ["Python", "PyTorch", "TensorFlow", "JAX", "Equinox", "Optax"],
  ["Transformers", "LLMs", "RAG", "LangChain", "LangGraph", "LangSmith"],
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
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <p className="text-[1.0625rem] leading-8 text-slate-600">{text}</p>
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
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
        <p className="mt-1 text-sm text-slate-600">{note}</p>
      </CardContent>
    </Card>
  );
}

function SidebarItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a
      href={href}
      className="text-[0.95rem] leading-7 text-slate-700 transition-colors hover:text-slate-950"
    >
      {value}
    </a>
  ) : (
    <p className="text-[0.95rem] leading-7 text-slate-700">{value}</p>
  );

  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      {content}
    </div>
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
    <Card className="h-full rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100">
            {item.year}
          </Badge>
          <Badge
            variant="outline"
            className="rounded-full border-slate-300 text-slate-600"
          >
            {item.type}
          </Badge>
        </div>
        <div>
          <CardTitle className="text-xl leading-7 text-slate-900">
            {item.title}
          </CardTitle>
          <CardDescription className="pt-2 text-slate-500">
            {item.venue}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-[1.02rem] leading-8 text-slate-600">{item.summary}</p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-[0.95rem] leading-7 text-slate-700">
          {item.highlight}
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-100"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function SkillGroupCard({
  group,
}: {
  group: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 xl:flex xl:h-full xl:items-stretch">
      <div className="grid w-full gap-4 sm:grid-cols-2 xl:h-full xl:grid-rows-3">
        {group.map((skill, index) => {
          const isOddLastItem = group.length % 2 === 1 && index === group.length - 1;

          return (
            <Badge
              key={skill}
              variant="secondary"
              className={cn(
                "h-14 w-full justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center text-[0.92rem] leading-snug font-medium whitespace-normal text-slate-700 hover:bg-white xl:h-full xl:min-h-[5rem] xl:text-[1rem]",
                isOddLastItem && "sm:col-span-2"
              )}
            >
              {skill}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}

export default function FarahAymenPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#f7f8fb] text-slate-900 font-sans">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]" />

      <main className="mx-auto w-full max-w-[1800px] px-6 py-8 md:px-8 lg:px-10 lg:py-10 xl:px-12 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(0,400px)_minmax(0,1fr)] 2xl:gap-14">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-8 lg:self-start"
          >
            <div className="space-y-8 pb-6 lg:min-h-[calc(100vh-4rem)] lg:border-r lg:border-slate-200 lg:pr-8 xl:pr-10 2xl:pr-12">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="rounded-full bg-slate-100 px-4 py-1 text-slate-700 hover:bg-slate-100">
                  AI Research Portfolio
                </Badge>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-2xl font-semibold text-white shadow-sm">
                  FA
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                    {profile.name}
                  </h1>
                  <p className="text-[1.0625rem] leading-8 text-slate-700">{profile.role}</p>
                  <p className="text-sm text-slate-500">{profile.location}</p>
                </div>
              </div>

              <p className="text-[1.0625rem] leading-8 text-slate-700">{profile.tagline}</p>
              <p className="text-[0.95rem] leading-8 text-slate-600">{profile.bio}</p>

              <div className="grid gap-4 border-y border-slate-200 py-6 sm:grid-cols-2 lg:grid-cols-1">
                <SidebarItem label="Location" value={profile.location} />
                <SidebarItem
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <SidebarItem
                  label="Research Focus"
                  value="Structured neural architectures, time-series modeling, and generative AI."
                />
                <SidebarItem
                  label="Current Goal"
                  value="Doctoral research opportunities in machine learning, AI, and structured learning systems."
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Button
                  className="rounded-xl bg-slate-900 text-white hover:bg-slate-800"
                  asChild
                >
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  asChild
                >
                  <a href={profile.cv} target="_blank" rel="noreferrer">
                    View CV
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  asChild
                >
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Globe className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  asChild
                >
                  <a href={profile.scholar} target="_blank" rel="noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" /> Scholar
                  </a>
                </Button>
              </div>
            </div>
          </motion.aside>

          <div className="mt-10 min-w-0 lg:mt-0">
            <section className="grid gap-8 xl:grid-cols-2 xl:items-start 2xl:grid-cols-[minmax(0,1fr)_minmax(560px,0.92fr)] 2xl:gap-10">
              <SectionHeading
                eyebrow="Academic Profile"
                title="Assistant Lecturer and AI researcher focused on structured, interpretable machine learning"
                text="My work combines strong academic training, teaching experience, and research across time-series modeling, generative AI, and multimodal learning, with an emphasis on mathematically grounded model design."
              />
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {quickStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </motion.div>
            </section>

        <section className="mt-24">
          <SectionHeading
            eyebrow="Research Focus"
            title="Research spanning structured learning, forecasting, vision, and generative AI"
            text="These are the areas that define my current research direction: efficient neural architectures, ECG and sequential modeling, deepfake detection, multimodal methods, and synthetic data generation for challenging datasets."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {researchAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                      <Icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-slate-600">
                      {area.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mt-24 grid gap-8 xl:grid-cols-2 2xl:grid-cols-[minmax(460px,0.95fr)_minmax(0,1.15fr)] 2xl:gap-10">
          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Trophy className="h-5 w-5 text-slate-700" />
                Featured Achievement
              </CardTitle>
              <CardDescription className="text-slate-500">
                Signature result from the KAN ECG forecasting work
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">
                  Best Paper • FICTA 2025
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  Polynomial KANs that stay accurate while getting lighter
                </h3>
                <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">
                  The core result: cubic Chebyshev and Hermite KANs preserve ECG
                  forecasting performance while cutting the computational burden
                  substantially relative to B-spline KANs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-sm text-slate-500">Accuracy Gap</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">≤ 2×10⁻⁴</p>
                  <p className="mt-1 text-sm text-slate-600">MSE difference to B-splines</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-sm text-slate-500">Efficiency</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">~50%</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Fewer parameters and MACs
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-sm text-slate-500">Architecture</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">3-layer</p>
                  <p className="mt-1 text-sm text-slate-600">Comparative KAN topology</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <BarChart3 className="h-5 w-5 text-slate-700" />
                Recreated Paper Diagram
              </CardTitle>
              <CardDescription className="text-slate-500">
                KAN basis trade-off: efficiency versus accuracy
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[360px] p-2 pr-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={kanTradeoff}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="basis" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 16,
                      color: "#0f172a",
                    }}
                  />
                  <Bar dataKey="efficiency" radius={[10, 10, 0, 0]} fill="#334155" />
                  <Bar dataKey="accuracyScore" radius={[10, 10, 0, 0]} fill="#94a3b8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="mt-24">
          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <ShieldCheck className="h-5 w-5 text-slate-700" />
                Deepfake Detection Results
              </CardTitle>
              <CardDescription className="text-slate-500">
                Spatial versus wavelet-domain performance
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[320px] p-2 pr-6 2xl:h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deepfakeResults}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="model"
                    stroke="#64748b"
                    interval={0}
                    angle={-8}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis domain={[80, 95]} stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 16,
                      color: "#0f172a",
                    }}
                  />
                  <Bar dataKey="accuracy" radius={[10, 10, 0, 0]} fill="#475569" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="mt-24 grid gap-8 xl:grid-cols-2">
          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Microscope className="h-5 w-5 text-slate-700" />
                Water Crystal Generation
              </CardTitle>
              <CardDescription className="text-slate-500">
                Loss profile reported for the VAE-GAN experiments
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[320px] p-2 pr-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={waterCrystalLosses}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="metric" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 16,
                      color: "#0f172a",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#334155"
                    fill="#cbd5e1"
                    fillOpacity={0.9}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <GraduationCap className="h-5 w-5 text-slate-700" />
                Breast Cancer Segmentation Review
              </CardTitle>
              <CardDescription className="text-slate-500">
                Visual summary of review themes and reported strength areas
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[320px] p-2 pr-6">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={breastCancerReview} outerRadius="72%">
                  <PolarGrid stroke="#cbd5e1" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#475569", fontSize: 12 }}
                  />
                  <PolarRadiusAxis
                    tick={{ fill: "#64748b", fontSize: 10 }}
                    domain={[0, 100]}
                  />
                  <Radar
                    dataKey="score"
                    stroke="#334155"
                    fill="#cbd5e1"
                    fillOpacity={0.55}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 16,
                      color: "#0f172a",
                    }}
                  />
                </RadarChart>
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
          <div className="mt-10 grid gap-6 xl:grid-cols-2 2xl:grid-cols-3">
            {publications.map((item) => (
              <PublicationCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 xl:grid-cols-[0.95fr_1.05fr] 2xl:grid-cols-[minmax(380px,0.8fr)_minmax(0,1.2fr)] 2xl:gap-10">
          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-900">Experience Timeline</CardTitle>
              <CardDescription className="text-slate-500">
                Research and academic development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((item, idx) => (
                <div key={item.title} className="relative pl-6">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-slate-400" />
                  {idx !== experience.length - 1 && (
                    <div className="absolute left-[5px] top-6 h-full w-px bg-slate-200" />
                  )}
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-[0.95rem] leading-7 text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-900">Technical Toolkit</CardTitle>
              <CardDescription className="text-slate-500">
                Methods, libraries, and research competencies
              </CardDescription>
            </CardHeader>
            <CardContent className="grid flex-1 gap-4 sm:grid-cols-2 xl:auto-rows-fr xl:content-stretch">
              {skillGroups.map((group, i) => (
                <SkillGroupCard key={i} group={group} />
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-24">
          <Card className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Open to PhD opportunities
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Looking for doctoral research positions in machine learning, AI, and
                  structured learning systems.
                </h2>
                <p className="mt-4 text-[1.02rem] leading-8 text-slate-600">
                  I am particularly interested in research environments that value
                  mathematical grounding, careful evaluation, interpretability, and
                  impactful machine learning applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-xl bg-slate-900 text-white hover:bg-slate-800" asChild>
                  <a href={`mailto:${profile.email}`}>
                    Contact Me <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  asChild
                >
                  <a href={profile.cv} target="_blank" rel="noreferrer">
                    View CV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
          </div>
        </div>
      </main>
    </div>
  );
}
