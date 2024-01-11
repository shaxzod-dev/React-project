import "./App.css";
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
