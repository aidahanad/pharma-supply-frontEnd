import { useState, useEffect } from "react";

import starIcon from "../../assets/images/star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import NewProductModal from "../../components/Medicaments/AddMedicament";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const DoctorDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("about");
  const [visible, setVisible] = useState();
  useEffect(() => {
    console.log(id);
    axios
      .get("http://localhost:3000/api/v1/supplier/" + id)
      .then((res) => {
        setUser(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <section>
          <NewProductModal visible={visible} setVisible={setVisible} />
          {id === JSON.parse(localStorage.getItem("user"))?._id && (
            <div
              onClick={() => {
                setVisible(true);
              }}
              className="h-16 w-16 text-white bg-black fixed right-11 rounded-full  flex justify-center items-center text-lg cursor-pointer"
            >
              +
            </div>
          )}

          <div className="max-w-[1170px] px-5 max-auto">
            <div className="grid md:grid-cols-3 gap-[50px]">
              <div className="md:col-span-2 ml-[100px]">
                <div className="flex items-center gap-5 ml-[50px]">
                  <div className="w-[200px] h-[200px] bg-primaryColor rounded-full overflow-hidden ">
                    <img src={user.profilePicture} />
                  </div>

                  <div className="ml-[10px]">
                    <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                      {user.nom}
                    </h3>
                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                        <img src={starIcon} alt="" />{" "}
                        {user.feedbacks.length == 0
                          ? 0.0
                          : parseFloat(
                              (
                                user.feedbacks.reduce(
                                  (sum, feedback) =>
                                    sum + parseInt(feedback.note),
                                  0
                                ) / user.feedbacks.length
                              ).toFixed(1)
                            )}
                      </span>
                      <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor"></span>
                    </div>
                    <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                      Fournisseur a MS pharma
                    </p>
                  </div>
                </div>

                <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                  <button
                    onClick={() => setTab("about")}
                    className={`${
                      tab === "about" &&
                      "border-b border-solid border-primaryColor"
                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  >
                    A propos
                  </button>

                  <button
                    onClick={() => setTab("feedback")}
                    className={`${
                      tab === "feedback" &&
                      "border-b border-solid border-primaryColor"
                    } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  >
                    Vos avis
                  </button>
                </div>

                <div className="mt-[50px]">
                  {tab === "about" && <DoctorAbout user={user} />}
                  {tab === "feedback" && <Feedback fournisseur={user} />}
                </div>
              </div>

              <div>
                <SidePanel />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DoctorDetails;
