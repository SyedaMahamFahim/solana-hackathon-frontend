import React from "react";

const FormInput = ({ colNo }) => {
  return (
    <>
      <div className={`col-lg-${colNo}`}>
        <input name="name" placeholder="Name*" type="text" />
      </div>
      <div className="col-lg-6">
        <input name="email" placeholder="Email*" type="email" />
      </div>
      <div className="col-lg-12">
        <input name="subject" placeholder="Subject*" type="text" />
      </div>
      <div className="col-lg-12">
        <textarea
          name="message"
          placeholder="Your Message*"
          defaultValue={""}
        />
        <button className="submit" type="submit">
          SEND
        </button>
      </div>
    </>
  );
};

export default FormInput;
