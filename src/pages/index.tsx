import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChartBarIcon, LightningBoltIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/solid";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import Announcement from "@components/Announcement";

const features = [
  {
    name: "Cloud Storage",
    description:
      "Screenshots are stored in the cloud securly with Google Cloud Storage for 30 days.",
    icon: CloudUploadIcon,
  },
  {
    name: "SSL Certificates",
    description:
      "API, Cloud Storage, and the App, all secure using SSL.",
    icon: LockClosedIcon,
  },
  {
    name: "High Availability",
    description:
      "We leverage horizontal scaling with Google Cloud Platform to provide high relability even during peak hours.",
    icon: RefreshIcon,
  },
  {
    name: "API Keys",
    description:
      "API keys offer fine grained control. All keys can be locked, rate limited, and revoked from the dashboard.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Lightning Fast API",
    description:
      "We leverage caching to provide sub-second response times to API requests.",
    icon: LightningBoltIcon,
  },
  {
    name: "Usage Analytics",
    description:
      "View usage stats and charts and keep track of quota from the dashboard.",
    icon: ChartBarIcon,
  },
];
const Home: NextPage = () => {
  return (
    <div className=" space-y-20 bg-black">
      {/* <div className="grid-effect min-h-[300px] px-4 md:p-5 h-full border border-gray-100 rounded-xl overflow-hidden flex items-center justify-center">

     </div> */}
      <div className="bg-white dark:bg-black pb-8 sm:pb-12 lg:pb-12 pt-20">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div></div>
              <div className="mt-20 space-y-5">
                {/* <div>
                  <a href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-blue-50 px-2.5 py-1 text-sm font-semibold text-blue-500">
                      What's new
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-blue-500 space-x-1">
                      <span>Just shipped version 0.1.0</span>
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </a>
                </div> */}
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl dark:text-zinc-50">
                    Stunning marketing images in{" "}
                    <span className="text-blue-500">seconds</span>
                  </h1>
                  <p className="mt-6 text-xl text-gray-500 dark:text-zinc-400">
                    Creating stunning promotional and marketing graphics for
                    social media posts.
                  </p>
                </div>
                {/* <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      className="pr-10 pl-4 py-4 w-full font-medium rounded-lg focus:outline-none bg-black text-gray-400 border-zinc-800 border focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-4 bg-blue-500 text-base font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form> */}
                {/* <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-gray-300 dark:divide-zinc-800">
                    <div className="flex-shrink-0 flex pr-5">
                      <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                      <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                      <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                      <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                      <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3 dark:text-zinc-300">
                      <span className="font-medium text-gray-900 dark:text-zinc-100">Rated 5 stars</span> by over{' '}
                      <span className="font-medium text-blue-500">500 beta users</span>
                    </div>
                  </div>
                </div> */}
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="mailto:contact@screenshotify.io"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Request Access
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

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 dark:bg-zinc-900 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
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
                        className="text-gray-200 dark:text-zinc-800"
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
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none  z-10"
                  src="editor_preview.png"
                  alt=""
                />
                {/* <div className="absolute z-0 bg-gradient-to-r from-blue-400 to-blue-800 h-full w-full inset-0 ml-12 blur-3xl opacity-50">

                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 dark:bg-zinc-900 dark:bg-opacity-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-500 uppercase">
              Dashboard
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-zinc-50 sm:text-4xl">
              One place to manage it all.
            </p>
            <p className="mt-5 max-w-pblue mx-auto text-xl text-gray-500 dark:text-zinc-400">
             View your usage stats, generate access keys, view history logs, and access the editor - all from one powerful dashboard.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80 ">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="dashboard_preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative bg-white dark:bg-black py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-zinc-50">
            Everything you need to deploy your app
          </p>
          <p className="mx-auto mt-5 max-w-pblue text-xl text-gray-500 dark:text-zinc-400">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 dark:bg-zinc-900 dark:bg-opacity-70 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-black dark:bg-blue-900 dark:bg-opacity-75 p-3 shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-zinc-200">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-zinc-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-zinc-900 dark:bg-opacity-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold text-gray-900  dark:text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-blue-600">Start using for free.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://app.screenshotify.io"
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
