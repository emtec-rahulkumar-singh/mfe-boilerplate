import React from 'react';
import AddPost from './components/AddPost';
import RemoteApp from './remote1';

const App = () => {
  return (
    <div>
      <h1>Host App</h1>
      <AddPost />
      <RemoteApp />
    </div>
  );
};

App.propTypes = {};

App.defaultProps = {};

export default App;
