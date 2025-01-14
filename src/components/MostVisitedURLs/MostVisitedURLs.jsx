const MostVisitedURLs = () => {
  const mostVisitedUrls = [
    { id: 1, title: "Youtube", url: "https://www.youtube.com/", clicks: 33 },
    { id: 2, title: "Facebook", url: "https://www.facebook.com/", clicks: 22 },
    { id: 0, title: "Wikipedia", url: "https://es.wikipedia.org/", clicks: 12 },

    { id: 3, title: "Github", url: "https://github.com/", clicks: 9 },
  ];
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
              {mostVisitedUrls && mostVisitedUrls.length > 0
                ? mostVisitedUrls.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center "
                      >
                        <div>{index + 1}</div>{" "}
                        <a
                          href={item.url}
                          style={{ backgroundColor: "transparent" }}
                          target="_blank"
                        >
                          {item.title}
                        </a>
                        <span className="badge text-bg-primary rounded-pill">
                          {item.clicks}
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
