export const signupFormModel = {
  formId: "signupForm",
  formField: {
    username: {
      name: "username",
      label: "Username*",
      requiredErrorMsg: "username is required",
      invalidErrorMsg: "This username is already in use",
    },
    email: {
      name: "email",
      label: "Email*",
      requiredErrorMsg: "Email is required",
      invalidErrorMsg: "This email is already in use",
    },
    picture: {
      name: "pictureUrl",
      label: "Picture*",
      requiredErrorMsg: "Picture is required",
    },
    point: {
      name: "point",
      label: "Point",
    },
    difficulty: {
      name: "difficulty",
      label: "Difficulty*",
      requiredErrorMsg: "Difficulty of password is required",
    },
    secureQuestion: {
      name: "secureQuestion",
      label: "Security Question",
      requiredErrorMsg: "Security Question of password is required",
    },
    secureAnswer: {
      name: "secureAnswer",
      label: "Security Answer*",
      requiredErrorMsg: "Security Answer of password is required",
    },
    password: {
      name: "password",
      label: "Password*",
      requiredErrorMsg: "password is required",
    },
  },
};
