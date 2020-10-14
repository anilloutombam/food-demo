import React from "react";
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
  background: #d7dbdd;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
`;
const CustomHeaderTitle = styled(Typography)`
  text-align: left;
`;

const CustomContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CustomCardContent = styled(CardContent)`
  width: 50%;
`;

const CustomLabel = styled(Typography)`
  && {
    color: #d6291b;
    font-size: 0.9rem;
  }
`;
const RestaurantCard = ({ hotelName, location, foodImage }) => {
  return (
    <>
      <CustomCard>
        <CardActionArea>
          <CardMedia
            component="img"
            image={foodImage}
            title="Contemplative Reptile"
            height="140"
          ></CardMedia>

          <CustomContainer>
            <CustomCardContent>
              <CustomHeaderTitle gutterBottom>{hotelName}</CustomHeaderTitle>
              <CustomHeaderTitle
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {location}
              </CustomHeaderTitle>
            </CustomCardContent>
            <CustomLabel>RE-ORDER</CustomLabel>
          </CustomContainer>
        </CardActionArea>
      </CustomCard>
    </>
  );
};

export default RestaurantCard;
