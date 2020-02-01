import React, { Component } from "react";

import Navigation from "../components/HomePage/nav/Navigation.component";
import Hero from "../components/HomePage/hero/hero.component";
import { About } from "../components/HomePage/about-v2/About.component";
import { Purpose } from "../components/HomePage/purpose/purpose-v2.component";
import Eligibile from "../components/HomePage/eligible/eligibile.component";
import Benefits from "../components/HomePage/benefits/benefits.component";
import Involved from "../components/HomePage/involved/involved.component";
import AskedQuestionsAndAnswers from "../components/HomePage/FQA/askedQuestionsAndAnswers.component";
import Contact from "../components/HomePage/contact/contact.component";
import Footer from "../components/HomePage/footer/footer.component";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        <About />
        <Purpose />
        <Involved />
        <Eligibile />
        <Benefits />
        <AskedQuestionsAndAnswers />
        <Contact />
        <Footer />
      </div>
    );
  }
}
