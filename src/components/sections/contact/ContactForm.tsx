import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { EarthCanvas } from "../../canvas/canvas";
import { SectionWrapper } from "../../../hoc";
import { slideIn } from "../../../utils/motion";
import { FormDetails } from "../../../ts/interfaces";
import { validateEmail } from "../../../utils/validation";
import Alerts from "../../../utils/alerts";
import TextArea from "./TextArea";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import SubmitButton from "./SubmitButton";
import { formDetails, toEmail, toName } from "../../../data/data";

//@ts-ignore
const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

const ContactForm = (): JSX.Element => {
  const formRef = useRef(null);
  const [form, setForm] = useState<FormDetails>(formDetails);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [msgSent, setMsgSent] = useState<boolean>(false);

  const formIsInvalid: boolean =
    !validateEmail(form.email) ||
    form.name.length < 2 ||
    form.message.length < 10;

  const clearForm = (): void => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e): void => {
    const { target } = e;
    const { name, value }: { name: string; value: string } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e): void => {
    e.preventDefault();
    setLoading(true);
    const formDetails: Record<string, string> = {
      from_name: form.name,
      to_name: toName,
      from_email: form.email,
      to_email: toEmail,
      message: form.message,
    };
    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, formDetails, VITE_PUBLIC_KEY)
      .then(
        (): void => {
          setLoading(false);
          setMessage(Alerts.success(form.name));
          clearForm();
          setMsgSent(true);
        },
        (error) => {
          setLoading(false);
          setMessage(Alerts.error());
          console.error(error);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-primary p-8 rounded-2xl"
      >
        <p className="sect-subtxt">Get in touch</p>
        <h3 className="sect-head-txt">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <NameInput {...{ form, handleChange }} />
          <EmailInput {...{ form, handleChange }} />
          <TextArea {...{ form, handleChange }} />
          <div className="flex items-center gap-4">
            <SubmitButton {...{ loading, formIsInvalid, msgSent }} />
            {message}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactForm, "contact");
