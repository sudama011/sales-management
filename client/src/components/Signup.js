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

  const name = useRef("");
  const id = useRef("");
  const fn = useRef("");
  const ln = useRef("");
  const password = useRef("");


  const postData = async () => {
    try {
      const values = {
        id: id.current.value,
        fn: fn.current.value,
        ln: ln.current.value
      }
      let url = 'http://localhost:3001/signup';
      axios.post(url, values)
        .then(res => console.log('Data send'))
        .catch(err => console.log(err))

      // create account 
      // navigate("/profile");
    } catch (err) {
      console.log(err)
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
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
                placeholder="Enter id"
                required />
            </div>

            <div className={Style.container}>
              <label>First Name</label>
              <input
                type="text"
                ref={fn}
                placeholder="your first name"
                required />
            </div>
            <div className={Style.container}>
              <label>Last Name</label>
              <input
                type="text"
                ref={ln}
                placeholder="your last name"
                required />
            </div>


            {/* <div className={Style.container}>
              <label>Password</label>
              <input
                type="password"
                ref={password}
                placeholder="Enter your password"
                required />
            </div> */}


          </>
        }

        {userType === 'salesperson' &&
          <>
            <div className={Style.container}>
              <label>Name</label>
              <input

                type="text"
                ref={name}
                placeholder="Enter Tournament Name"
                required />
            </div>

            <div className={Style.container}>
              <label>Address</label>
              <input
                type="text"
                ref={name}
                placeholder="Enter Tournament Name"
                required />
            </div>
          </>
        }


        {userType === 'customer' &&
          <>
            <div className={Style.container}>
              <label>Name</label>
              <input

                type="text"
                ref={name}
                placeholder="Enter Tournament Name"
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