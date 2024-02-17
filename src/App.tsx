import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <div className="min-h-screen w-full bg-slate-900 font-body text-zinc-200">
      <RouterProvider router={router} />
    </div>
  )
}
