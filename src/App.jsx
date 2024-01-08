import "./App.css";
import Card from "./component/cards";
import img from "./assets/card-img.png";
import imgX from "./assets/X.svg";
import img2 from "./assets/card-img_2.png";
import imgY from "./assets/Y-img.svg";
import img3 from "./assets/card-img_3.png";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  const sitemap = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/services",
      element: <Services />,
    },
  ]);
  return <RouterProvider router={sitemap} />;
}

export default App;
