import React, { useState } from "react";
import logo from "../images/logo-ide.png";
import { Link } from "react-router-dom";
import image from "../images/authPageSide.png";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">
        <div className="left w-[40%]">
          <img className="w-[200px]" src={logo} alt="logo" />
          <form onSubmit={submitForm} className="w-full mt-[60px]">
            <div className="inputBox">
              <input required onChange={(e)=> {setUsername(e.target.value)}} value={username} type="text" placeholder="Username" />
            </div>
            <div className="inputBox">
              <input required onChange={(e)=> {setEmail(e.target.value)}} value={email} type="email" placeholder="Email" />
            </div>
            <div className="inputBox">
              <input required onChange={(e)=> {setPassword(e.target.value)}} value={password} type="password" placeholder="Password" />
            </div>
            <p className="text-gray-400">
              Already have an account{" "}
              <Link className="underline text-[#00AEEF]" to={"/login"}>
                Login
              </Link>
            </p>

            <div className="btnBlue w-full mt-[20px]">Sign Up</div>
          </form>
        </div>
        <div className="right w-[55%]">
          <img className="h-[100vh] w-[100%] object-cover" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
