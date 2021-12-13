import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Booking from './pages/Booking/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import AddService from './pages/AddService/AddService';
import ManageService from './pages/ManageService/ManageService';
import Footer from './pages/Footer/Footer';
import SignUp from './pages/Login/SignUp/SignUp';
import Booked from './pages/Booking/Booked/Booked';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <Route path='/manageService'>
              <ManageService></ManageService>
            </Route>
            <Route path="/SignUp">
              <SignUp></SignUp>
            </Route>
            <Route path="/booked">
              <Booked></Booked>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
