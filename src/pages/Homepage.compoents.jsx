import React, { Component } from "react";

import { Container } from "reactstrap";

import Navigation from "../components/HomePage/nav/Navigation.component";
import Hero from "../components/HomePage/hero/Hero.component";
import { About } from "../components/HomePage/about-v2/About.component";
import { FullWidthBar } from "../components/fullWidthBar/fullWidthBar.component";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Hero />
        <About />
        <FullWidthBar />
      </div>
    );
  }
}
