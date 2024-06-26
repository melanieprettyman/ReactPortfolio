import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import HomePage from "./components/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/Aboutme", element: <AboutMe /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
