import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  Collapse,
  Container,
  Divider,
  FormControlLabel,
  Slider,
  Typography,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

const CustomFormatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CustomForm = styled.form`
  text-align: left;
`;

const CustomMinAmount = styled(Typography)`
  && {
    margin-right: 24px;
  }
`;
const CustomMaxAmount = styled(Typography)`
  && {
    margin-left: 24px;
  }
`;

const CustomWrapperAmount = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 10px 0;
`;

const CustomSlider = styled(Slider)`
  && {
    color: #ffa500;
  }
`;

const CustomPriceWrap = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CustomCheckBox = styled(Checkbox)`
  .MuiIconButton-colorSecondary {
    color: #adff2f;
  }
`;

const CustomClear = styled(Typography)`
  && {
    cursor: pointer;
  }
`;
const initialValues = {
  amount: [500, 2000],

};

const multipleCheck = [
  { id: 1, value: "Main Buffet" },
  { id: 2, value: "Snack Box" },
  { id: 3, value: "Food Trucks" },
  { id: 4, value: "Pop-Up" },
];

const multipleCheckOccasion = [
  { id: 1, value: "Birthday Celebrations" },
  { id: 2, value: "Baby Shower" },
  { id: 3, value: "House Warming" },
  { id: 4, value: "Society Event" },
];

function Filter() {
  const [values, setValues] = useState({ ...initialValues });
  const [expandFormat, setExpandFormat] = useState(true);
  const [expandPrice, setExpandPrice] = useState(true);
  const [expandOccasion, setExpandOccasion] = useState(true);

  const handleFieldChange = (event, field, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleClear = () => {
    setValues({ ...initialValues });
  };

  const handleToggleFormat = () => {
    setExpandFormat((prevExpandFormat) => !prevExpandFormat);
  };

  const handleTogglePrice = () => {
    setExpandPrice((prevExpandPrice) => !prevExpandPrice);
  };

  const handleToggleOccasion = () => {
    setExpandOccasion((prevExpandOccasion) => !prevExpandOccasion);
  };

  return (
    <>
      <Wrapper>
        <CustomContainer>
          <Typography>Filters</Typography>
          <CustomClear onClick={handleClear}> Reset all </CustomClear>
        </CustomContainer>
        <div>
          <CustomFormatContainer onClick={handleToggleFormat}>
            <Typography variant="h6"> Format </Typography>
            {expandFormat ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </CustomFormatContainer>
          <Divider />
          <Collapse in={expandFormat}>
            <CustomForm>
              {multipleCheck.map((item) => (
                <FormControlLabel
                  control={<CustomCheckBox />}
                  label={item.value}
                  value={item.id}
                />
              ))}
            </CustomForm>
            <Divider />
          </Collapse>
          <CustomPriceWrap>
            <CustomFormatContainer onClick={handleTogglePrice}>
              <Typography> Price ₹500 - ₹2000</Typography>
              {expandPrice ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </CustomFormatContainer>

            <Collapse in={expandPrice}>
              <CustomWrapperAmount>
                <CustomMinAmount>₹{values.amount[0]}</CustomMinAmount>
                <CustomSlider
                  max={2000}
                  min={500}
                  value={values.amount}
                  onChange={(event, value) =>
                    handleFieldChange(event, "amount", value)
                  }
                  valueLabelDisplay="auto"
                />
                <CustomMaxAmount>₹{values.amount[1]}</CustomMaxAmount>
              </CustomWrapperAmount>
            </Collapse>
            <Divider />
          </CustomPriceWrap>

          <CustomFormatContainer onClick={handleToggleOccasion}>
            <Typography variant="h6"> Occassion </Typography>
            {expandOccasion ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </CustomFormatContainer>
          <Divider />
          <Collapse in={expandOccasion}>
            <CustomForm>
              {multipleCheckOccasion.map((item) => (
                <FormControlLabel
                  control={<CustomCheckBox />}
                  label={item.value}
                  value={item.id}
                />
              ))}
            </CustomForm>
            <Divider />
          </Collapse>
        </div>
      </Wrapper>
    </>
  );
}

export default Filter;
