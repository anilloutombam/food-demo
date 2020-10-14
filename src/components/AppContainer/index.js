import React from "react";

import { Container, Typography } from "@material-ui/core";
import CardSlider from "../CardSlider";
import styled from "styled-components";

const CustomHeader = styled.h3`
  text-align: left;
  text-transform: uppercase;
`;
const CustomWrapper = styled.div`
  background-color: #fdf2e9;
  padding: 1rem 1rem 1rem;
`;

const AppContainer = () => {
  return (
    <CustomWrapper>
      <Container>
        <CustomHeader>Most Frequently Ordered</CustomHeader>
        <CardSlider />
      </Container>
    </CustomWrapper>
  );
};

export default AppContainer;
