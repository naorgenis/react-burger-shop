import React, { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../../../UI/Spinner/Spinner";
import axios from "../../../../../axios-order";
import Input from "../../../../UI/Input/Input";
import "./ContactData.css";

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
    <div className="ContactData">
      <h4> Enter your contact data</h4>
      {isLoading ? (
        <Spinner />
      ) : (
        <form>
          <div className="InputDiv">
            <Input type={"text"} text={"name"} />
            <Input type={"email"} text={"email"} />
            <Input type={"text"} text={"city"} />
            <Input type={"text"} text={"street"} />
          </div>
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
