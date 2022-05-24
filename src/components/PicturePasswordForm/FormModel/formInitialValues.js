import { signupFormModel } from "components/PicturePasswordForm/FormModel/formModel";
const {
  formField: {
    username,
    email,
    picture,
    point,
    difficulty,
    secureQuestion,
    secureAnswer,
    password,
  },
} = signupFormModel;

export const signupForminitialValues = {
  [username.name]: "",
  [email.name]: "",
  [picture.name]: "",
  [point.name]: 4,
  [difficulty.name]: "easy",
  [secureQuestion.name]: "",
  [secureAnswer.name]: "",
  [password.name]: "",
};
