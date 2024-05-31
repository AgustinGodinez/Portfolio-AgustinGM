/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ArrowLeft, ArrowRight, Image } from "./ProjectDetailsStyle";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const ImgCarousel = ({ ImgCarous }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = ImgCarous.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {ImgCarous.map((ImgCarou, i) => (
          <Image key={i} src={ImgCarou} style={{ height: "50vh",objectFit:'fill' }} />
        ))}
      </AutoPlaySwipeableViews>

      <ArrowLeft onClick={handleBack} disabled={activeStep === 0}>
        <KeyboardArrowLeft
          sx={{ fontSize: 68 }}
        />
      </ArrowLeft>
      <ArrowRight onClick={handleNext} disabled={activeStep === maxSteps - 1}>
        <KeyboardArrowRight
          sx={{ fontSize: 68 }}
        />
      </ArrowRight>
    </>
  );
};
