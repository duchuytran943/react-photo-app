import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Label } from "reactstrap";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialValues = {
    title: "",
  };

  return (
    <Formik initialValues={initialValues}>
      {(pormikProps) => {
        console.log("pormik:", pormikProps);
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />
            <FormGroup>
              <Label for="categoryId">Category</Label>
              <Select
                name="categoryId"
                id="categoryId"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </FormGroup>

            <FormGroup>
              <Label for="categoryId">Photo</Label>

              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.MAIN_GB}
                  alt="colorful background"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
