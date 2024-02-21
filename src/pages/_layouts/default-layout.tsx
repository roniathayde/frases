import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Fingerprint, Menu, Text } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <header className="flex h-14   w-full items-center justify-between bg-slate-950 px-8 ">
        <h1 className="text-lg font-medium">Guilherme Fernandes</h1>

        <div className="flex gap-6">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="flex items-center gap-2 rounded bg-slate-900/60 px-2 py-1.5 transition-colors hover:bg-slate-700 lg:hidden"
                aria-label="Customise options"
              >
                <Menu className="size-5" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="rounded bg-slate-800 p-2"
                sideOffset={15}
              >
                <DropdownMenu.Item className="">
                  <Link
                    to="/"
                    className="flex items-center gap-2 rounded bg-slate-900/60 px-2 py-1.5 text-zinc-200 transition-colors hover:bg-slate-700 lg:hidden"
                  >
                    <Text className="size-4" />
                    Frases
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className=" rounded-full  border-b-2 border-slate-600" />

                <DropdownMenu.Item className="">
                  <Link
                    to="/biografia"
                    className=" flex items-center gap-2 rounded bg-slate-900/60 px-2 py-1.5 text-zinc-200 transition-colors hover:bg-slate-700 lg:hidden"
                  >
                    <Fingerprint className="size-4" />
                    Biografia
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <Link
            to="/"
            className="hidden items-center gap-2 rounded bg-slate-900/60 px-2 py-1.5 transition-colors hover:bg-slate-700 lg:flex"
          >
            <Text className="size-4" />
            Frases
          </Link>
          <Link
            to="/biografia"
            className="hidden items-center gap-2 rounded bg-slate-900/60 px-2 py-1.5 transition-colors hover:bg-slate-700 lg:flex"
          >
            <Fingerprint className="size-4" />
            Biografia
          </Link>
        </div>
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </>
  )
}
