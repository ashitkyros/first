import React, { useEffect, useState } from "react";

export default function Data() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    if (data.trim() !== "") {
      const updatedItems = [...items, data];
      localStorage.setItem("items", JSON.stringify(updatedItems));
      setItems(updatedItems);
      setData("");
    }
  };

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {items.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </ul>
    </>   
  );
}