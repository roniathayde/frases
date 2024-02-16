import { Fingerprint, Text } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <header className="flex h-14   w-full items-center justify-between bg-slate-950 px-8 ">
        <h1 className="text-lg font-medium">Guilherme Fernandes</h1>

        <div className="flex gap-6">
          <Link
            to="/biografia"
            className="flex items-center gap-2 rounded bg-slate-900/60 px-2 py-1.5 transition-colors hover:bg-slate-700"
          >
            <Fingerprint className="size-4" />
            Biografia
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 rounded bg-slate-900/60 px-2 py-1.5 transition-colors hover:bg-slate-700"
          >
            <Text className="size-4" />
            Frases
          </Link>
        </div>
      </header>
      <main className=" ">
        <Outlet />
      </main>
    </>
  )
}
