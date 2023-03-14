import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MineNftInputs = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <div className="col-lg-12 col-md-7">
          <div className="contact-form">
            <div className="contact-title mb-30">
              <h2>Enter Your Diamond Meta Data</h2>
            </div>
            <form
              className="contact-form-style"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                {/* {nftMetaData.map((item, index) => {
                  return (
                    <div className={`col-lg-${item.colNo}`} key={index}>
                      {" "}
                      <FormInput
                        label={item.label}
                        tag={item.tag}
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        options={item.options}
                        onChange={handleChange}
                        error={errors[item.name]}
                        register={register}
                        defaultValue={""}
                      />
                    </div>
                  );
                })} */}

                <input type="file" {...register("image")} />

                <div className="col-lg-12">
                  <button className="submit" type="submit">
                    SEND
                  </button>
                </div>
              </div>
            </form>

            <p className="form-message" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MineNftInputs;
