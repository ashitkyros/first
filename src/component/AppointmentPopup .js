import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "../App.css";

const AppointmentPopup = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveStep(0);
    setSelectedOption(null);
    setShowSubmitPopup(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setActiveStep(1);
  };

  const handleNextClick = () => {
    if (activeStep === 1) {
      setActiveStep(2);
      if (selectedOption === "Virtual Meeting") {
        setShowSubmitPopup(true);
      }
    } else {
      console.log("Selected Option:", selectedOption);
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Book Appointment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedOption ? `Book Appointment` : "Book Appointment"}
        </DialogTitle>
        <DialogContent>
          <div className="stap_main">
            <img src="https://d1tmxmmhy79644.cloudfront.net/Header/logo.svg"/>
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step>
                <StepLabel>Select Appointment Type</StepLabel>
              </Step>
              <Step>
                <StepLabel>Enter Details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Submit Appointment</StepLabel>
              </Step>
            </Stepper>
          </div>
          {!selectedOption && (
            <div className="mainBtn">
              <Button
                onClick={() => handleOptionClick("Virtual Meeting")}
                className="virtualBtn"
              >
                Virtual Meeting
              </Button>
              <a href="https://blgdlab.com/book-appointment">
                <Button className="instoreBtn">In-store</Button>
              </a>
            </div>
          )}
          {selectedOption && !showSubmitPopup && (
            <div>
              <Button onClick={handleNextClick}>Next</Button>
            </div>
          )}
          {showSubmitPopup && (
            <div>
              <Button>Submit Appointment</Button>
            </div>
          )}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default AppointmentPopup;
