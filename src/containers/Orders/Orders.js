import React, { useEffect, useState } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-order";

function Orders(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchData = [];
        for (let key in response.data) {
          fetchData.push({ ...response.data[key], id: key });
        }
        setOrders(fetchData);
        console.log(fetchData);
      })
      .catch((error) => console.log(error));
  }, []);

  const onDeleteOrder = (id) => {
    console.log("delete");
    axios
      .delete(`/orders/${id}.json`)
      .then((response) => {
        const updateOrder = orders.filter((order) => order.id !== id);
        setOrders(updateOrder);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {orders.map((order) => (
        <Order key={order.id} orderData={order} onDeleteOrder={onDeleteOrder} />
      ))}
    </div>
  );
}

export default Orders;
