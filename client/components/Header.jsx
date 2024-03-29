import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  ViewColumnsIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-10 w-auto" src="/assets/logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Workspaces
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-500">
                <div className="p-4">
                  {props.authenticated ? <>{props.workspaces.map((workspace) => (
                    <button
                      key={workspace.id}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-400 w-full"
                      onClick={() => props.selectWorkspace(workspace)}
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ViewColumnsIcon className="h-6 w-6 text-gray-600 group-hover:text-yellow-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto block font-semibold text-gray-900 text-left">
                        
                          {workspace.name}
                          <span className="absolute inset-0" />
                       
                        {/* <p className="mt-1 text-gray-600 dark:text-gray-200">{workspace.owner_id}</p> */}
                      </div>
                    </button>
                  ))}</> : ''}
                  <button
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-400 w-full"
                      onClick={()=> props.modal(true)}
                      type="button"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <SquaresPlusIcon className="h-6 w-6 text-gray-600 group-hover:text-yellow-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto block font-semibold text-gray-900 text-left">
                        
                          Create New Workspace
                          <span className="absolute inset-0" />
                        
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
      

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            About Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            Company
          </a>
        </Popover.Group>
        {props.authenticated ? <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100" onClick={() => {props.logOut(false)}}>
            Log out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>: 
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100" onClick={() => {props.login(true)}}>
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">TaskHive</span>
              <img
                className="h-8 w-auto"
                src="./assets/logo.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700">
                        Workspaces
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {props.authenticated ? props.workspaces.map((item) => (
                          <Disclosure.Button
                            key={item.id}
                            onClick={() => props.selectWorkspace(item)}
                            className="block rounded-lg py-2 pl-8 w-full text-sm font-semibold leading-7 text-left text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button >
                        )) : ''}
                        <Disclosure.Button className="block rounded-lg py-2 pl-8 w-full text-sm font-semibold leading-7 text-left text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                        onClick={()=> props.modal(true)}>
                          Create New Workspace
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Company
                </a>
              </div>
              {props.authenticated ? 
              <div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={() => {props.logOut(false)}}
                >
                  Log out
                </a>
              </div> : 
              <div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={() => {props.login(true)}}
                >
                  Log in
                </a>
              </div>}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
