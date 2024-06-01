import starIcon from "../../assets/images/star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";

const FournisseurCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    totalCommande,
    lieux,
    _id,
    picture,
  } = doctor;
  const [color, setColor] = useState();
  function generateRandomColor() {
    let randomColor;
    do {
      randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } while (randomColor === "#FFFFFF"); // Repeat generation if color is white
    return randomColor;
  }
  useEffect(() => {
    setColor(generateRandomColor());
  }, []);

  return (
    <div className="p-3 lg:p-9">
      <div className="max-w-xs mx-auto lg:max-w-full">
        {" "}
        {/* Utilisation de max-w-xs pour une largeur maximale sur les petits écrans */}
        <div
          className={`w-full overflow-hidden rounded mx-auto h-[200px] text-white text-6xl flex items-center justify-center`}
          style={{
            backgroundColor: color,
          }}
        >
          {picture === "" ? (
            name[0]
          ) : (
            <img
              src={picture}
              className="w-full h-full object-cover "
              alt="profile"
            />
          )}
        </div>
        {/* Utilisation de w-full pour une largeur de 100% sur tous les écrans */}
      </div>
      <h2 className="text-[18px] leading-[30px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
            {" "}
            <img src={starIcon} alt="" /> {avgRating}{" "}
          </span>
        </div>

        <Link
          to={`/fournisseurs/${_id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  flex items-center justify-center group hover:bg-primaryColor hover:border-none "
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          {/* <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
            +{totalCommande} Commandes
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            A {lieux}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default FournisseurCard;
