import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MonarchLoader from "./components/common/MonarchLoader";
import { LoadingWrapper } from "./components/custom";
import { About, Database, Home } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/database",
      element: (
        <LoadingWrapper
          timer={4}
          page={<Database />}
          loader={<MonarchLoader />}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
