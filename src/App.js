import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import { products } from "./data";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  // routing
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/search", element: <SearchResults products={products} /> },
    { path: "/product/:id", element: <ProductDetails products={products} /> },
  ]);

  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <RouterProvider router={router} />
      </QueryClientProvider>{" "}
    </div>
  );
}

export default App;
