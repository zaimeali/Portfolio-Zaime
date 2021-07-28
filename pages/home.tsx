import { useEffect } from "react";

import Head from "next/head";

import Header from "./../components/Header";
import HomeContainer from "./../components/Home";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import QualificationSection from "../components/QualificationSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  useEffect(() => {
    const homeBtn = document.getElementById("home-button");
    homeBtn?.click();
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
      </main>
    </div>
  );
}
