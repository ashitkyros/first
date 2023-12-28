import logo from "./logo.svg";
import "./App.css";
import Data from "./component/Data";
import PracticeData from "./component/PracticeData";
import Celender from "./component/Celender";
import MuiCelender from "./component/MuiCelender";
import Bookappoinment from "./component/Bookappoinment";
import AppointmentPopup from "./component/AppointmentPopup";
import AnimationPad from "./component/AnimationPad";
import NewCelender from "./component/NewCelender";
import MeetLink from "./component/MeetLink";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Crudopration from "./component/Crudopration";
import Newtry from "./component/Newtry";
import MeetSchedulerComponent from "./container/Google/MeetSchedulerComponent";

function App() {
  return (
    <>
      {/* <h1>hi there</h1> */}
      {/* <Data/> */}
      {/* <PracticeData /> */}
      {/* <Celender /> */}
      {/* <MuiCelender/> */}
      {/* <Bookappoinment /> */}
      <AppointmentPopup />
      {/* <NewCelender /> */}
      {/* <AnimationPad /> */}
      {/* <GoogleOAuthProvider clientId="776255482410-84ffn8g469b4v5mnfd6tltd0rlklm0or.apps.googleusercontent.com">
        <MeetLink />
      </GoogleOAuthProvider> */}
      {/* <Crudopration/> */}
      {/* <Newtry /> */}
      {/* <MeetSchedulerComponent /> */}
    </>
  );
}

export default App;
