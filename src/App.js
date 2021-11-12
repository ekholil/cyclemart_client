import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Buynow from './Components/Pages/Buynow/Buynow';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Explore from './Components/Pages/Explore/Explore';
import Home from './Components/Pages/Home/Home';
import Register from './Components/Register/Register';
import Menubar from './Components/Shared/Menubar';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
      <Menubar />
        <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/buynow/:id">
            <Buynow />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
