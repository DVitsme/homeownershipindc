import React from "react";
import styled from "styled-components";

import Leaves from "../../static/images/fullWidthBar/fall-leaves.jpg";

const BackgroundImage = styled.div`
  background-color: #88B44E;
  /* background-image: url(${Leaves}); */
`;

export const FullWidthBar = () => {
  return (
    <div>
      <BackgroundImage className="py-3">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h2
            style={{ textAlign: "center", color: "#FFF" }}
            className="px-3 text-capitalize"
          >
            The purpose of this study is to learn more about tenured
            homeownership with members of the Black middle class.
          </h2>
        </div>
      </BackgroundImage>
    </div>
  );
};
