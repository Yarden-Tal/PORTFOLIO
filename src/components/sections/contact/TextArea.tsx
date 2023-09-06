import React from "react";
import { checked } from "../../../assets/assets";


const TextArea = ({ form, handleChange }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-white font-medium mb-4">Your Message</span>
        <span hidden={form.message.length < 10}>
          <img src={checked} alt="V" />
        </span>
      </div>
      <textarea
        rows={7}
        name="message"
        required
        minLength={10}
        value={form.message}
        onChange={handleChange}
        className="my-input"
      />
    </div>
  );
};

export default TextArea;
