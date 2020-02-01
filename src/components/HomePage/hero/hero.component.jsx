import React from "react";

import styled from "styled-components";
import { Jumbotron } from "reactstrap";
import { Link } from "react-scroll";

import BackgroundImage from "../../../static/images/homepage/hero/black-guy.jpg";
import CTAButton from "../../button/button.component";

const HeroImage = styled(Jumbotron)`
  height: 95vh;
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.2)
    ),
    url(${BackgroundImage});
  background-position: top;
  background-size: cover;
  margin-bottom: 0;
  border-radius: 0;
`;
const CenterText = styled.div`
  @media (max-width: 1199.98px), (max-height: 700px) {
    transform: translate(-50%, -50%);
    overflow: hidden;
    width: 100%;
    padding: 0 7px;
    h1 {
      padding-left: 0.3em;
    }
    .hide-text {
      display: none;
    }
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -50%);
`;
const HeroTitle = styled.h1`
  font-family: Prata;
  font-size: 68px;
  line-height: 92px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0px;
  word-wrap: break-word;
`;
const HeroSubTitle = styled.p`
  font-family: "Open Sans";
  font-size: 22px;
  line-height: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;

const BoldText = styled.span`
  font-weight: 700;
`;
const Hero = props => {
  return (
    <div>
      <HeroImage>
        <CenterText>
          <HeroTitle className="display-4">
            A Research Study about <br /> Homeownership in D.C
          </HeroTitle>
          <div className="hide-text">
            <HeroSubTitle className="lead">
              “Owning a home is part of the American Dream”, “homeownership is a
              substantial investment that will increase over time and change
              your financial standing”.
            </HeroSubTitle>
            <hr className="my-2" />
            <HeroSubTitle>
              <BoldText>Is this true in Washington, D.C.?</BoldText> Current
              housing data would indicate these benefits are not distributed
              equally. Furthermore, the conversation about homeownership tends
              to circle around getting people into homes and not what it takes
              to stay there.
            </HeroSubTitle>
            <p className="lead">
              <Link to="purpose" spy={true} smooth={true} duration={500}>
                <CTAButton padding="25px 34px" content="Read About The Study" />
              </Link>
            </p>
          </div>
        </CenterText>
      </HeroImage>
    </div>
  );
};

export default Hero;
