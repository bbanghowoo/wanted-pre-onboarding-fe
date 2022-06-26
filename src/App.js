import React from 'react';

import AuthProvider from './contexts/AuthContext';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
