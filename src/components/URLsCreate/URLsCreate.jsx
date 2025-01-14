import { useFormik } from "formik";
import * as Yup from "yup";

const URLsCreate = () => {
  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    url: Yup.string()
      .url("Ingresa una URL válida")
      .required("La URL es obligatoria"),
  });

  // Manejo del envío del formulario
  const handleSubmit = async (url) => {
    try {
      console.log("URL enviada:", url);
      alert(`URL enviada: ${url}`);
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: { url: "" },
    validateOnChange: false,
    validationSchema,
    onSubmit: handleSubmit,
  });

  console.log(formik);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                Paste the URL to be shortened
              </h3>

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4 text-center">
                  <input
                    type="text"
                    id="url"
                    name="url"
                    value={formik.values.url}
                    onChange={formik.handleChange}
                    placeholder="https://example.com"
                    className="w-75 px-3 py-2 border rounded-md "
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-sm btn-primary px-5" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLsCreate;
