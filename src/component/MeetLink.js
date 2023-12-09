import React, { useState, useEffect } from "react";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";

export default function MeetLink() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMeetLink = async () => {

    try {

      const accessToken =
        "776255482410-84ffn8g469b4v5mnfd6tltd0rlklm0or.apps.googleusercontent.com";

      // Make the API request with OAuth 2.0 authentication
      const response = await fetch(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events?maxAttendees=1&sendUpdates=all",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            summary: `Appointment with ${formData.name}`,
            start: {
              dateTime: `${formData.date}T${formData.time}:00`,
              timeZone: "America/New_York",
            },
            end: {
              dateTime: `${formData.date}T${formData.time}:00`,
              timeZone: "America/New_York",
            },
          }),
        }
      );

      const eventData = await response.json();

      if (response.ok) {
        const meetLink = eventData.hangoutLink;
        alert(`Appointment booked! Google Meet Link: ${meetLink}`);
      } else {
        console.error(
          "Unexpected response from Google Calendar API:",
          eventData
        );
        alert("Error generating Google Meet link. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error generating Google Meet link. Please try again.");
    }
  };

  return (
      <div className="App">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="date">Appointment Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="time">Appointment Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
          <br />

          <GoogleLogin
            clientId="776255482410-84ffn8g469b4v5mnfd6tltd0rlklm0or.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={(response) => {
              const accessToken = response.accessToken;
              console.log("Access token:", accessToken);
            }}
            onFailure={(error) => console.error("Google login failed:", error)}
            cookiePolicy={"single_host_origin"}
          />
          <br />
          <button type="button" onClick={generateMeetLink}>
            Book Appointment
          </button> 
        </form>
      </div>
  );
}
