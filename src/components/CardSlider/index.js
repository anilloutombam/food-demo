import React, { Component } from "react";
import Slider from "react-slick";
import FoodCard from "../FoodCard";
import NextArrow from "../../assets/right.svg";
import PrevArrow from "../../assets/left.svg";
import styled from "styled-components";
import Item1 from "../../assets/1.jpg";
import Item2 from "../../assets/2.jpg";
import Item3 from "../../assets/3.jpg";
import Item4 from "../../assets/4.jpg";
import Item5 from "../../assets/5.jpg";
import Item6 from "../../assets/12.jpg";
import Item7 from "../../assets/13.jpg";
import Item8 from "../../assets/14.jpg";

import RestaurantCard from "../RestaurantCard";

const StyledSlider = styled(Slider)`
  .slick-next {
    right: -4px;
  }
  .slick-prev {
    left: -4px;
    z-index: 1;
  }
`;

class CardSlider extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,


      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            autoplay: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplay: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
          },
        },
      ],
    };
    return (
      <div>
        <StyledSlider {...settings}>
          <RestaurantCard hotelName="Barbeque Delight" foodImage={Item1} location="Horamavu" />
          <RestaurantCard hotelName="House Warming" foodImage={Item2} location="Whitefield"  />
          <RestaurantCard hotelName="Malabar Hotel" foodImage={Item3}location="Kasturi Nagar"  />
          <RestaurantCard hotelName="Punjabi Dhaba" foodImage={Item4}location="Horamavu"  />
          <RestaurantCard hotelName="Malabar Hotel" foodImage={Item5}location="Chandmari"  />
          <RestaurantCard hotelName="Punjabi Dhaba" foodImage={Item6}location="Ganeshgudi"  />
          <RestaurantCard hotelName="Malabar Hotel" foodImage={Item7}location="Electronic City"  />
          <RestaurantCard hotelName="Punjabi Dhaba" foodImage={Item8}location="Horamavu"  />
        </StyledSlider>
      </div>
    );
  }
}
export default CardSlider;
