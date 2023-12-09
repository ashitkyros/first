import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const NewCalendar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [meetLink, setMeetLink] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("Google API script loaded successfully");
      if (window.gapi) {
        window.gapi.load("client:auth2", initClient);
      }
    };
    script.onerror = (error) => {
      console.error("Error loading Google API script:", error);
    };
    document.head.appendChild(script);
  }, []);

  // Initialize the Google API client
  const initClient = () => {
    const apiKey = "AIzaSyA-wvOc3sO58dWTciyYZ5uZhJQL-Atw0r4";
    const clientId =
      "776255482410-84ffn8g469b4v5mnfd6tltd0rlklm0or.apps.googleusercontent.com";

    window.gapi.client.init({
      apiKey,
      clientId,
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
      ],
      scope: "https://www.googleapis.com/auth/calendar.events",
    });
  };

  const onSubmit = async (data) => {
    try {
      // Use the gapi client to insert the event to the calendar
      const response = await window.gapi.client.calendar.events.insert({
        calendarId: "primary",
        conferenceDataVersion: 1,
        resource: {
          // ... (your event data)
        },
      });

      // If the request is successful, get the meet link from the response and set it to the state
      if (response.status === 200) {
        const meetLink = response.result.hangoutLink;
        setMeetLink(meetLink);
      }
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Fill the form to generate a Google Meet link</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && <p>Title is required</p>}
        </div>
        <div>
          <label htmlFor="start">Start Time</label>
          <input
            id="start"
            type="datetime-local"
            {...register("start", { required: true })}
          />
          {errors.start && <p>Start time is required</p>}
        </div>
        <div>
          <label htmlFor="end">End Time</label>
          <input
            id="end"
            type="datetime-local"
            {...register("end", { required: true })}
          />
          {errors.end && <p>End time is required</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>Email is required</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {meetLink && <p>Your Google Meet link is: {meetLink}</p>}
    </div>
  );
};

export default NewCalendar;