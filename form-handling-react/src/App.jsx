import FormikForm from "./components/formikForm.jsx";
import "./styles/Form.css";

function App() {
  return (
    <div className="app-container">
      <h1>User Registration Form (Formik)</h1>
      <FormikForm />  {/* <- render the Formik form */}
    </div>
  );
}

export default App;



