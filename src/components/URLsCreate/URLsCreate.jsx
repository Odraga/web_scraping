import { useFormik } from "formik";
import * as Yup from "yup";
import apiService from "../../api/API";
import { useState } from "react";

const URLsCreate = () => {
  const [shortUrl, setShortUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    original_url: Yup.string()
      .url("Ingresa una URL válida")
      .required("La URL es obligatoria"),
  });

  // Manejo del envío del formulario
  const handleSubmit = async (url) => {
    try {
      setIsLoading(true);
      let requestAPI = await apiService.create("url_short", url);

      let simpleObjUrl = {
        title: requestAPI.title,
        original_url: requestAPI.original_url,
        shortener_url: requestAPI.shortener_url,
        click_count: requestAPI.click_count,
      };

      localStorage.setItem("short_url", JSON.stringify(simpleObjUrl));

      setShortUrl(requestAPI.shortener_url);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      original_url: "",
      shortener_url: "",
      click_count: 0,
    },
    validateOnChange: false,
    validationSchema,
    onSubmit: handleSubmit,
  });

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
                    name="original_url"
                    value={formik.values.original_url}
                    onChange={formik.handleChange}
                    placeholder="https://example.com"
                    className="w-75 px-3 py-2 border rounded-md "
                  />
                  {formik.errors.original_url ? (
                    <div className="text-danger text-sm">
                      {formik.errors.original_url}
                    </div>
                  ) : null}
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-sm btn-primary px-5"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "procesando..." : "Enviar"}
                  </button>
                </div>
              </form>
            </div>
            {shortUrl && (
              <div className="card-footer">
                New Url:{" "}
                <a href={`http://localhost:5173/${shortUrl}`} target="_blank">
                  http://localhost:5173/{shortUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLsCreate;
