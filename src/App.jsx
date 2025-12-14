import React from 'react'
import Home from '../pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie_Detail from '../pages/movie-detail';
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
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
]);

  return <RouterProvider router={router} />
}

export default App;