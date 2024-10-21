import React from "react";

const CustomInput = ({ placeholder, value, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ padding: "14px", width: "70%" }}
      />
    </form>
  );
};

export default CustomInput;
