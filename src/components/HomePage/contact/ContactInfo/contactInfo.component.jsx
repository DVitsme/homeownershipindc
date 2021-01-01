import React from "react";

import styled from "styled-components";

const Title = styled.h3`
  font-family: "Arial", sans-serif;
  margin-bottom: 19px;
  color: #fff;
`;
const Content = styled.p`
  span {
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    text-decoration-skip-ink: none;
    margin-right: 5px;
    border-bottom: 1px dotted #eee;
  }
  color: #fff;
`;
const Quote = styled.p`
  .author {
    display: flex;
    justify-content: right;
    font-weight: 600;
  }

  color: #fff;
`;
const ContactInfo = () => {
  return (
    <div className="mt-3 ">
      <Title>My Information</Title>
      <div>
        {/* <abbr title="Phone Number">
                  <strong>Phone:</strong>
                  </abbr>{' '}
                  (91) 8547 632521 
                  <br />
                */}

        <Content>
          <span>Phone:</span>(240) 401 - 8975{" "}
        </Content>
        <Content>
          <span>Email:</span>Dawn.Valentine@waldenu.edu
        </Content>
        <hr />
        <Quote>
          “A homeowner owns part of the public street in front of his home, part
          of the village square and the village park, part of the school. He is
          indeed a citizen of the United States...”{" "}
          <span className="author">-President Eisenhower</span>
        </Quote>
      </div>
    </div>
  );
};

export default ContactInfo;
