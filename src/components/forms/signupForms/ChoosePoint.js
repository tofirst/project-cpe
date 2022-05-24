import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ChoosePoint(props) {
  const [point, setPoint] = useState(4);
  const pointSchema = Yup.object().shape({
    point: Yup.number()
      .min(4, "Minimum character is 4")
      .max(7, "Maximum point is 7")
      .required("Please choose point or positions"),
  });

  const handleChangePoint = (e) => {
    let currentPoint = e.target.value;
    setPoint(currentPoint);
    localStorage.setItem("point", currentPoint);
  };

  return (
    <>
      <Formik
        enableReinitialize
        validationSchema={pointSchema}
        initialValues={{
          point: point,
          difficulty: "",
        }}
        onSubmit={(values) => {
          localStorage.setItem("point", values.point);
        }}
      >
        {({ touched, handleSubmit, values, errors, setFieldValue }) => (
          <Form>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col gap-4">
                <label htmlFor="point">Choose point:</label>
                <Field
                  className="rounded-full w-48 px-3 py-2 border focus:border-blue-500"
                  id="point"
                  name="point"
                  type="number"
                  min={4}
                  max={7}
                  onChange={handleChangePoint}
                />
                {errors.point && touched.point && (
                  <div className="text-red-500 text-base">{errors.point}</div>
                )}
              </div>
              <div className="flex flex-col gap-4 ">
                <label htmlFor="difficulty">Choose your difficulty:</label>
                <Field
                  as="select"
                  id="difficulty"
                  name="difficulty"
                  className="rounded-full w-48 px-3 py-2 border focus:border-blue-500"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </Field>
                {errors.point && touched.point && (
                  <div className="text-red-500 text-base">{errors.point}</div>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ChoosePoint;
