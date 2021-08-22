import { useEffect } from "react";

import Head from "next/head";

import Header from "./../components/Header";
import HomeContainer from "./../components/Home";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import QualificationSection from "../components/QualificationSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ProjectInMindSection from "../components/ProjectInMindSection";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection";
// import ContactSection from "../components/ContactSection";
import ContactSectionSecond from "../components/ContactSectionSecond";

export default function Home() {
  function scrollHeader() {
    const nav = document.getElementById("header");

    // when scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (window?.scrollY >= 80) {
      nav?.classList.add("scroll-header");
    } else {
      nav?.classList.remove("scroll-header");
    }
  }

  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    // When the scroll is higher than 560 viewport height, add the scroll class to the tag with the scroll
    if (window.scrollY >= 560) {
      scrollUp?.classList.add("show-scroll");
    } else {
      scrollUp?.classList.remove("show-scroll");
    }
  }

  useEffect(() => {
    const homeBtn = document.getElementById("home-button");
    homeBtn?.click();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  return (
    <div>
      <Head>
        <title>Abdul Rafey | Portfolio | Home Page</title>
        <meta name="description" content="Abdul Rafey" />
        <meta name="description" content="Abdul Rafey Rizwan" />
        <meta
          name="description"
          content="Web Developer, Mobile App Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="main">
        <HomeContainer />

        <AboutSection />

        <SkillsSection />

        <QualificationSection />

        <ServicesSection />

        <PortfolioSection />

        <ProjectInMindSection />

        <TestimonialSection />

        {/* <ContactSection /> */}

        <ContactSectionSecond />
      </main>

      <Footer />

      {/* Scroll to Top */}
      <ScrollTop />
    </div>
  );
}
