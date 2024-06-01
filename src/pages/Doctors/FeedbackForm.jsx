import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { Rating } from "react-simple-star-rating";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FeedbackForm = ({ fournisseur }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    console.log(fournisseur._id);

    axios
      .post(
        `http://localhost:3000/api/v1/supplier/${fournisseur._id}/feedbacks`,
        {
          name: name,
          email: email,
          feedbackText: feedback,
          note: rating,
        }
      )
      .then(() => {
        toast.success("Feedback enregistré", {
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
        window.location.reload();
      });

    handleClearForm();
  };

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="nom">Note</Label>
          <Rating onClick={handleRating} />
          <Label htmlFor="nom">Nom et Prénom</Label>
          <Input
            type="text"
            id="nom"
            name="nom"
            placeholder="votre nom.."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="votre email.."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Label htmlFor="avis">Avis</Label>
          <TextArea
            id="avis"
            name="avis"
            placeholder="votre avis.."
            rows={10}
            minLength={10}
            required
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></TextArea>
          {loading ? (
            <div className="w-full justify-center flex mt-4">
              <CircularProgress />
            </div>
          ) : (
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Container>
    </>
  );
};

export default FeedbackForm;
