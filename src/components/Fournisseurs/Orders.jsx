import { useState, useEffect } from "react";
import axios from "axios";
import OrderDetails from "./OrderDetails";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Fetch orders for the fournisseur
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/orders");
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleShowMore = (order) => {
    setSelectedOrder(order);
    setVisible(true);
  };

  return (
    <div className="w-full mx-auto mt-8">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Adresse de Livraison
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Prix Total
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Date
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border border-gray-300 px-4 py-2">
                {order.adresseLivraison1}, {order.adresseLivraison2},{" "}
                {order.ville}, {order.codePostal}, {order.pays}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {order.prixTotal}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {new Date(order.dateCommande).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="text-blue-300 underline"
                  onClick={() => handleShowMore(order)}
                >
                  Voir plus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <OrderDetails
        visible={visible}
        setVisible={setVisible}
        selectedOrder={selectedOrder}
      />
      {/* Modal for showing order details */}
    </div>
  );
};

export default OrdersTable;
