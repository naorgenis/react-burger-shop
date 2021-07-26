import React from "react";
import CheckoutSummary from "../../../Order/CheckoutSummary/CheckoutSummary";
import { useSelector } from "react-redux";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";

function Checkout(props) {
  const ingredient = useSelector((state) => state.ing);
  //const totalPrice = useSelector((state) => state.totalPrice);

  const onCancelHandler = () => {
    props.history.goBack();
  };

  const onContinueHandler = () => {
    props.history.replace("/checkout/contact-data");

    // const orderData = {
    //   ingredient: ingredient,
    //   totalPrice: totalPrice,
    //   customer: {
    //     name: "Naor",
    //     address: {
    //       town: "Tel aviv",
    //       street: "dizi",
    //     },
    //     phone: "0545123456",
    //   },
    // };
  };

  return (
    <div>
      <CheckoutSummary
        ingredient={ingredient}
        onContinueHandler={onContinueHandler}
        onCancelHandler={onCancelHandler}
      />
      <Route
        path={props.match.path + "/contact-data"}
        render={() => <ContactData history={props.history} />}
      />
    </div>
  );
}

export default Checkout;
