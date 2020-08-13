import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormGroup, Label } from "reactstrap";

SelectFiled.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

SelectFiled.defaultProps = {
  label: "",
  options: [],
  disabled: false,
  placeholder: "",
};

function SelectFiled(props) {
  const { field, form, label, options, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);

  const hanldSelectedOnChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    // 'Select' return a selected option not a native event.
    //Because formik received native event so we need
    //fake event change 'Select' to 'formik'.
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };

    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for="name">{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={hanldSelectedOnChange}
        placeholder={placeholder}
        options={options}
        isDisabled={disabled}
      />
    </FormGroup>
  );
}

export default SelectFiled;
