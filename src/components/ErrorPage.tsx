import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error) && `${error.status} ${error.statusText}`}
    </div>
  );
};

export default ErrorPage;
