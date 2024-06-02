import FournisseurCard from "./../../components/Fournisseurs/FournisseurCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const Doctors = () => {
  const [fournisseurs, setFournisseurs] = useState([]);
  const [displayedFournisseurs, setDisplayedFournisseurs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://pharma-supply-backend.onrender.com/api/v1/supplier")
      .then((res) => {
        console.log(res);
        setFournisseurs(res.data);
        setDisplayedFournisseurs(res.data);
      })
      .catch(() => {
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
  }, []);
  return (
    <>
      <section className="bg-[#ffffff]">
        <div className="container text-center">
          <h2 className="heading"> Recherchez votre fournisseur</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="recherchez un fournisseur"
              onChange={(e) => {
                let search = e.target.value;
                if (search === "") {
                  setDisplayedFournisseurs(fournisseurs);
                } else {
                  setDisplayedFournisseurs(
                    fournisseurs.filter((f) => f.nom.toLowerCase().includes(search.toLowerCase()))
                  );
                }
              }}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Recherchez
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {loading ? (
              <div className="flex w-screen mt-9 justify-center">
                <CircularProgress />
              </div>
            ) : (
              displayedFournisseurs.map((doctor) => (
                <FournisseurCard
                  key={doctor._id}
                  doctor={{
                    name: doctor.nom,
                    avgRating:
                      doctor.feedbacks.length == 0
                        ? 0.0
                        : parseFloat(
                            (
                              doctor.feedbacks.reduce(
                                (sum, feedback) =>
                                  sum + parseInt(feedback.note),
                                0
                              ) / doctor.feedbacks.length
                            ).toFixed(1)
                          ),
                    _id: doctor._id,
                  }}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="gradient-header1">
        <div className="container">
          <div className=" text-center xl:w-[470px] mx-auto whitespace-normal md:whitespace-nowrap">
            <h2 className="heading text-center ">Ce que les Pharmaciens </h2>
            <h2 className="heading text-center "> disent </h2>
            <p className="text__para text-center  ">Sur Nos Fournisseurs</p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
