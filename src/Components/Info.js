import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        At Unity Health Center, we make healthcare convenient and accessible. Our comprehensive range of on-demand medical services is tailored to meet your needs. Connect with experienced doctors online for expert medical advice, online prescriptions, and quick refills whenever you need them. Experience seamless healthcare, designed for your lifestyle.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care. Count on us in your time of need."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Health Services"
          description="Experience the expertise of our seasoned cardiologists and medical professionals who leverage state-of-the-art technology to evaluate your cardiovascular health and craft personalized treatment strategies. From thorough screenings to cutting-edge interventions, we are dedicated to empowering you to maintain a healthy heart and lead a fulfilling life. Trust us with your heart health journey."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Smile confidently with our comprehensive Dental Care services, tailored to meet all your oral health needs. Our skilled dentists offer a wide range of treatments, from routine check-ups and cleanings to cosmetic procedures and restorative treatments. Whether you need preventive care or a smile makeover, we're here to ensure your dental health and satisfaction."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
