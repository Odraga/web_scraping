import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <h1 className="display-1 text-danger">404</h1>
      <p className="lead text-dark">
        Oops! The page youre looking for doesnt exist.
      </p>
      <Link to="/" className="btn btn-primary mt-4">
        Go back to home
      </Link>
    </div>
  );
};

export default Page404;
