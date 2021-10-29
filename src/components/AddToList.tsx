import React, { useState } from "react";

const AddToList = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    image: "",
    note: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.image}
        onChange={handleChange}
        name="age"
      />
      <textarea
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
    </div>
  );
};
export default AddToList;
