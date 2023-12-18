import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/slice/counterSlice";

const Crudopration = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [Input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  console.log(Input);
  const AddUser = () => {
    // setUsers([...users, Input]);
    // setInput("");
    dispatch([...users, Input])
  };
//   const deleteUser = (index) => {
//     const updatedUsers = [...users];
//     updatedUsers.splice(index, 1);
//     setUsers(updatedUsers);
//   };
  return (
    <>
      <div>
        <input
          placeholder="Enter Your Name"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={AddUser}>add User</button>
        {/* <h1>{NewUser}</h1> */}
        <div>
          {users.map((user, index) => (
            <div key={index}>
              <h1>{user}</h1>
              {/* <button onClick={() => deleteUser(index)}>Delete User</button> */}
            </div>
          ))}
        </div>
        {/* <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Crudopration;
