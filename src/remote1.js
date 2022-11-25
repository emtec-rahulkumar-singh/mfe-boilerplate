import React from "react";
const Remote = React.lazy(() => import("remote/App"));

const RemoteApp = () => {
  const Loading = <p>Loading...</p>;
  return (
    <React.Suspense fallback={Loading}>
      <Remote />
    </React.Suspense>
  );
};

RemoteApp.propTypes = {};
RemoteApp.defaultProps = {};

export default RemoteApp;
