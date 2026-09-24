import React from "react";
import { Navbar } from "../components/landing/Navbar";
import { Hero } from "../components/landing/Hero";
import { TrustStrip } from "../components/landing/TrustStrip";
import { Problem } from "../components/landing/Problem";
import { Ecosystem } from "../components/landing/Ecosystem";
import { HowItWorks } from "../components/landing/HowItWorks";
import { Features } from "../components/landing/Features";
import { Roles } from "../components/landing/Roles";
import { Logistics } from "../components/landing/Logistics";
import { Inventory } from "../components/landing/Inventory";
import { Finance } from "../components/landing/Finance";
import { AdminCenter } from "../components/landing/AdminCenter";
import { MobileApp } from "../components/landing/MobileApp";
import { FinalCta } from "../components/landing/FinalCta";
import { Footer } from "../components/landing/Footer";

export function Landing() {
  return (
    <div className="min-h-screen w-full bg-canvas font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Ecosystem />
        <HowItWorks />
        <Features />
        <Roles />
        <Logistics />
        <Inventory />
        <Finance />
        <AdminCenter />
        <MobileApp />
        <FinalCta />
      </main>
      <Footer />
    </div>);

}