// import { Button } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {


  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  const login = () => {
    if (email === "" || password === "") {
      return toast.info("Provide All The Details !");
    } else if (email !== import.meta.env.VITE_ADMIN_EMAIL || password !== import.meta.env.VITE_ADMIN_PASSWORD) {
      return toast.error("Invalid Credentials !");
    } else {
      toast.success("Logged In Successfully !");
      localStorage.setItem("admin", "loginasadminbyompatel07");
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-screen">
      <div>
        <div className="mx-4 mt-24">
          <div className="text-center flex flex-col justify-center items-center mt-10 ">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-yellow-300 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-300 dark:text-gray-400">
              Only Admin Can Access The Dashboard !
            </h3>
            <h3 className="mb-5 text-lg font-normal text-gray-300 dark:text-gray-400">
              Are you sure, you want to Log In as Admin ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                className="font-bold text-md"
                color="success"
                variant="shadow"
                onClick={() => setOpenModal(true)}
              >
                Login as Admin !
              </Button>
              <Button
                className="font-bold text-md"
                color="danger"
                variant="shadow"
                onClick={() => navigate("/blog")}
              >
                No, Cancel !
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header className="bg-[#313131]" />
        <Modal.Body className="bg-[#313131]">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-200 dark:text-white">
              SignIn is required for Admin Only!
            </h3>
            <div>
              <div className="mb-2 block ">
                <Label
                  className="text-blue-200"
                  htmlFor="email"
                  value="Your email"
                />
              </div>
              <TextInput
                type="email"
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-blue-200"
                  htmlFor="password"
                  value="Your password"
                />
              </div>
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label className="text-blue-200" htmlFor="remember">
                  Remember me
                </Label>
              </div>
              <NavLink
                to="/blog"
                className="text-sm text-blue-200 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </NavLink>
            </div>
            <div className="w-full">
              <Button onClick={login} color="success" variant="shadow">
                Let's Hope In !
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminLogin;
