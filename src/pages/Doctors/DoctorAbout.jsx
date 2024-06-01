import MedicamentCard from "./../../components/Medicaments/MedicamentCard";
import { formatDate } from "../../utils/formatDate";
import { useState, useEffect } from "react";
import axios from "axios";

const DoctorAbout = ({ user }) => {
  const [medicament, setMedicament] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://pharma-supply-backend.onrender.com/api/v1/products")
      .then((res) => {
        setMedicament(res.data.filter((e) => e.fournisseurId === user._id));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <h3 className=" text-[20px] leading-[30px] text-Color font-semibold flex items-center gap-2">
          A propos de
          <span className=" text-primaryColor font-bold text-[24px] leading-9">
            {user.nom}
          </span>
        </h3>
        <p className="text_para">
          Dynamique et expérimenté dans l'industrie pharmaceutique avec une
          passion pour l'innovation et la santé publique. Forte expertise dans
          divers aspects, y compris la recherche et développement, la
          fabrication, la réglementation et la gestion de la qualité. Un leader
          motivé avec une aptitude à diriger des équipes vers l'atteinte
          d'objectifs stratégiques et opérationnels.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>

        <ul className="pt-4 md:p-s">
          <li className=" flex flex-col sm:flex-row sm: justify-between sm: items-end md:gap-5 mb-[30px] ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("12-04-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-primaryColor">
                Ms Pharma{" "}
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-primaryColor">
              Route de Chéraga, دالي ابراهيم · {user.téléphone}
            </p>
          </li>
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold mb-[-55px]">
            Medicaments
          </h3>
        </ul>

        <section>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {medicament.map((medicament) => (
                <MedicamentCard key={medicament.id} medicament={medicament} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DoctorAbout;
