import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InputControl/InputForm.module.css";
import Style from "./InputControl/InputControl.module.css";
import axios from "axios";

export default function Salesperson() {
  useEffect(() => {
    document.title = 'Sales Person';
  }, []);

  // const [userType, setUserType] = useState('');


  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const sid = useRef();
  const cid = useRef();
  const product = useRef();
  const salesperson = useRef();
  const quantity = useRef();

  //usertype value change reference value change
  const postData = async () => {

    const values = {
      sid: Number(sid.current.value),
      cid: Number(cid.current.value),
      salesperson: Number(salesperson.current.value),
      product: product.current.value,
      quantity: Number(quantity.current.value)
    }

    let url = 'http://localhost:3001/salesperson';
    axios.post(url, values)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      })
  };

  const handleSubmission = (e) => {
    // if (!fn.current.value) {
    //   setErrorMsg("Fill all fields");
    //   return;
    // }
    setErrorMsg("");
    // setSubmitButtonDisabled(true);
    postData();
  };



  return (
    <div className={styles.container} style={{ overflowX: "scroll" }}>
      <div className={styles.innerBox}>
        <h2 className={styles.heading}>Sale Insert</h2>

        <div className={Style.container}>
          <label>SALE ID</label>
          <input
            type="number"
            ref={sid}
            placeholder="Enter EMP ID"
            required />
        </div>

        <div className={Style.container}>
          <label>Customer</label>
          <input
            type="number"
            ref={cid}
            placeholder="Customer ID"
            required />
        </div>
        <div className={Style.container}>
          <label>Salesperson</label>
          <input
            type="number"
            ref={salesperson}
            placeholder="Salesperson"
            required />
        </div>

        <div className={Style.container}>
          <label>Product</label>
          <input
            type="text"
            ref={product}
            placeholder="Product"
            required />
        </div>
        <div className={Style.container}>
          <label>Quantity</label>
          <input
            type="number"
            ref={quantity}
            placeholder="Quantity"
            required />
        </div>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}