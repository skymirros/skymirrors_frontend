import React from 'react';
import { renderRoutes } from 'react-router-config'
import routes from './routes'

const App = () => (
  <div style={{ height: '100vh' }}>
    {renderRoutes(routes)}
  </div>)


export default App;
