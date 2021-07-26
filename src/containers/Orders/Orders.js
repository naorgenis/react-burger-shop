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
        console.log(orders);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <Order />
      ))}
    </div>
  );
}

export default Orders;
