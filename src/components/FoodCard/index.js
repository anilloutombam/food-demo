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
  Chip,
  Tooltip,
  IconButton,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const CustomCard = styled(Card)`
  margin-left: 0.5rem;
  max-width: 284px;
  margin-bottom: 1rem;
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

const CustomRatingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomChip = styled(Chip)`
  && {
    border-radius: 4px;
    height: 25px;
    margin-right: 0.4rem;
  }
  .MuiSvgIcon-root {
    font-size: 1rem;
  }
  .MuiChip-icon {
    color: white;
  }
`;

const CustomIcons = styled.div`
  display: flex;
  .MuiSvgIcon-root {
    font-size: 1rem;
  }
`;

const Veg = styled.div`
  .MuiSvgIcon-root {
    fill: green;
  }
`;
const NonVeg = styled.div`
  .MuiSvgIcon-root {
    fill: red;
  }
`;

const CustomDiv = styled.div`
  position: relative;
`;

const CustomIconButton = styled(IconButton)`
  && {
    position: absolute;
    right: 10px;
    bottom: 105px;
    border: 1px solid #ffff;
    border-radius: 50%;
    background-color: #ffff;
    :hover {
      background-color: #ffff;
    }
  }
  .MuiSvgIcon-root {
    font-size: 1rem;
  }
`;

const CustomIconLikedButton = styled(IconButton)`
  && {
    position: absolute;
    right: 10px;
    bottom: 105px;
    border: 1px solid #ffff;
    border-radius: 50%;
    background-color: #ffff;
    :hover {
      background-color: #ffff;
    }
    color: red;
  }
  .MuiSvgIcon-root {
    font-size: 1rem;
  }
`;

const CustomButtonDiv = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
`;

const CustomButton = styled(Button)`
  && {
    background-color: #ffff;
    :hover {
      background-color: #ffff;

    }
  }
`;

const FoodCard = ({
  foodName,
  foodImage,
  vegIcon,
  nonVegIcon,
  price,
  rating,
  colors,
}) => {
  const [liked, setLiked] = useState(true);
  const [show, setShow] = useState(false);

  const handleLike = () => {
    setLiked(true);
  };

  const handleUnlike = () => {
    setLiked(false);
  };

  return (
    <>
      <CustomCard
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <CardActionArea>
          <CardMedia component="img" image={foodImage} height="140" />

          {show ? (
          <>
            <CustomDiv>
              {liked ? (
                <CustomIconButton size="small" onClick={handleUnlike}>
                  <FavoriteBorderIcon />
                </CustomIconButton>
              ) : (
                <CustomIconLikedButton onClick={handleLike} size="small">
                  <FavoriteIcon />
                </CustomIconLikedButton>
              )}
              <CustomButtonDiv>
                <CustomButton variant="outlined" size="small">
                  New
                </CustomButton>
              </CustomButtonDiv>
            </CustomDiv>
          </>
           ) : null} 

          <CardContent>
            <CustomHeaderTitle gutterBottom>{foodName}</CustomHeaderTitle>
            <CustomText>
              <CustomRupees>₹{price}/- </CustomRupees>
              <span>per head</span>
              <CustomSpan></CustomSpan>10 dishes
            </CustomText>
            <CustomRatingWrap>
              <div>
                <CustomChip color={colors} icon={<StarIcon />} label={rating} />

                <Typography color="textSecondary" variant="disabled">
                  213 Ratings
                </Typography>
              </div>
              <CustomIcons>
                <Veg>{vegIcon}</Veg>
                <NonVeg>{nonVegIcon}</NonVeg>
              </CustomIcons>
            </CustomRatingWrap>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    </>
  );
};

export default FoodCard;
