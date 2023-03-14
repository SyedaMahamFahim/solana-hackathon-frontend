import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({
  label,
  tag,
  type,
  name,
  placeholder,
  options,
  onChange,
  defaultValue,
  error,
  register,
}) => {
  return (
    <>
      <Form.Group>
        {/* label */}
        <Form.Label>{label}</Form.Label>
        {(() => {
          if (tag === "input") {
            return (
              <Form.Control
                type={type}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                isInvalid={!!error}
                {...(register ? register(name) : {})}
                autoComplete={name}
              />
            );
          } else if (tag === "textarea") {
            return (
              <Form.Control
                as="textarea"
                name={name}
                cols="30"
                rows="7"
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
                isInvalid={!!error}
                register={register}
              />
            );
        
          } else if (tag === "select") {
            return (
              <Form.Select
                name={name}
                onChange={onChange}
                defaultValue={defaultValue}
                isInvalid={!!error}
                register={register}
              >
                <option disabled={true} value="">
                  {placeholder}
                </option>
                {options.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </Form.Select>
            );
          } else if (tag === "button") {
            return <button className={`btn-outline`}>Send Message</button>;
          }
        })()}

        {error && (
          <Form.Control.Feedback
            type="invalid"
            style={{
              color: "red",
            }}
          >
            {error.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </>
  );
};

export default FormInput;
