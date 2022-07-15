import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'
import Announcement from "@components/Announcement";

const features = [
  {
    name: 'Push to Deploy',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CloudUploadIcon,
  },
  {
    name: 'SSL Certificates',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple Queues',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: RefreshIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: CogIcon,
  },
  {
    name: 'Database Backups',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]
const Home: NextPage = () => {
  return (
    <div className="">
     {/* <div className="grid-effect min-h-[300px] px-4 md:p-5 h-full border border-gray-100 rounded-xl overflow-hidden flex items-center justify-center">

     </div> */}
      <div className="bg-white pb-8 sm:pb-12 lg:pb-12 grid-effect">
        <div className="overflow-hidden lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="">
                <div>
                  <a href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600 tracking-wide uppercase">
                      What's new
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-blue-600 space-x-1">
                      <span>Just shipped version 0.1.0</span>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Server management for growing teams
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>
                <form
                  action="#"
                  className="mt-12 sm:max-w-lg sm:w-full sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-600 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-gray-300">
                    <div className="flex-shrink-0 flex pr-5">
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-5 w-5 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                      <span className="font-medium text-gray-900">
                        Rated 5 stars
                      </span>{" "}
                      by over{" "}
                      <span className="font-medium text-blue-600">
                        500 beta users
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://res.cloudinary.com/dxgbphyhg/image/upload/v1656898812/tupbjwxcmrfnbsjt7isf.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">Serverless</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            No server? No problem.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">Deploy faster</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-black p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
