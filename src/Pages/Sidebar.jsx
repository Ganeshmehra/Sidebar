import React from 'react';
import { FaHome,  FaUser } from 'react-icons/fa';
import { ImFolderUpload } from "react-icons/im";
import { Link } from 'react-router-dom';
const Sidebar = (setTotalPrice, setaddItem, condition, setCondition) => {
  const logOut = () => {
    localStorage.removeItem("selore-login")
    navigate("/Login_page");
    setaddItem(0);
    setTotalPrice(0)
    setCondition(!condition);
  }

  const isLoggedIn = () => {
    return localStorage.getItem("selore-login");
   
  }
  return (
    <>

      <div className='sidebar d-flex justify-content-between  flex-column pb-5 min-vh-100 sidbar' >
        <div className="sidebar">
          <ul className="nav flex-column">
            <li className="nav-item box">
              <Link className="nav-link text-dark" to="/product">
                <FaHome className="me-2 text-dark" />
                Home
              </Link>
            </li>
            <li className="nav-item box">
              <Link className="nav-link text-dark" to="/Product_update">
              <ImFolderUpload className="me-2 text-dark"/>
                Add-Product
              </Link>
            </li>
            <li className="nav-item box">
              <Link className="nav-link text-dark" to="/User">
            <FaUser className="me-2 text-dark" />
                User details
              </Link>
            </li>
            <li className="nav-item box">
              <Link className="nav-link text-dark" to="/SeloreUser">
              <ImFolderUpload className="me-2 text-dark"/>
              SeloreUser details
              </Link>
            </li>

          </ul>
        </div>
        <div className="nav-item box">
          <Link className="nav-link dropdown-toggle text-dark" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            <FaUser className="me-2 text-dark" />
            Profile
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
            {isLoggedIn() ? (
              <Link onClick={logOut} class="dropdown-item text-dark" >Log out</Link>
            ) : (
              <Link to="/Login_page" class="dropdown-item text-dark">Log in</Link>
            )}
         
            <li><Link class="dropdown-item text-dark " to="/Sign_Up">sign up</Link></li>
           
          </ul>
        </div>

      </div>



    </>
  );
};


export default Sidebar;
