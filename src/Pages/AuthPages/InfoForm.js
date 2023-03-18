import { useState } from "react";
import { db, auth } from "../../Config/firebaseConfig";
import { NavLink } from "react-router-dom";
import classes from "./InfoForm.module.scss";

function InfoForm() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputBio, setInputBio] = useState("");
  const [inputSem, setInputSem] = useState("");
  const [inputCgpa, setInputCgpa] = useState("");
  const [inputCer, setInputCer] = useState("");

  const [uid, setUid] = useState("");

  auth.onAuthStateChanged((user) => {
    if (user) setUid(user.uid);
    else console.log("user does not exist !!");
  });

  const submitDetails = () => {
    const data = {
      name: inputName,
      email: inputEmail,
      bio: inputBio,
      sem: inputSem,
      cgpa: inputCgpa,
      certificate: inputCer,
    };

    db.ref("userdata/" + uid).set(data);
  };

  return (
    <div className={classes.InfoFormWrapper}>
      <div className={classes.Wrapper}>
        <h1 className={classes.Title}>Fill In Your details</h1>

        <div className={classes.Input_wrapper}>
          <input
            type="text"
            placeholder="Enter your name"
            className={classes.Input}
            name="username"
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>

        <div className={classes.Input_wrapper}>
          <input
            type="email"
            placeholder="Enter your Semester"
            className={classes.Input}
            name="username"
            onChange={(e) => setInputSem(e.target.value)}
          />
        </div>

        <div className={classes.Input_wrapper}>
          <input
            type="email"
            placeholder="Enter your Email"
            className={classes.Input}
            name="username"
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>

        <div className={classes.Input_wrapper}>
          <input
            type="text"
            placeholder="Tell something about yourself"
            className={classes.Input}
            name="username"
            onChange={(e) => setInputBio(e.target.value)}
          />
        </div>

        <div className={classes.Input_wrapper}>
          <input
            type="text"
            placeholder="What is your CGPA"
            className={classes.Input}
            name="username"
            onChange={(e) => setInputCgpa(e.target.value)}
          />
        </div>

        <div className={classes.Input_wrapper}>
          <input
            type="text"
            placeholder="Enter URL of your Certificate"
            className={classes.Input}
            name="username"
            onChange={(e) => setInputCer(e.target.value)}
          />
        </div>

        <NavLink to="/signin">
          <button className={classes.SubmitBtn} onClick={submitDetails}>
            Submit
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default InfoForm;
