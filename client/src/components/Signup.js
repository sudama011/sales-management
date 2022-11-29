import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputControl/InputForm.module.css";
import Style from "./InputControl/InputControl.module.css";
import axios from "axios";
export default function CreateTournament() {
  useEffect(() => {
    document.title = 'sign up';
  }, []);

  const [userType, setUserType] = useState('');


  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const name = useRef(""); // m
  const id = useRef(""); // m s
  const fn = useRef(""); // m s
  const ln = useRef(""); // m s 
  const password = useRef(""); // m
  const mid = useRef(""); // m s
  const commision = useRef(""); // m s
  const companyname = useRef(""); // m c
  const addr = useRef(""); // m

  //usertype value change reference value change
  const postData = () => {

    const manager = {
      id: Number(id.current.value),
      fn: fn.current.value,
      ln: ln.current.value,
      password: password.current.value
    }
    const salesperson = {
      id: Number(id.current.value),
      fn: fn.current.value,
      ln: ln.current.value,
      mid: Number(mid.current.value),
      commision: Number(commision.current.value),
      password: password.current.value
    }

    const customer = {
      id: Number(id.current.value),
      companyname: companyname.current.value,
      adddress: addr.current.value,
      password: password.current.value
    }


    if (userType === 'manager') {
      let url = 'http://localhost:3001/signup';
      axios.post(url, manager)
        .then(res => {
          console.log('Data send');
          // navigate("/profile");
        })
        .catch(err => {
          console.log(err); setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        })
    }
    else if (userType === 'salesperson') {
      let url = 'http://localhost:3001/signup';
      axios.post(url, salesperson)
        .then(res => {
          console.log('Data send');
          // navigate("/profile");
        })
        .catch(err => {
          console.log(err); setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        })
    }

    else if (userType === 'customer') {
      let url = 'http://localhost:3001/signup';
      axios.post(url, customer)
        .then(res => {
          console.log('Data send');
          // navigate("/profile");
        })
        .catch(err => {
          console.log(err); setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        })
    }

  };

  const handleSubmission = (e) => {
    // if (!fn.current.value) {
    //   setErrorMsg("Fill all fields");
    //   return;
    // }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    postData();
  };

  return (
    <div className={styles.container} style={{ overflowX: "scroll" }}>
      <div className={styles.innerBox}>
        <h2 className={styles.heading}>Sign Up</h2>

        <button onClick={() => { setUserType('manager') }}>Signup as Manager</button>
        <button onClick={() => { setUserType('salesperson') }}>Signup as Salesperson</button>
        <button onClick={() => { setUserType('customer') }}>Signup as Customer</button>

        {userType === 'manager' &&
          <>
            <div className={Style.container}>
              <label>ID</label>
              <input
                type="number"
                ref={id}
                placeholder="Enter EMP ID"
                required />
            </div>

            <div className={Style.container}>
              <label>First Name</label>
              <input
                type="text"
                ref={fn}
                placeholder="Your First Name"
                required />
            </div>
            <div className={Style.container}>
              <label>Last Name</label>
              <input
                type="text"
                ref={ln}
                placeholder="Your Last Name"
                required />
            </div>

            <div className={Style.container}>
              <label>Password</label>
              <input
                type="password"
                ref={password}
                placeholder="Enter your password"
                required />
            </div>

          </>
        }

        {userType === 'salesperson' &&
          <>
            <div className={Style.container}>
              <label>Emp_Id</label>
              <input
                type="number"
                ref={id}
                placeholder="Employee ID"
                required /> </div>
            <div className={Style.container}>
              <label> First Name</label>
              <input
                type="text"
                ref={fn}
                placeholder="Enter First Name"
                required />
            </div>
            <div className={Style.container}>
              <label> Last Name</label>
              <input
                type="text"
                ref={ln}
                placeholder="Enter Last Name"
                required />
            </div>
            <div className={Style.container}>
              <label>Manager</label>
              <input
                type="number"
                ref={name}
                placeholder="Manager ID"
                required />
            </div>
            <div className={Style.container}>
              <label>Commision</label>
              <input
                type="number"
                ref={commision}
                placeholder="Commision"
                required />
            </div>

            <div className={Style.container}>
              <label>Password</label>
              <input
                type="password"
                ref={password}
                placeholder="Enter your password"
                required />
            </div>
          </>
        }


        {userType === 'customer' &&
          <>
            <div className={Style.container}>
              <label>Customer ID</label>
              <input

                type="text"
                ref={id}
                placeholder="Enter Customer ID Given by the firm"
                required />
            </div>
            <div className={Style.container}>
              <label>Company Name</label>
              <input

                type="text"
                ref={companyname}
                placeholder="Enter Company Name"
                required />
            </div>
            <div className={Style.container}>
              <label>Address</label>
              <input

                type="text"
                ref={addr}
                placeholder="Enter Address"
                required />
            </div>
            <div className={Style.container}>
              <label>Password</label>
              <input
                type="password"
                ref={password}
                placeholder="Enter your password"
                required />
            </div>
          </>
        }

        {userType !== '' &&
          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Submit
            </button>
          </div>
        }

      </div>
    </div>
  );
}