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
import virtualImg from "../Images/Remote team-rafiki 1.svg";
import InstoreImg from "../Images/Meeting-amico 1.svg";
import Close from "../Images/Close.svg";
import Backarrow from "../Images/arrow-left.svg";
import MuiCelender from "./MuiCelender";

const AppointmentPopup = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleActive = (buttonIndex) => {
    // Toggle the active state for the clicked button
    setActiveButton(activeButton === buttonIndex ? null : buttonIndex);
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
  const handlePravClick = () => {
    if (activeStep === 2) {
      setActiveStep(1);
    } else {
      console.log("Selected Option:", selectedOption);
      handleClose();
      setOpen(true);
    }
  };
  const handlePravClicktwo = () => {
    if (activeStep === 2) {
      handleClose();
    } else if (activeStep === 1) {
      setActiveStep(0);
    } else {
      setOpen(true);
    }
  };
  // const divClassName = isActive ? 'clickableDiv active' : 'clickableDiv';
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Book Appointment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>
          {selectedOption ? `Book Appointment` : "Book Appointment"}
        </DialogTitle> */}
        <DialogContent className="flex">
          <div className="stap_main">
            <img src="https://d1tmxmmhy79644.cloudfront.net/Header/logo.svg" />
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step>
                <StepLabel>
                  <p className="firstLabel">Select Appointment Type</p>
                  <p className="secLable">Add Your Support Agents</p>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <p className="firstLabel">Select Date & Time</p>
                  <p className="secLable">Add Your Support Agents</p>
                </StepLabel>
              </Step>
              <Step>
                <StepLabel>
                  <p className="firstLabel">Fill Details</p>
                  <p className="secLable">Add Your Support Agents</p>
                </StepLabel>
              </Step>
            </Stepper>
          </div>
          {!selectedOption && (
            <div className="mainBtn">
              <div className="BookClose">
                <h2>Book Appointment</h2>
                <img
                  src={Close}
                  onClick={handleClose}
                  className="cursor-pointer"
                />
              </div>
              <div className="virtualImages">
                <div className="firtImg">
                  <img src={virtualImg} alt="virtialImage" />
                  <h3>Virtual Consultations</h3>
                  <p>
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or
                  </p>
                  <Button
                    onClick={() => handleOptionClick("Virtual Meeting")}
                    className="virtualBtn"
                  >
                    Book Appointment
                  </Button>{" "}
                </div>
                <div className="Second-img">
                  <img src={InstoreImg} alt="virtialImage" />{" "}
                  <h3>In-Office Appointments</h3>
                  <p>
                    Lorem ipsum is a placeholder text commonly used to
                    demonstrate the visual form of a document or
                  </p>
                  <a href="https://blgdlab.com/book-appointment">
                    <Button className="instoreBtn">Book Appointment</Button>
                  </a>
                </div>
              </div>
            </div>
          )}
          {selectedOption && !showSubmitPopup && (
            <div className="right-side">
              <div className="backtobook">
                <img src={Backarrow} onClick={handlePravClick} />
                <p>Book Appointment</p>
              </div>

              <div className="flex justify-around main-select">
                {/* <div class="sm:col-span-3 w-full">
                  <label
                    for="country"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div class="mt-2">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Select Country</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div class="sm:col-span-3 w-full">
                  <label
                    for="country"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div class="mt-2">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div> */}
                <div class="select-box">
                  <p>Country</p>
                  <select class="select-field">
                    <option value="" disabled selected hidden>
                      Select Country
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div class="select-box">
                  <p>Choose Office</p>
                  <select class="select-field">
                    <option value="" disabled selected hidden>
                      Store
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              {/* <hr className="mt-14 w-[80%] text-center"/> */}
              <div className="muicelender">
                <MuiCelender />
                <div class="select-box location">
                  <p>Time Zone</p>
                  <select class="select-field">
                    <option value="" disabled selected hidden>
                      India Standard Time (4:54pm)
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>

                  <div className="mt-14">
                    <p>Thursday, 22 November, 2023</p>
                    <div className="timing">
                      <div className="grid grid-cols-3 gap-5">
                        <button
                          className={`timing-button ${
                            activeButton === 0 ? "active" : ""
                          }`}
                          onClick={() => handleActive(0)}
                        >
                          6:30 AM
                        </button>
                        <button
                          className={`timing-button ${
                            activeButton === 1 ? "active" : ""
                          }`}
                          onClick={() => handleActive(1)}
                        >
                          6:30 AM
                        </button>
                        <button
                          className={`timing-button ${
                            activeButton === 2 ? "active" : ""
                          }`}
                          onClick={() => handleActive(2)}
                        >
                          6:30 AM
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-5">
                        <button
                          className={`timing-button ${
                            activeButton === 3 ? "active" : ""
                          }`}
                          onClick={() => handleActive(3)}
                        >
                          6:30 AM
                        </button>
                        <button
                          className={`timing-button ${
                            activeButton === 4 ? "active" : ""
                          }`}
                          onClick={() => handleActive(4)}
                        >
                          6:30 AM
                        </button>
                        <button
                          className={`timing-button ${
                            activeButton === 5 ? "active" : ""
                          }`}
                          onClick={() => handleActive(5)}
                        >
                          6:30 AM
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-5">
                        <button
                          className={`timing-button ${
                            activeButton === 6 ? "active" : ""
                          }`}
                          onClick={() => handleActive(6)}
                        >
                          6:30 AM
                        </button>
                        <button
                          className={`timing-button ${
                            activeButton === 7 ? "active" : ""
                          }`}
                          onClick={() => handleActive(7)}
                        >
                          6:30 AM
                        </button>
                        <button
                          className={`timing-button ${
                            activeButton === 8 ? "active" : ""
                          }`}
                          onClick={() => handleActive(8)}
                        >
                          6:30 AM
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={handleNextClick} className="next_button">
                Next
              </Button>
            </div>
          )}
          {showSubmitPopup && (
            <div className="second-right-side">
              <div className="backtobook">
                <img src={Backarrow} onClick={handlePravClicktwo} />
                <p>Book Appointment</p>
              </div>
              <div className="main_detail space-y-1">
                <div className="Time">
                  <p>Time: 6:30PM</p>
                </div>
                <div className="Date">
                  <p>Date: Thursday, 22 November, 2023</p>
                </div>
                <div className="Contry">
                  <p>
                    County: <span className="font-bold">India</span>,
                  </p>
                  <p>
                    Office: <span className="font-bold">Surat</span>
                  </p>
                </div>
              </div>
              <div className="my-10 contact-email">
                <div>
                  <div className="form-label">Name*</div>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Full Name"
                    minLength={10}
                    // onChange={(e) =>
                    //   props.setContactData((pre) => ({
                    //     ...pre,
                    //     phoneNo: e.target.value,
                    //   }))
                    // }
                    required
                  />
                </div>
                <div>
                  <div className="form-label">Email*</div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    value=""
                    // onChange={(e) =>
                    //   props.setContactData((pre) => ({
                    //     ...pre,
                    //     email: e.target.value,
                    //   }))
                    // }
                    required
                  />
                </div>
              </div>
              <div className="mb-10 w-[88%] ml-[70px]">
                <div className="form-label">Phone*</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                  value=""
                  // onChange={(e) =>
                  //   props.setContactData((pre) => ({
                  //     ...pre,
                  //     name: e.target.value,
                  //   }))
                  // }
                  required
                />
              </div>
              <div className="mb-10 w-[88%] ml-[70px]">
                <div className="form-label">Notes*</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="What are you looking for?"
                  value=""
                  // onChange={(e) =>
                  //   props.setContactData((pre) => ({
                  //     ...pre,
                  //     name: e.target.value,
                  //   }))
                  // }
                  required
                />
              </div>
              <Button className="Last_submit">Submit</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppointmentPopup;
