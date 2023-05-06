import api from "../config";
const AxiosErrorHandler = () => {
  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error.response.status;
      const message = error.response.data.message;

      if (status === "400") {
        return Promise.reject(error), alert("Error:", message);
      } else if (status === "403") {
        return (
          Promise.reject(error),
          alert("you dont have permission to receive data")
        );
      } else if (status === "404") {
        return Promise.reject(error);
      } else if (status === "429") {
        return Promise.reject(error), alert("too many requests");
      } else if (status === "401") {
        localStorage.clear();
        sessionStorage.clear();

        return Promise.reject(error);
      }
      return;
    }
  );
  return <></>;
};

export default AxiosErrorHandler