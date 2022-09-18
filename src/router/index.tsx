import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from 'App';
import Home from 'pages/Home';
import Activity from 'pages/Activity';
import ActivityDetail from 'pages/ActivityDetail';
import Restaurant from 'pages/Restaurant';
import RestaurantDetail from 'pages/RestaurantDetail';
import ScenicSpot from 'pages/ScenicSpot';
import ScenicSpotDetail from 'pages/ScenicSpotDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '*', element: <Navigate replace to="" /> },
      { path: 'activity', element: <Activity /> },
      { path: 'activity-detail/:id', element: <ActivityDetail /> },
      { path: 'restaurant', element: <Restaurant /> },
      { path: 'restaurant-detail/:id', element: <RestaurantDetail /> },
      { path: 'scenic-spot', element: <ScenicSpot /> },
      { path: 'scenic-spot-detail/:id', element: <ScenicSpotDetail /> },
    ],
  },
]);

export default router;
