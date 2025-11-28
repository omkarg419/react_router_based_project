import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import User from "./components/user/User.jsx";
import Contact from "./components/contact/Contact.jsx";
import Github, { githubLoader } from "./components/github/Github.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route loader={githubLoader} path="github" element={<Github />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
