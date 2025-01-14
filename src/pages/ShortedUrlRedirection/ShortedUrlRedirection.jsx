import { useEffect } from "react";
import { useParams } from "react-router";
import apiService from "../../api/API";

const ShortedUrlRedirection = () => {
  const { id } = useParams();

  const redirect = async () => {
    try {
      let requestAPI = await apiService.getById("url_short", id);

      window.location.href = await requestAPI.original_url;
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  useEffect(() => {
    redirect();
  }, []);
  return <div></div>;
};

export default ShortedUrlRedirection;
