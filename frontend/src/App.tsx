import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./components/layout/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <p>vvvvvvvvvvvv</p> },
        { path: "/about", element: <p>dggggggggg</p> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
