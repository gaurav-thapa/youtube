import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Watch from "./components/watch/Watch";
import Search from "./components/search/Search";
import Home from "./components/Home";
const router = createBrowserRouter([
  {
    path: "/youtube/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "watch/:id", element: <Watch /> },
      { path: "search", element: <Search /> },
    ],
  },
]);
function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
