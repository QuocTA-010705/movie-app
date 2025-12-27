import React from 'react'
import Home from '../pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie_Detail from '../pages/movie-detail';
import Search_Page from '../pages/search';
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>

function App() {
  //configure router
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:movieId",
    element: <Movie_Detail/>,
  },
  {
    path: "/search/:keyWord",
    element: <Search_Page/>
  },
]);

  return <RouterProvider router={router} />
}

export default App;