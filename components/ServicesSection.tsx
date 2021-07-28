import ServiceContent from "./ServiceContent";

const ServicesSection = () => {
  return (
    <section className="services section" id="section">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <ServiceContent
          firstTitle="Website"
          secondTitle="Development"
          type="website"
          list={["I develop website backend and frontend"]}
        />
        <ServiceContent
          firstTitle="Frontend"
          secondTitle="Development"
          type="frontend"
          list={[
            "I develop website backend and frontend",
            "I develop website backend and frontend",
          ]}
        />
        <ServiceContent
          firstTitle="Backend and API"
          secondTitle="Development"
          type="backend"
          list={[
            "I develop website backend",
            "I develop website backend and frontend",
            "I develop website backend API",
          ]}
        />
        <ServiceContent
          firstTitle="Mobile App"
          secondTitle="Development"
          type="mobile"
          list={[
            "I develop website backend and frontend",
            "I develop website backend and frontend",
          ]}
        />
        <ServiceContent
          firstTitle="UI/UX"
          secondTitle="Designing"
          type="design"
          list={["I develop website backend and frontend"]}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
