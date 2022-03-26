import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/features/postSlice";
import Profile from "./components/Profile";
import Login from "./components/Login";
import "./App.css";
import { addUser, deleteUser, updateUsername } from "./redux/features/Users";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const userList = useSelector((state) => state.users.value);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div>
            <p>{user.username}</p>
            <p>{user.name}</p>
            <input
              type="text"
              placeholder="new username"
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button
              onClick={() =>
                dispatch(updateUsername({ id: user.id, username: newUsername }))
              }
            >
              Update username
            </button>
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
              Delete user
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
