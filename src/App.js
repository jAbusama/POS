import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <div className='App'>
        <Layout />
      </div>
    </Router>
  );
}

export default App;
