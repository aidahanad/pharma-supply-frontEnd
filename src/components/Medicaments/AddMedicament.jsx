import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const NewProductModal = ({ visible, setVisible }) => {
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({
    nom: "",
    description: "",
    richDescription: "",
    images: [],
    categorie: "",
    quantiteEnStock: 0,
    notation: 0,
    nombreDavis: 0,
    estMisEnAvant: false,
    prix: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProductData({
      ...productData,
      images: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    Object.entries(productData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((file, index) => {
          formData.append(`image${index}`, file);
        });
      } else {
        formData.append(key, value);
      }
    });

    const fournisseurId = JSON.parse(localStorage.getItem("user"))._id;
    formData.append("fournisseurId", fournisseurId);
    setLoading(true);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    axios
      .post(
        "https://pharma-supply-backend.onrender.com/api/v1/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        toast.success("Ajouté avec success", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })

      .catch(() => {
        toast.error("Une erreure s'est produite", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .finally(() => {
        setLoading(false);
        setVisible(false);
      });
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-[700px] z">
            <h2 className="text-xl font-bold mb-4">Create New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nom" className="block font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={productData.nom}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              {/* Add other input fields for other product properties */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block font-semibold mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={productData.description}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="categorie" className="block font-semibold mb-1">
                  Category
                </label>
                <select
                  id="categorie"
                  name="categorie"
                  value={productData.categorie}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="medicament">Medicament</option>
                  <option value="materiel">Materiel</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="quantitéEnStock"
                  className="block font-semibold mb-1"
                >
                  Stock Quantity
                </label>
                <input
                  type="number"
                  id="quantitéEnStock"
                  name="quantitéEnStock"
                  value={productData.quantitéEnStock}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="prix" className="block font-semibold mb-1">
                  Prix
                </label>
                <input
                  type="number"
                  id="prix"
                  name="prix"
                  value={productData.prix}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="images" className="block font-semibold mb-1">
                  Images
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  onChange={handleImageChange}
                  className="w-full"
                />

                {productData.images && productData.images.length > 0 && (
                  <div className="mt-2 flex flex-wrap">
                    {productData.images.map((file, index) => (
                      <div key={index} className="mr-2 mb-4">
                        <img
                          src={file.preview || URL.createObjectURL(file)}
                          alt={`Product Image ${index + 1}`}
                          className="w-20 h-20 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {loading ? (
                <div className="flex justify-center">
                  <CircularProgress />
                </div>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Create Product
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  setVisible(false);
                }}
                className="ml-2 text-gray-600"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProductModal;
