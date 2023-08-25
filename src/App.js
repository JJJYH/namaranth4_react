import './App.css';
import Header from './comp/Header';
import Sidebar from './comp/Sidebar';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="pcoded-main-container">
		      <div className="pcoded-content">
            <Switch>
              {
                routes.map((route) => {
                  return <Route
                    key={route.path}
                    exact path={route.path}
                    component={route.component} />
                })
              }
            </Switch>
          </div>
        </div>
      </div>
      
      <div  className='container mt-3'>
      
      </div>
    </Router>

  );
}

export default App;
