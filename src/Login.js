import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "./features/userSlice";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(
    "https://img.freepik.com/free-photo/beautiful-rose-studio_23-2150737305.jpg?size=626&ext=jpg"
  );
  const dispatch = useDispatch();
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg";
  const register = () => {
    if (!userName) {
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: userName,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userName,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((e) => alert(e.message));
  };
  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        console.log(userAuth);
        
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img src={imgUrl} alt="" />
      <form>
        <input
          placeholder="Full Name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder="Profile pic Url"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginUser}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
