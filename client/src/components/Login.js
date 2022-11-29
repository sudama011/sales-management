import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputControl/InputForm.module.css";
import Style from "./InputControl/InputControl.module.css";

export default function CreateTournament() {
  useEffect(() => {
    document.title = 'sign up';
  }, []);

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const type = useRef("");
  const userid = useRef("");
  const password = useRef("");

  const postData = async () => {
    try {
      const values = {
        type: type.current.value,
        userid: userid.current.value,
        password: password.current.value
      }
      // 
      navigate("/customer");
    } catch (err) {
      console.log(err)
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }
  };

  const handleSubmission = (e) => {
    if (!type.current.value || userid.current.value || password.current.value) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    postData();
  };

  return (
    <div className={styles.container} style={{ overflowX: "scroll" }}>
      <div className={styles.innerBox}>
        <h2 className={styles.heading}>Login</h2>

        <div className={Style.container}>
          <label>User Type</label>
          <select
            ref={type}
            autoFocus
            required>
            <option value='manager'>manager</option>
            <option values='salesperson'>salesperson</option>
            <option values='customer'>customer</option>
          </select>
        </div>
        <div className={Style.container}>
          <label>User ID</label>
          <input
            type="text"
            ref={userid}
            placeholder="User id"
          />
        </div>

        <div className={Style.container}>
          <label>Password</label>
          <input
            type="text"
            ref={password}
            placeholder="Password"
          />
        </div>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}