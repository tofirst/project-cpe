import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupPage = (props) => {
  const {
    formField: { username, email },
  } = props;

  //   async function onSubmitFunc(values) {
  //     console.log(JSON.stringify(values));
  //     localStorage.removeItem("imgUrl");
  //     nextPage();
  //   }

  //   const SignUpSchema = Yup.object().shape({
  //     email: Yup.string()
  //       .email("Please enter valid email")
  //       .required("Email is required"),
  //     username: Yup.string()
  //       .min(8, "Minimum character is 8")
  //       .max(20, "Maximum character is 20.")
  //       .required("Username is required"),
  //   });

  return (
    <>
      <div className="flex w-96 flex-col gap-4">
        <div id="login-form" className="mt-6 flex flex-col gap-6 text-[12px]">
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id={email.name}
              name={email.name}
              className="h-12 w-full rounded-full border border-gray-300 bg-transparent py-3 px-6 
                              outline-none  focus:border-blue-500"
              placeholder={email.label}
            />
            {/* {errors.email && touched.email && (
                <div className="text-red-500">{errors.email}</div>
              )} */}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id={username.name}
              name={username.name}
              className="h-12 w-full rounded-full border border-gray-300 bg-transparent py-3 px-6 
                              outline-none  focus:border-blue-500"
              placeholder={username.label}
            />
            {/* {errors.username && touched.username && (
                <div className="text-red-500">{errors.username}</div>
              )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
