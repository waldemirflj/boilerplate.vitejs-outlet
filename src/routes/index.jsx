import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// main
import PageOne from '@pages/main/PageOne';
import PageTwo from '@pages/main/PageTwo';

import OptionOne from '@pages/main/PageOne/OptionOne';
import OptionTwo from '@pages/main/PageOne/OptionTwo';
import OptionTwoDetails from '@pages/main/PageOne/OptionTwo/Details';

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

const router2 = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          element: <PageOne />,
          children: [
            {
              index: true,
              element: <OptionOne />,
            },
            {
              path: "option-two",
              element: <OptionTwo />,
              children: [
                {
                  path: ":id",
                  element: <OptionTwoDetails />,
                }
              ]
            }
          ]
        },
        {
          path: "page-two",
          element: <PageTwo />,
        }
      ]
    }
  ]
);


export default router2;
