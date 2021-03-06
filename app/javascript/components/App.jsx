// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import { userContext } from "../context/userContext";
import AppRouter from "./AppRouter";
import PropTypes from "prop-types";

const App = ({ user, userId }) => {
  return (
    <userContext.Provider value={{ user, userId }}>
      <AppRouter />
    </userContext.Provider>
  );
};

App.propTypes = {
  user: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default App;
