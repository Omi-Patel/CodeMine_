import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import About from "./components/about/About";
import Blog from "./components/blogs/Blog";
import BlogInfo from "./components/blogs/BlogInfo";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Nopage from "./components/noPage/Nopage";
import CreateBlog from "./components/blogs/CreateBlog";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/blogs/Dashboard";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import MyState from "./context/myState";
import GoToTop from "./components/goTop/GoToTop";
import { inject } from "@vercel/analytics";

const App = () => {
  inject();

  return (
    <>
      <MyState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/createblog" element={<CreateBlog />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/*" element={<Nopage />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <GoToTop />
          <Footer />
        </Router>
      </MyState>
    </>
  );
};

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = localStorage.getItem("admin");
  // console.log(typeof admin);
  if (admin === "loginasadminbyompatel07") {
    return children;
  } else {
    return <Navigate to={"/adminlogin"} />;
  }
};
