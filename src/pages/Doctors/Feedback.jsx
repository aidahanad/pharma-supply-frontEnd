/* eslint-disable react/prop-types */
import { useState } from "react";
import avatar from "../../assets/images/avatar1.png";
import { formatDate } from "../../utils/formatDate";
import { FaStar } from "react-icons/fa";
import FeedbackForm from "./FeedbackForm";
import { Rating } from "react-simple-star-rating";

const Feedback = ({ fournisseur }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({fournisseur.feedbacks.length})
        </h4>
        {fournisseur.feedbacks.map((feedback, i) => (
          <div key={i} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {feedback.name}
                </h5>

                <p className="text__para mt-3 font-medium text-[15px]">
                  {feedback.feedbackText}
                </p>
              </div>
            </div>
            <Rating initialValue={feedback.note} size={20} readonly={true} />
          </div>
        ))}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Donnez un avis
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm fournisseur={fournisseur} />}
    </div>
  );
};

export default Feedback;
