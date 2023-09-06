import React from "react";
import { StarsCanvas } from "../../components";
import ContactForm from "./ContactForm";

const Contact = (): JSX.Element => {
  return (
    <section className="relative">
      <ContactForm />
      <StarsCanvas />
    </section>
  );
};

export default Contact;
