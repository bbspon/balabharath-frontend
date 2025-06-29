import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const sections = [
  {
    id: "bbscart",
    icon: "🛍️",
    title: "BBSCART",
    content: (
      <>
        <p className="lead">
          BBSCART is not just an online shop — it’s a complete marketplace
          ecosystem crafted for modern sellers, buyers, and business partners.
        </p>
        <ul>
          <li>
            <strong>Flexible Checkouts:</strong> Full or partial payments made
            easy.
          </li>
          <li>
            <strong>Escrow Security:</strong> Payments released only after
            verified delivery.
          </li>
          <li>
            <strong>Loyalty Rewards:</strong> Cashback and wallet credits on
            every order.
          </li>
          <li>
            <strong>API Integration:</strong> Seamless sync with POS and mobile
            apps.
          </li>
          <li>
            <strong>Scalable Infrastructure:</strong> Handles traffic from 10 to
            10 million users.
          </li>
        </ul>
        <p>
          <em>
            In short: BBSCART transforms e-commerce into a secure, flexible, and
            rewarding experience.
          </em>
        </p>
      </>
    ),
  },
  {
    id: "thiaworld",
    icon: "👑",
    title: "Thiaworld Jewellery",
    content: (
      <>
        <p className="lead">
          <strong>
            {" "}
            Thiaworld Jewellery, Exclusive brand of BBSCART Online Shopping
          </strong>
          brings premium BIS-certified Gold, Silver, Diamond & Platinum
          jewellery into the modern financial era. It’s your in-house gold
          brand, designed for smart buyers.
        </p>
        <ul>
          <li>
            <strong>Verified Purity:</strong> Every piece is BIS Hallmarked — no
            surprises, just genuine gold
          </li>
          <li>
            <strong>Thia Secure Plan:</strong> Customers pay
            <strong> 40% upfront</strong> and pledge the remaining{" "}
            <strong> 60% </strong>through a partnered bank or your preferred
            bank . The customer handles any interest with the bank directly.
            This makes owning high-value gold easier without draining cash at
            once.
          </li>
          <li>
            <strong>Bank Partnerships:</strong> We are actively working with
            trusted banks to secure safe, transparent pledge options.
          </li>
          <li>
            <strong>Modern Elegant Designs:</strong> A wide range of collections
            that respect tradition but match today’s style.
          </li>
        </ul>
        <p>
          <em>
            Thiaworld Jewellery makes buying gold jewellery flexible,
            trustworthy, and accessible — without hidden costs.
          </em>
        </p>
      </>
    ),
  },
  {
    id: "golldex",
    icon: "🪙",
    title: "Golldex Wallet",
    content: (
      <>
        <p className="lead">
          <strong> Golldex</strong> is an integrated payment wallet and
          investment tool — where saving and spending revolve around the
          security of real gold.
        </p>
        <ul>
          <li>
            <strong>Live Market Returns:</strong> Earn based on real-time gold
            rates.
          </li>
          <li>
            <strong>Flexible Investment Plans:</strong> Choose from short to
            long-term lock-ins.
          </li>
          <li>
            <strong>Smart Spending:</strong> Use wallet returns to pay on
            BBSCART or Thiaworld.
          </li>
        </ul>
        <p>
          <em>Golldex turns gold into a daily-use financial asset.</em>
        </p>
      </>
    ),
  },
  {
    id: "bbscrm",
    icon: "📊",
    title: "BBS CRM",
    content: (
      <>
        <p className="lead">
          BBS CRM is your AI-powered business brain that connects every role in
          your ecosystem.
        </p>
        <ul>
          <li>
            <strong>Unified Dashboard:</strong> One view of customers, orders,
            and queries.
          </li>
          <li>
            <strong>AI Predictions:</strong> Auto-flag churn, upsell chances,
            and behaviors.
          </li>
          <li>
            <strong>Automation:</strong> Leads captured, routed, and followed-up
            automatically.
          </li>
          <li>
            <strong>Role-Based Logic:</strong> Agents, THs, Vendors — all have
            their own dashboards.
          </li>
        </ul>
        <p>
          <em>The CRM that turns business complexity into clarity.</em>
        </p>
      </>
    ),
  },
  {
    id: "poserp",
    icon: "🏪",
    title: "POS + ERP System",
    content: (
      <>
        <p className="lead">
          BBS POS + ERP is built for real-world retailers who need reliability
          and flexibility.
        </p>
        <ul>
          <li>
            <strong>Offline Mode:</strong> Works without internet. Syncs when
            connected.
          </li>
          <li>
            <strong>Live Stock Management:</strong> Real-time inventory across
            online/offline.
          </li>
          <li>
            <strong>Easy Billing:</strong> GST, discounts, returns — all
            supported.
          </li>
          <li>
            <strong>Plug & Play:</strong> Deployable in hours in any shop setup.
          </li>
        </ul>
        <p>
          <em>Simplifying retail — from kiranas to chains.</em>
        </p>
      </>
    ),
  },
  {
    id: "bbsdelivery",
    icon: "🚚",
    title: "BBS Delivery + Ecommerce App",
    content: (
      <>
        <p className="lead">
          A multi-service delivery engine that powers food, parcels, water and
          more — from a single app.
        </p>
        <ul>
          <li>
            <strong>All-in-One:</strong> Covers food, water, grocery, courier
            and ecommerce delivery.
          </li>
          <li>
            <strong>Secure Delivery:</strong> OTP + live tracking + fraud
            detection.
          </li>
          <li>
            <strong>Loyalty & Rewards:</strong> Points usable across the BBS
            ecosystem.
          </li>
          <li>
            <strong>Agent Optimization:</strong> Route planning and delivery
            tracking in real-time.
          </li>
        </ul>
        <p>
          <em>A delivery app that actually delivers value.</em>
        </p>
      </>
    ),
  },
  {
    id: "nuru",
    icon: "🎬",
    title: "NURU: The Wild Rises",
    content: (
      <>
        <p className="lead">
          A hidden empire of beasts. A lost artifact of power. A cheetah’s
          uprising to reclaim freedom after generations of silent suffering.
        </p>
        <p>
          <strong>🎬 NURU: The Wild Rises </strong> is more than just a fantasy
          film — it is a
          <strong>
            {" "}
            groundbreaking Realistic 3D cinematic universe and theatrical
            experience
          </strong>{" "}
          that seamlessly fuses live-action with hyper-realistic animation to
          craft immersive storytelling on an unprecedented scale. This
          pioneering intellectual property stands unmatched in India and
          globally at an independent level, representing a bold leap in
          narrative technology and creative vision.
        </p>
        <p>
          <strong>🌍 The Heart of NURU</strong> Set in a vast, ancient
          wilderness hidden from human eyes for centuries,
          <strong> NURU </strong> unfolds the epic journey of
          <strong>
            {" "}
            Nuru — the cheetah — who rises as a revolutionary force to reclaim
            not only his own species’ freedom and dignity, but also to liberate
            all oppressed clans who have endured generations of dominance and
            cruelty under the hyenas, wolves, and jackals.
          </strong>
          This synergy of real-world cinematic techniques and hyper-realistic
          AI-generated animation sets NURU will be India’s first truly
          independent fantasy epic of this calibre.
        </p>
        <p>
          <em>
            NURU is not just a story — it’s a cinematic universe being born.
          </em>
        </p>
      </>
    ),
  },
  {
    id: "aiagents",
    icon: "🤖",
    title: "AI Agents Platform",
    content: (
      <>
        <p className="lead">
          The no-code AI platform that gives superpowers to creators,
          solopreneurs, and SMBs.
        </p>
        <ul>
          <li>
            <strong>Zero-Code Setup:</strong> Anyone can build bots and
            workflows.
          </li>
          <li>
            <strong>Auto Design:</strong> Generate branded ads, posts, and
            landing pages.
          </li>
          <li>
            <strong>Smart Replies:</strong> CRM bots that talk, respond, and
            improve.
          </li>
          <li>
            <strong>Scalable Automation:</strong> Replace repetitive work with
            AI agents.
          </li>
        </ul>
        <p>
          <em>
            AI Agents let you scale like a team of 10 — without hiring anyone.
          </em>
        </p>
      </>
    ),
  },

  {
    id: "emerJobs",
    icon: "🤖",
    title: "EmerJobs",
    content: (
      <>
        <h1 className="lead">Work When You Want. Hire When You Need</h1>
        <ul>
          <li>
            <strong>EmerJobs</strong> is not just a job portal —{" "}
            <strong> it’s a smart, on-demand hiring and work platform </strong>
            designed for the new era of flexible, urgent, and short-term work
            needs. It fills the critical gap between employers who need reliable
            manpower today and skilled workers who want freedom to choose when
            and how long they work.
          </li>
          <li>
            <strong>What Makes EmerJobs Different</strong> Unlike traditional
            job boards, EmerJobs empowers both sides: Employers can instantly
            post urgent roles — for 1 day, 1 week, or a few months. Job seekers
            pick only the days or shifts they want — no forced monthly
            commitments. This approach solves real-world hiring crunches for
            retailers, events, logistics, and seasonal businesses while
            providing flexible income for students, freelancers, and gig
            workers.
          </li>
          <li>
            <strong>How It Works :</strong>Instant Listings: Post urgent jobs
            and reach verified local talent immediately. Worker Choice:
            Individuals accept gigs on their own terms — work today, rest
            tomorrow. Smart Match: AI-backed matching ensures the right skill
            fits the right urgency.Trust & Transparency: Secure payments, clear
            reviews, and dispute resolution built-in.
          </li>
          <li>
            <strong>Why It Matters</strong>
            In a world where schedules change daily, EmerJobs makes flexible
            work possible without the headaches of long-term hiring or
            unreliable last-minute workers. It’s the bridge between urgent
            manpower demands and a ready pool of capable hands.
          </li>
        </ul>
        <p>
          <em>
            AI Agents let you scale like a team of 10 — without hiring anyone.
          </em>
        </p>
      </>
    ),
  },
];

export default function ProjectsDetailsPage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get("section");
    if (sectionId) {
      setActiveSection(sectionId);
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary display-5 fw-bold mb-5">
        🌐 Project Details
      </h1>

      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className={`p-4 mb-5 shadow-sm rounded-4 border ${
            section.id === activeSection
              ? "border-warning bg-light"
              : "border-light"
          }`}
        >
          <h3 className="mb-3 fw-bold text-dark">
            <span className="me-2">{section.icon}</span>
            {section.title}
          </h3>
          <div className="text-muted fs-5">{section.content}</div>
        </div>
      ))}
    </div>
  );
}
