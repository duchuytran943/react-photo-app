import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { ErrorMessage } from "formik";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  label: "",
  type: "text",
  disabled: false,
  placeholder: "",
};

function InputField(props) {
  const { field, form, label, type, disabled, placeholder } = props;

  // field: {value: undefined, name: "title", onChange: ƒ, onBlur: ƒ}
  const { name } = field;

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  console.log("field", field);
  console.log("form", form);

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
      />
      {/* {showError && <p>{errors[name]}</p>} */}
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;
