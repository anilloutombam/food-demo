import React, { useState } from "react";
import {
  Card,
  Container,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import styled from "styled-components";

const CustomCard = styled(Card)`
  margin-left: 0.5rem;
  max-width: 345px;
`;

const CustomRupees = styled(Typography)`
  color: #f27207;
`;
const CustomText = styled.div`
  display: flex;
  align-items: center;
`;

const CustomSpan = styled.span`
  content: "\A";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #D7DBDD;
  margin-left: .3rem;
  margin-right: .3rem;

`;
const CustomHeaderTitle = styled(Typography)`
  text-align: left;

`;
const FoodCard = ({ foodName, foodImage}) => {
  return (
    <>
      <CustomCard>
        <CardActionArea>
          <CardMedia
            component="img"
            image={foodImage}
            title="Contemplative Reptile"
            height="140"
          />
          <CardContent>
            <CustomHeaderTitle gutterBottom >
              {foodName}
            </CustomHeaderTitle>
            <CustomText>
              <CustomRupees>₹199/- </CustomRupees> 
              <span>per head</span>
              <CustomSpan></CustomSpan>10 dishes
            </CustomText>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    </>
  );
};

export default FoodCard;
