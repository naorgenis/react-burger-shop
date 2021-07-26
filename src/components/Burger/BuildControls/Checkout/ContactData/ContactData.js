import React, { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../UI/Spinner/Spinner";
import axios from "../../../../../axios-order";

function ContactData(props) {
  const ingredient = useSelector((state) => state.ing);
  const totalPrice = useSelector((state) => state.totalPrice);
  const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   address: { city: "", street: "" },
  // });

  const orderHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const orderData = {
      ingredient: ingredient,
      totalPrice: totalPrice,
      customer: {
        name: "Naor",
        address: {
          town: "Tel aviv",
          street: "dizi",
        },
        phone: "0545123456",
      },
    };
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h4> Enter your contact data</h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <form>
          <input type="text" name="Name" placeholder="insert your name" />
          <input type="email" name="email" placeholder="insert your email" />
          <input type="text" name="city" placeholder="insert your city" />
          <input type="text" name="street" placeholder="insert your street" />
          <button
            type="button"
            className="btn btn-info"
            onClick={(e) => orderHandler(e)}
          >
            Order
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactData;
