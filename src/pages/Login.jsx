/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "pharmacien",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === "" || formData.eMail === "") {
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
    setLoading(true);

    axios
      .post(
        `http://localhost:3000/api/v1/${
          formData.role === "pharmacien" ? "users" : "supplier"
        }/login`,
        formData
      )
      .then((res) => {
        if (formData.role === "pharmacien") {
          if (res.data.user.approved) {
            navigate("/home");
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("role", formData.role);
            console.log(formData.role);
            window.location.reload();
          } else {
            toast.error("Votre compte n'est pas encore approuvé!", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        } else {
          if (res.data.approved) {
            navigate("/home");
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("role", formData.role);
            console.log(formData.role);
            window.location.reload();
          } else {
            toast.error("Votre compte n'est pas encore approuvé!", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }
      })
      .catch(() => {
        toast.error("Email ou mot de passe invalide", {
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

    console.log(formData);
  };

  return (
    <section className="px-5 1g:px-0 gradient-header1 ">
      <div className="w-full max-w-[570px] mx-auto rounded-1g shadow-md md:p-10">
        <h3 className=" text-headingColor text-[22px] leading-9 font-bold mb-10">
          Salut! <span className=" text-primaryColor"> Vous </span>
          Revoila
        </h3>

        <form className="py-4 md:py-0">
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
              placeholder="Mot de passe"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[17px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>

          <div className="mt-7">
            {loading ? (
              <div className="flex justify-center">
                <CircularProgress />
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-2 py-2"
                type="submit"
              >
                Connexion
              </button>
            )}
          </div>

          <p className="mt-5 text-headingColor text-center">
            Vous n'avez pas de compte ?
            <Link to="/register" className="text-primaryColor font-medium ml-1">
              inscrivez-vous !
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
