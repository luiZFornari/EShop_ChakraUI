import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuPublico from "./componentes/MenuPublico";
import NotFound from "./componentes/telas/NotFound";
import MenuPrivado from "./componentes/MenuPrivado";
import Sobre from "./componentes/telas/Sobre";
import ProdutoPublico from "./componentes/telas/home/Home";
import Login from "./componentes/telas/login/Login";
import Avaliacao from "./componentes/telas/avaliacao/Avaliacao";
import Categoria from "./componentes/telas/categoria/Categoria";
import Produto from "./componentes/telas/produto/Produto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: "true",
        element: <ProdutoPublico />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: "true",
        element: <ProdutoPublico />,
      },
      {
        path: "categoria",
        element: <Categoria />,
      },
      {
        path: "produto",
        element: <Produto />,
      },
      ,
      {
        path: "produto/:id",
        element: <Avaliacao />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
