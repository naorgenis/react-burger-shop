import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import "./BurgerBuilder.css";
import { START_PRICE } from "../../store/prices";
import Modal from "../../components/UI/modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

function BurgerBuilder(props) {
  const ingredient = useSelector((state) => state.ing);
  const totalPrice = useSelector((state) => state.totalPrice);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderStatus, setOrderStatus] = useState("");

  const dispatch = useDispatch();

  const onAddIng = (ingType) => {
    dispatch({ type: "ADDING", ingType: ingType });
  };
  const onRemoveIng = (ingType) => {
    if (ingredient[ingType] !== 0) {
      dispatch({ type: "REMOVE", ingType: ingType });
    }
  };

  const updatePurchasbale = () => {
    return totalPrice !== START_PRICE;
  };

  const updateModal = () => {
    setModal(!modal);
  };

  const orderToggle = () => {
    setIsOrdered(false);
    updateModal();
  };

  const purchaseContinuHandler = () => {
    props.history.push("./checkout");
  };

  return (
    <div className="BurgerBuilder">
      {modal ? (
        <Modal modal={updateModal}>
          {isOrdered ? (
            isLoading ? (
              <Spinner />
            ) : (
              <div>
                <p>{orderStatus}</p>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => orderToggle()}
                >
                  Thanks!
                </button>
              </div>
            )
          ) : (
            <OrderSummary
              ingredient={ingredient}
              totalPrice={totalPrice}
              modal={updateModal}
              order={purchaseContinuHandler}
            />
          )}
        </Modal>
      ) : null}
      <Burger ingredient={ingredient} />
      <BuildControls
        totalPrice={totalPrice.toFixed(2)}
        ingAdded={onAddIng}
        ingRemove={onRemoveIng}
        purchasable={updatePurchasbale()}
        modal={updateModal}
      />
    </div>
  );
}

export default BurgerBuilder;
