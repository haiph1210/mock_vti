import Home from "./container/main/component/home/Home";
import Header from "./container/main/component/header/Header";
import { BrowserRouter, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import ModalRequest from "./container/main/component/DonationPrograms/Modal/ModalRequest";
import Dashboard from "./container/main/admin-component/dashboard/Dashboard";
import ListDonationPrograms from "./container/main/component/DonationPrograms/component/ListDonationPrograms";
import DonationProgramsTable from "./container/main/component/DonationPrograms/table/DonationProgramsTable";
import { Switch, Table } from "@material-ui/core";
import TableDonation from "./container/main/component/Donation/component/table/TableDonation";
import DonationCard from "./container/main/component/Donation/component/cart/DonationCart";
import MainDonation from "./container/main/component/Donation/component/mainDonation/MainDonation";
import { ToastContainer } from "react-toastify";
import Donation from "./container/main/component/Donation/entity/Donation";
import ModalLogin from "./container/main/component/user/Modal/ModalLogin";
import ModalLogOut from "./container/main/component/user/Modal/ModalLogOut";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshAction } from "./container/main/component/user/redux/auth/AuthAction";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/admin-donationPrograms',
        element: <DonationProgramsTable></DonationProgramsTable>
      },
      {
        path: '/admin-donation',
        element: <MainDonation></MainDonation>
      },  
      {
        path: '/donation',
        element: <Donation></Donation>
      }
    
    ]
  },
  {
    path: '/login',
    element: <ModalLogin></ModalLogin>,
    
  },
  {
    path: '/logout',
    element: <ModalLogOut></ModalLogOut>,
    
  },
  {
    path: '/login/register',
    element: <ModalRequest></ModalRequest>
  }
  
])
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(refreshAction());
    }
  },[])
  return (
    <div>
      <div>
         <RouterProvider router={router} /> 
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
