import React from "react";
import { API_BASE_URL } from "../config/variables";
import useForm from "../hooks/useForm";

const UploadBicycle = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    description: "",
    photo: "",
  });
  const { name, description, photo } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "image/jpeg",
      },
      body: JSON.stringify({
        bicycle: {
          name: name,
          description: description,
          photo: photo,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    reset();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 shadow border py-3 px-3">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            value={photo}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadBicycle;
