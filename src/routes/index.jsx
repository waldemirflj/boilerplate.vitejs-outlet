import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// pages
import PageOne from '@pages/main/PageOne';
import PageTwo from '@pages/main/PageTwo';

// shared
import MainLayout from '@shared/layouts/Main';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<PageOne />} />
      <Route path="page-two" element={<PageTwo />} />
    </Route>
  )
);

export default router;
