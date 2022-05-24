import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "components/Form";

import Home from "pages/Home";
import "./App.css";

import SignupPageContainer from "pages/SignupPageContainer";
import { SignupPicturePasswordForm } from "components/PicturePasswordForm/Forms/SignupForm/components";
import FormLayout from "components/Layout/FormLayout";
import Dashboard from "pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/signin"
            element={
              <div className="flex w-screen h-screen justify-center items-center bg-gray-200">
                <Form />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div className="App">
                <Home />
              </div>
            }
          />

          <Route
            path="/signup"
            element={
              <FormLayout>
                <SignupPicturePasswordForm />
              </FormLayout>
            }
          />

          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
