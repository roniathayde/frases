import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './pages/_layouts/default-layout.tsx'
import { Biografia } from './pages/biografia.tsx'
import { Frases } from './pages/frases.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Biografia />,
      },
      {
        path: '/biografia',
        element: <Frases />,
      },
    ],
  },
])
