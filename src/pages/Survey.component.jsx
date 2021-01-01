import React from "react";
import Hero from "../components/Survey/Hero/index.component";
import SurveyForm from "../components/Survey//Form-v2/index.component";
import SurveyIntro from "../components/Survey/SurveyIntro/surveyIntro.component";
// import Checkout from "../components/Survey/form-v3/Checkout";

const Survey = () => {
  return (
    <main style={{ backgroundColor: "#F4F5F5", paddingBottom: "4rem" }}>
      <Hero />
      <SurveyIntro />
      <SurveyForm />
    </main>
  );
};

export default Survey;
