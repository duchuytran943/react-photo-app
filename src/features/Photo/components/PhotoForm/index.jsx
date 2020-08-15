import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectFiled from "custom-fields/SelectFiled";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
  onSubmit: null,
  initialValues: {},
  isAddMode: true,
};

function PhotoForm(props) {
  const { initialValues, isAddMode, onSubmit } = props;

  let validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is require!"),
    categoryId: Yup.number().required("This field is required!").nullable(),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is require!"),
      otherwise: Yup.string().notRequired(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(pormikProps) => {
        // const { values, errors, touched } = pormikProps;
        // console.log("aaa", values, errors, touched);
        const { isSubmitting } = pormikProps;

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="categoryId"
              component={SelectFiled}
              label="Category"
              options={PHOTO_CATEGORY_OPTIONS}
              placeholder="What's your photo category?"
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Add to album" : "Update your photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
