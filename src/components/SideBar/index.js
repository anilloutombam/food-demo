import React, { useState } from "react";

import { Container } from "@material-ui/core";
import styled from "styled-components";
import Filter from "../Filter";

const CustomSideWrapper = styled(Container)`
  && {
    flex: 0 0 22%;
    max-width: 22%;

    @media (max-width: 480px) {
      display: none;
      flex: 0 0 0;
      max-width: 0;
    }
  }
`;

const SideBar = () => {
  return (
    <CustomSideWrapper>
      <Filter />
    </CustomSideWrapper>
  );
};

export default SideBar;
