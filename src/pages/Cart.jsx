import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [showDeliveryAddressForm, setShowDeliveryAddressForm] = useState(false);
  const getTotalPrice = () => {
    console.log(cartItems);
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };
  useEffect(() => {
    // Fetch cart items from local storage when component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const handleInputChange = (e) => {
    setDeliveryAddress({
      ...deliveryAddress,
      [e.target.name]: e.target.value,
    });
  };

  const validateOrder = () => {
    setShowDeliveryAddressForm(true);
  };
  const updateQuantity = (productId, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const submitOrder = (e) => {
    e.preventDefault();
    console.log({
      articlesCommandés: cartItems,
      ...deliveryAddress,
    });
    const isEmptyField = Object.values(deliveryAddress).some(
      (value) => value == ""
    );
    if (isEmptyField) {
      toast.error("Veuillez remplir tout les champs", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    axios
      .post("http://localhost:3000/api/v1/orders", {
        orderItems: cartItems,
        ...deliveryAddress,
        prixTotal: getTotalPrice(),
        fournisseurId: cartItems[0].fournisseurId,
      })
      .then(() => {
        toast.success("Commade effectuée", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        clearCart();
        navigate("/home");
        // Navigate to a success page or show a success message
      })
      .catch((error) => {
        console.error("Error creating order:", error);
        // Handle error, show error message to the user
      });
  };

  return (
    <div className="h-screen gradient-header1 ">
      <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.productId}
              className="flex justify-between items-center mb-2"
            >
              <span>{item.productName}</span>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    updateQuantity(item.productId, item.quantity - 10)
                  }
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-l hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2 py-1 bg-gray-200 text-gray-700">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(item.productId, item.quantity + 10)
                  }
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.productId)}
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                enlever
              </button>
            </li>
          ))}
        </ul>
        {cartItems.length > 0 && (
          <div className="mt-4">
            <button
              onClick={clearCart}
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              vider la carte
            </button>
            <button
              onClick={validateOrder}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Valider
            </button>
            <p className="mt-2 text-lg font-semibold">
              Prix total: {getTotalPrice()} DA
            </p>
          </div>
        )}
        {showDeliveryAddressForm && (
          <form>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">remplire votre carte</h3>
              <input
                type="text"
                name="adresseLivraison1"
                placeholder="Nom prenom"
                className="block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 mb-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="adresseLivraison2"
                placeholder="Numero de Tel"
                className="block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 mb-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="ville"
                placeholder="Wilaya"
                className="block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 mb-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="codePostal"
                placeholder="ville"
                className="block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 mb-2"
                onChange={handleInputChange}
              />
               <input
                type="text"
                name="pays"
                placeholder="Autre numero de tel"
                className="block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 mb-2"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="téléphone"
                placeholder="D'autres details"
                className="block w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 mb-4"
                onChange={handleInputChange}
              /> 
              <button
                onClick={submitOrder}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Confirmer votre commande
              </button>
            </div>
          </form>
        )}
        {cartItems.length === 0 && <p className="mt-4">Votre carte est vide</p>}
      </div>
    </div>
  );
};

export default Cart;
