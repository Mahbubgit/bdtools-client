import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Tools from './Pages/Tools/Tools';
import Reviews from './Pages/Reviews/Reviews';
import BusinessSummary from './Pages/BusinessSummary/BusinessSummary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin/RequireAdmin';
import AddAReview from './Pages/Dashboard/AddAReview';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Settings from './Pages/Dashboard/Settings';
import MyPortfolio from './Pages/Dashboard/MyPortfolio';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/business-summary' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addAReview" element={<AddAReview></AddAReview>}></Route>
          <Route path="settings" element={<Settings></Settings>}></Route>
          <Route path="myPortFolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="allUsers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="manageAllOrders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path="addAProduct" element={<RequireAdmin><AddAProduct></AddAProduct></RequireAdmin>}></Route>
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
