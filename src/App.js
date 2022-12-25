import { lazy, Suspense } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Getting...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
