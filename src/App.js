import React from 'react';
import CrudApp from './components/CrudApp'
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <div>
      <Typography variant="h2" color="primary" align="center">REACT CRUD</Typography>
      <CrudApp></CrudApp>
    </div>
  );
}

export default App;
