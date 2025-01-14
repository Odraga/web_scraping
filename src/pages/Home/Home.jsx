import { useState } from "react";
import MostVisitedURLs from "../../components/MostVisitedURLs/MostVisitedURLs";
/* import URLs from "../../components/URLsCreate/URLsCreate";
 */
const Home = () => {
  const [anyChange, setAnyChange] = useState(false);

  const makeAnyChange = () => {
    setAnyChange((prevState) => !prevState);

    console.log(anyChange);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className=" fw-bolder text-primary text-shadow text-center my-5">
            Short URL
          </h1>{" "}
          {/*  <URLs makeAnyChange={makeAnyChange} /> */}
          <MostVisitedURLs
            makeAnyChange={makeAnyChange}
            anyChange={anyChange}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
