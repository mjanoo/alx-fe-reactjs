import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/Form.css";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered:", data);
        alert("User registered successfully (mock API)!");
        resetForm();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error, please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="user-form">
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="p" className="error" />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" className="error" />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
