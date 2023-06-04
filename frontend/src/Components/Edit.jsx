import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateStD } from "../api/api";
import Inputs from "./Inputs";

import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [work, setWork] = useState("");
  const [image, setImage] = useState("");

  const onEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("work", work);
    formData.append("image", image);

    await updateStD(id, formData);
    navigate("/", { replace: true });
  };

  const handleImageState = ({ meta, file }, status) => {
    setImage(file);
  };

  return (
    <>
      <div className="app-container">
        <form
          className="max-w-xl w-full m-auto flex flex-col gap-9 rounded-lg ring-1 ring-gray-900 shadow-md shadow-black/25 bg-black/30 p-7"
          onSubmit={onEdit}
        >
          <Inputs
            type={"text"}
            label={"Name"}
            name={"name"}
            placeholder={"Jhon Doe"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Inputs
            type={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"email@example.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Inputs
            type={"text"}
            name={"work"}
            label={"Work"}
            placeholder={"Developer"}
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
          <Dropzone
            maxFiles={1}
            canRemove
            inputContent={"Drop A Image"}
            onChangeStatus={handleImageState}
            accept="image/*,audio/*,video/*"
            styles={{
              dropzone: { width: "100%", minHeight: 50 },
              dropzoneActive: { borderColor: "green" },
            }}
          />
          <button type="submit" className="button-theme">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
