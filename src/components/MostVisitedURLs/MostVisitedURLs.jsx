import { useEffect, useState } from "react";
import apiService from "../../api/API";

const MostVisitedURLs = () => {
  const [mostVisitedUrls, setMostVisitedUrls] = useState([]);
  const [lastedUrlCreate, setLastedUrlCreate] = useState("");

  const getMostVisitedUrls = async () => {
    try {
      let requestAPI = await apiService.getAll("url_short/most_visited_urls");

      setMostVisitedUrls(requestAPI);
    } catch (error) {
      console.error(error);
    }
  };

  const getLastedUrlCreate = () => {
    try {
      let urlObj = localStorage.getItem("short_url");
      setLastedUrlCreate(JSON.parse(urlObj));
    } catch (error) {
      console.error(error);
    }
  };

  const statusArrayUrls = () => mostVisitedUrls && mostVisitedUrls.length > 0;

  useEffect(() => {
    getMostVisitedUrls();
    getLastedUrlCreate();
  }, []);

  return (
    <>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-12 text-center">
            <h4>100 Most Visited URLs</h4>
          </div>
          <div className="col-2 col-md-4" />
          <div className="col ">
            <ul className="list-group select-click shadow-sm">
              <li
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  statusArrayUrls ? "" : "mb-3"
                }`}
                aria-current="true"
              >
                Last created url:{" "}
                <a
                  href={`http://localhost:5173/${lastedUrlCreate.shortener_url}`}
                  target="_blank"
                >
                  {lastedUrlCreate.title}
                </a>
                <span className="badge text-bg-primary rounded-pill">
                  {lastedUrlCreate.click_count}
                </span>
              </li>
              {statusArrayUrls
                ? mostVisitedUrls.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center "
                      >
                        <div>{index + 1}</div>{" "}
                        <a
                          href={item.original_url}
                          style={{ backgroundColor: "transparent" }}
                          target="_blank"
                        >
                          {item.title}
                        </a>
                        <span className="badge text-bg-primary rounded-pill">
                          {item.total_clicks}
                        </span>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="col-2 col-md-4" />
        </div>
      </div>
    </>
  );
};

export default MostVisitedURLs;
