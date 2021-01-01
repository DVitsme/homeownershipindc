import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

import Image from "../../../static/images/Survey/Hero/Hero_09.jpeg";

const HeroImage = styled.div`
  background-image: url(${Image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  height: 45vh;
`;
const SurveyTitle = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const HeroTitle = styled.h1`
  font-family: Prata;
  font-size: 68px;
  line-height: 92px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0px;
  word-wrap: break-word;
  text-align: center;
`;
const Hero = () => {
  return (
    <div>
      <HeroImage>
        <SurveyTitle>
          <HeroTitle>
            Homeownership In DC <br /> Survey
          </HeroTitle>
        </SurveyTitle>
      </HeroImage>
    </div>
  );
};

export default Hero;
