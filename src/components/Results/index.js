import React, { useEffect, useState } from "react";
import {
  Chip,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  createMuiTheme,
  ThemeProvider
 

} from "@material-ui/core";
import { green, orange, purple, red } from '@material-ui/core/colors';


import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import FoodCard from "../FoodCard";
import Image1 from "../../assets/6.jpg";
import Image2 from "../../assets/7.jpg";
import Image3 from "../../assets/8.jpg";
import Image4 from "../../assets/9.jpg";
import Image5 from "../../assets/10.jpg";
import Image6 from "../../assets/11.jpg";
import Image7 from "../../assets/12.jpg";
import FilterCenterFocusIcon from "@material-ui/icons/FilterCenterFocus";

const CustomText = styled(Typography)`
  && {
    text-align: left;
    margin-bottom: 1rem;
  }
`;

const CustomContent = styled.div`
  margin: 1rem;
`;
const CustomTypography = styled(Typography)`
  margin-bottom: 1rem;
`;

const CustomTags = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width : 480px) {
    display:none;
    
}
`;

const CustomGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CustomChip = styled(Chip)`
  && {
    border-radius: 0;
    margin-right: 1rem;
  }
`;
const CustomTextField = styled(TextField)`
  && {
    .MuiOutlinedInput-input {
      padding: 4.5px 28px;
      font-size: 0.9em;
    }
    margin-left: 1em;
  }
`;

const CustomImageConatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const theme = createMuiTheme({
  palette: {
    error: red,
    info: orange,

  },
});
const initialValues = {
  multipleTags: ["5+ Ratings", "Non-Vegetarian", "0-5 kms"],
  tag: "",
  options: "",
};



const sortOption = ["Most Popular", "Recommended"];

function Results() {
  const [values, setValues] = useState({ ...initialValues });

  const handleTagDelete = (tag) => {
    setValues((prevValues) => {
      const newValues = { ...prevValues };

      newValues.multipleTags = newValues.multipleTags.filter((t) => t !== tag);

      return newValues;
    });
  };

  const handleFieldChange = (event, field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <>
      <CustomContent>
        <CustomText>RESULTS (14)</CustomText>
        <Divider />
      </CustomContent>

      <CustomTags>
        <div>
          {values.multipleTags.map((tag) => (
            <CustomChip
              deleteIcon={<CloseIcon />}
              key={tag}
              label={tag}
              onDelete={() => handleTagDelete(tag)}
            />
          ))}
        </div>

        <div>
          <Typography>
            Sort by:
            <CustomTextField
              onChange={(event) =>
                handleFieldChange(event, "options", event.target.value)
              }
              select
              SelectProps={{ native: true }}
              value={values.options}
              variant="outlined"
            >
              {sortOption.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </CustomTextField>
          </Typography>
        </div>
      </CustomTags>
      <CustomImageConatiner >
      <ThemeProvider theme={theme}>
      <FoodCard
          price={"399"}
          foodName={"Barbeque Delight"}
          foodImage={Image1}
          rating={3.0}
          colors={"info"}
          vegIcon={<FilterCenterFocusIcon />}
          nonVegIcon={<FilterCenterFocusIcon />}
        />
        <FoodCard
          price={"99"}
          foodName={"Chicken Curry"}
          foodImage={Image2}
          rating={2.2}
          colors={"secondary"}


          vegIcon={<FilterCenterFocusIcon />}
        />
        <FoodCard
          price={"199"}
          foodName={"Barbeque Burger"}
          foodImage={Image3}
          rating={4.2}
          colors={"primary"}


          vegIcon={<FilterCenterFocusIcon />}
          nonVegIcon={<FilterCenterFocusIcon />}
        />
        <FoodCard
          price={"39"}
          foodName={"Green Salad"}
          foodImage={Image4}
          rating={3.2}

          vegIcon={<FilterCenterFocusIcon />}
        />
        <FoodCard
          price={"599"}
          foodName={"Crispy Chicken"}
          foodImage={Image5}
          rating={3.0}
          colors={"primary"}


          vegIcon={<FilterCenterFocusIcon />}
          nonVegIcon={<FilterCenterFocusIcon />}
        />
        <FoodCard
          price={"45"}
          foodName={"Daal Tadka"}
          foodImage={Image6}
          rating={4.2}

          vegIcon={<FilterCenterFocusIcon />}
          nonVegIcon={<FilterCenterFocusIcon />}
        />
        <FoodCard
          price={"180"}
          foodName={"Rajma Curry"}
          foodImage={Image7}
          rating={4.2}

          vegIcon={<FilterCenterFocusIcon />}
        />

      </ThemeProvider>

        
      </CustomImageConatiner>
    </>
  );
}

export default Results;
