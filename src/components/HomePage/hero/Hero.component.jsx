import React from "react";

import styled from "styled-components";
import { Jumbotron, Button } from "reactstrap";

import BackgroundImage from "../../../static/images/homepage/hero/black-guy.jpg";

const HeroImage = styled(Jumbotron)`
  height: 95vh;
  background-image: url(${BackgroundImage});
  background-position: top;
  background-size: cover;
  margin-bottom: 0;
  border-radius: 0;
`;
const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -60%);
`;
const HeroTitle = styled.h1`
  font-family: Prata;
  font-size: 68px;
  line-height: 92px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0px;
`;
const HeroSubTitle = styled.p`
  font-family: "Open Sans";
  font-size: 22px;
  line-height: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

const HeroButton = styled(Button)`
  z-index: 20;
  white-space: nowrap;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  background-color: rgb(204, 189, 153);
  border: 1px solid rgb(204, 189, 153);
  letter-spacing: 1px;
  text-align: left;
  margin: 0px;
  padding: 25px 34px;
  box-shadow: rgb(153, 153, 153) 0px 0px 0px 0px;
  border-radius: 0px;
  text-transform: uppercase;
`;
const Hero = props => {
  return (
    <div>
      <HeroImage>
        <CenterText>
          <HeroTitle className="display-4 text-capitalize">
            dc home ownership study
          </HeroTitle>
          <HeroSubTitle className="lead">
            Owning a home has been one of the pillars of the American Dream.
          </HeroSubTitle>
          <hr className="my-2" />
          <HeroSubTitle>
            We are often told this is a solid investment, a place to raise your
            children and a base to increase your financial standing.
            Unfortunately, the benefits of homeownership are not equally
            distributed.
          </HeroSubTitle>
          <p className="lead">
            <HeroButton>Learn More</HeroButton>
          </p>
        </CenterText>
      </HeroImage>
    </div>
  );
};

export default Hero;
