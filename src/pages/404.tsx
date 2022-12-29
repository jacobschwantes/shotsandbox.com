/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Example() {
  return (
    <div className="flex-1 flex flex-col h-full min-h-screen">
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className=" my-auto py-16 sm:py-32 flex flex-col items-center space-y-4">
          <p className="text-9xl font-bold  uppercase tracking-wide text-blue-600">
            404
          </p>
          <h1 className="text-6xl font-bold text-gray-900 tracking-tight ">
            Page not found.
          </h1>
          <p className=" text-lg text-zinc-600 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="">
            <Link href="/">
              <a className="inline-flex w-full justify-center items-center rounded-lg border border-transparent bg-blue-600  px-4 py-3 font-medium text-lg text-white shadow-sm hover:bg-blue-700 focus:outline-2 focus:outline outline-offset-2 focus:outline-blue-500 transition-colors duration-300">
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
