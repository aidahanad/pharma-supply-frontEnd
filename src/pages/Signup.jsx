/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import signupImg from "../assets/images/photo1.webp";
import { Link } from "react-router-dom";
import ImagePicker from "../components/Utils/ImagePicker";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageSelect = (imageFile) => {
    setSelectedImage(imageFile);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedImage,
    phone: "",
    role: "pharmacien",
    registreDeCommerce: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append("nom", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("téléphone", formData.phone);
    data.append("phone", formData.phone);
    data.append("registreDeCommerce", formData.registreDeCommerce);
    if (selectedImage) {
      data.append("photo", selectedImage);
    }

    axios
      .post(
        `http://localhost:3000/api/v1/${
          formData.role === "pharmacien" ? "users" : "supplier"
        }`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/home");
        toast.success(
          "Vous serais contacté pas nos admins une fois votre compte est approuvé!",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error("Une erreur s'est produite", {
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
      });
  };

  return (
    <section className="px-5 xl:px-0 gradient-header1 ">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/*====== image ========*/}
          <div className="hidden lg:block  rounded-l-lg">
            <figure className=" rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-[10%]" />
            </figure>
          </div>
          {/* ====== formulaire ======= */}

          <div className="rounded-1-1g lg:pl-16 py-10">
            <h3 className=" text-headingColor text-[22px] leading-9 font-bold mb-10">
              Créer un <span className=" text-primaryColor">compte</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Nom et prénom"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Numéro de téléphone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Numéro de registre de commerce"
                  name="registreDeCommerce"
                  value={formData.registreDeCommerce}
                  onChange={handleInputChange}
                  className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  placeholder=" mot de passe"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingcolor font-bold text-[16px] leading-7"
                >
                  êtes-vous un :
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className=" text-textColor font-semibold text-[15px] leading-7 px-4 py-3
focus:outline-none"
                  >
                    <option value="pharmacien">Pharmacien</option>
                    <option value="fournisseur">Fournisseur</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <div className=" flex items-center gap-10">
                  <p className="text-headingcolor font-bold text-[16px] leading-7 ">
                    Importer une photo :
                  </p>
                  <ImagePicker
                    className="rounded-full w-[60px] h-[60px] object-cover border-2 border-solid border-primaryColor"
                    onImageSelect={handleImageSelect}
                  />

                  {/* <input
                    type="file"
                    name=" photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.6rem] py-[0.375rem] text-[12px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer "
                  >
                    Importez une photo
                  </label> */}
                </div>
              </div>

              <div className="mt-7">
                {loading ? (
                  <div className="flex justify-center">
                    <CircularProgress />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                  >
                    S'inscrire
                  </button>
                )}
              </div>

              <p className="mt-5 text-textColor text-center">
                Avez-vous deja un compte?
                <Link
                  to="/login"
                  className=" text-primaryColor font-medium ml-1"
                >
                  Se connecter
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
