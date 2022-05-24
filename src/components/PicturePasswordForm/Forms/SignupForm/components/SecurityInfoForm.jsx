import React from "react";
import { Field } from "formik";

function ChoosePoint(props) {
  const {
    formField: { point, difficulty },
  } = props;

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col gap-4">
          <label htmlFor="point">Choose point:</label>
          <Field
            className="rounded-full w-48 px-3 py-2 border focus:border-blue-500"
            id={point.name}
            name={point.name}
            type="number"
            min={4}
            max={7}
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <label htmlFor="difficulty">Choose your difficulty:</label>
          <Field
            as="select"
            id={difficulty.name}
            name={difficulty.name}
            className="rounded-full w-48 px-3 py-2 border focus:border-blue-500"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
        </div>
      </div>
    </>
  );
}

export default ChoosePoint;
