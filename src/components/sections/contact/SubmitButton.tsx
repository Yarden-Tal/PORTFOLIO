import React from "react";
import FormLoader from "../../loaders/FormLoader";

const SubmitButton = ({ formIsInvalid, loading, msgSent }): JSX.Element => {
  return (
    <button
      disabled={formIsInvalid}
      type="submit"
      className={`submit-btn ${
        !formIsInvalid ? "hover:bg-secondary" : "cursor-not-allowed opacity-40"
      } ${msgSent ? "bg-green-600" : "bg-tertiary"}`}
    >
      {loading ? FormLoader() : msgSent ? "Sent ✔️" : "Send"}
    </button>
  );
};

export default SubmitButton;
