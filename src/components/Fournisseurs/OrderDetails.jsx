import { useState } from "react";

const OrderDetails = ({ visible, setVisible, selectedOrder }) => {
  return (
    <>
      {visible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-[700px] z">
            <h2 className="text-xl font-bold mb-4">Details de la commande</h2>

            <div className="p-4">
              <div className="mb-2">
                <strong>Adresse de Livraison:</strong>{" "}
                {selectedOrder.adresseLivraison1},{" "}
                {selectedOrder.adresseLivraison2}, {selectedOrder.ville},{" "}
                {selectedOrder.codePostal}, {selectedOrder.pays}
              </div>
              <div className="mb-2">
                <strong>Prix Total:</strong> {selectedOrder.prixTotal}
              </div>
              <div className="mb-2">
                <strong>Date:</strong>{" "}
                {new Date(selectedOrder.dateCommande).toLocaleDateString()}
              </div>
              <div className="mb-4">
                <strong>Produits:</strong>
                <ul>
                  {selectedOrder.articlesCommandés.map((item) => (
                    <li key={item._id}>
                      {item.nom} - Quantite: {item.quantité}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setVisible(false)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
