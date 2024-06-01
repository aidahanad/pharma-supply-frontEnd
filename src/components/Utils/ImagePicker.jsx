// components/ImagePicker.js

import { useState } from "react";

const ImagePicker = ({ onImageSelect, className }) => {
  const [selectedImage, setSelectedImage] = useState(
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onImageSelect(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="imageInput"
      />
      <label htmlFor="imageInput">
        <div>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className={className} />
          ) : (
            <div>Select an image</div>
          )}
        </div>
      </label>
    </div>
  );
};

export default ImagePicker;
