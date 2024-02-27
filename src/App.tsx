import * as ReactRouter from "react-router-dom";
import Home from "./pages/playground";

const router = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  return (
    <>
      <ReactRouter.RouterProvider router={router} />
    </>
  );
};
export default App;
