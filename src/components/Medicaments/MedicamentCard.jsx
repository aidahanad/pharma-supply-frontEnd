import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const MedicamentCard = ({ medicament }) => {
  const name = medicament.nom;
  const photo = medicament.images[0];
  const categorie = medicament.categorie;
  const prix = medicament.prix;
  const fournisseurId = medicament.fournisseurId;

  const addToCart = () => {
    if (localStorage.getItem("user") == null) {
      toast.error("Votre devez vous connectez pour passer une commande!", {
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
    const newItem = {
      productId: medicament._id,
      productName: name,
      quantity: 10, // You can set a default quantity or let the user choose it
      fournisseurId: fournisseurId,
      price: medicament.prix,
    };
    let oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...oldCart, newItem];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Ajouté au panier avec success", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="p-3 lg:p-9">
      <div className="max-w-xs mx-auto lg:max-w-full">
        {/* Utilisation de max-w-xs pour une largeur maximale sur les petits écrans */}
        <img src={photo} className="w-full h-auto rounded mx-auto" alt="" />{" "}
        {/* Utilisation de w-full pour une largeur de 100% sur tous les écrans */}
      </div>

      <h2 className="text-[18px] leading-[30px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <p className="text-[14px] leading-6 font-[400] text-textColor">
        {categorie}
      </p>
      <p className="text-[14px] leading-6 font-[400] text-textColor">
        {prix} DA
      </p>
      {localStorage.getItem("role") === "pharmacien" && (
        <div
          onClick={addToCart}
          className=" mt-5 w-[44px] h-[45px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none  "
        >
          <FaShoppingCart className="group-hover:text-white w-9 h-4 items-center" />
        </div>
      )}
    </div>
  );
};

export default MedicamentCard;
