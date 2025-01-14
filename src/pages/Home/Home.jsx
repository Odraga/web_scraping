import MostVisitedURLs from "../../components/MostVisitedURLs/MostVisitedURLs";
import URLs from "../../components/URLsCreate/URLsCreate";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className=" fw-bolder text-primary text-shadow text-center my-5">
            Short URL
          </h1>

          <URLs />

          <MostVisitedURLs />
        </div>
      </div>
    </>
  );
};

export default Home;
