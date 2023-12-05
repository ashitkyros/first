import React, { useEffect, useState } from "react";

export default function PracticeData() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const handleSubmit = () => {
    if (name.trim() !== "") {
      const updateItems = [...items, name];
      localStorage.setItem("Data", JSON.stringify(updateItems));
      setItems(updateItems);
      setName("");
    }
  };
  useEffect(() => {
    const updateData = JSON.parse(localStorage.getItem("Data"));
    if (updateData) {
      setItems(updateData);
    }
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {items.map((item, index) => {
          console.log(item);
          <h1 key={index}>{item}</h1>;
        })}
      </ul>
    </>
  );
}
