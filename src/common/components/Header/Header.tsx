/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BookOpenIcon,
  ChipIcon,
  CreditCardIcon,
  DownloadIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
const navigation = [
  { name: "Pricing", href: "/pricing", icon: CreditCardIcon },
  { name: "Download", href: "/download", icon: DownloadIcon },
  { name: "Docs", href: "#", icon: BookOpenIcon },
  { name: "App", href: "#", icon: ChipIcon },
];
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-black fixed w-full z-50 border-b border-zinc-800 dark:bg-opacity-50 backdrop-blur-md"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2  sm:px-6 lg:px-12 ">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <div className="flex-shrink-0 flex items-center cursor-pointer">
                    <img
                      className="block lg:hidden h-10 w-auto"
                      src="logo_short.png"
                      alt="screenshotify"
                    />
                    <span className="hidden lg:flex  justify-center space-x-2 ">
                      <img
                        className=" h-7 "
                        src="logo.png"
                        alt="screenshotify"
                      />
                      {/* <h1 className="text-2xl font-medium  text-center">screenshotify</h1> */}
                    </span>
                  </div>
                </Link>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="px-3 py-2 rounded-md  flex items-center justify-center dark:hover:text-white dark:text-zinc-300 font-medium transition-all duration-300 ">
                        {/* <item.icon className="h-6 mr-2 " /> */}
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <a
                  href="https://app.screenshotify.io"
                  className="flex  rounded-md border border-transparent items-center justify-center text-sm font-medium text-white hover:text-blue-500 transition-colors duration-300"
                >
                  Log in
                </a>
                <a
                  href="https://app.screenshotify.io"
                  className="block  rounded-md border border-transparent px-3 py-1.5  bg-blue-600 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                >
                  Sign up
                </a>
              </div>

              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
