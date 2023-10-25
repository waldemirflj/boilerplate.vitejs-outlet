import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// main
import PageOne from '@pages/main/PageOne';
import PageTwo from '@pages/main/PageTwo';

// default
import NotFound from '@pages/NotFound';

// shared
import MainLayout from '@shared/layouts/Main';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<PageOne />} />
      <Route path="page-two" element={<PageTwo />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
