import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input } from "reactstrap";

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
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
    </FormGroup>
  );
}

export default InputField;
