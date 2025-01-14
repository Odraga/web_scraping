import { Route, Routes } from "react-router-dom";

import Page404 from "../pages/ErrorHandling/Page404.jsx";
import App from "../App.jsx";
import ShortedUrlRedirection from "../pages/ShortedUrlRedirection/ShortedUrlRedirection.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} errorElement={<Page404 />} />
      <Route
        path="/:id"
        element={<ShortedUrlRedirection />}
        errorElement={<Page404 />}
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
