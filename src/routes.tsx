import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './pages/_layouts/default-layout.tsx'
import { Biografia } from './pages/biografia.tsx'
import { Frases } from './pages/frases'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Frases />,
      },
      {
        path: '/biografia',
        element: <Biografia />,
      },
    ],
  },
])
