import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <div className="font-body min-h-screen w-full bg-slate-900 text-zinc-200">
      <RouterProvider router={router} />
    </div>
  )
}
