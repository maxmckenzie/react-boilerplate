/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import logger from '../helpers/logger';

function App({ items = [] }) {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

App.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default App;
