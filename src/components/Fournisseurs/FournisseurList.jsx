import FournisseurCard from "./FournisseurCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const FournisseurList = () => {
  const [fournisseurs, setFournisseurs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://pharma-supply-backend.onrender.com/api/v1/supplier")
      .then((res) => {
        console.log(res);
        setFournisseurs(res.data);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {loading ? (
        <div className="flex w-screen mt-9 justify-center">
          <CircularProgress />
        </div>
      ) : (
        fournisseurs.map((doctor) => (
          <FournisseurCard
            key={doctor._id}
            doctor={{
              name: doctor.nom,
              picture: doctor.profilePicture,
              avgRating:
                doctor.feedbacks.length == 0
                  ? 0.0
                  : parseFloat(
                      (
                        doctor.feedbacks.reduce(
                          (sum, feedback) => sum + parseInt(feedback.note),
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
  );
};
export default FournisseurList;
