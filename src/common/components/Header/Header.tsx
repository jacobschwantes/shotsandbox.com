/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BookOpenIcon,
  CpuChipIcon,
  CreditCardIcon,
  ArrowDownTrayIcon,
  Bars3Icon,
  PencilIcon,
  XMarkIcon,
  RectangleGroupIcon,
  LightBulbIcon,
  DocumentIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const navigation = [
  { name: "Features", href: "/#features", icon: RectangleGroupIcon },
  { name: "Pricing", href: "/#pricing", icon: CreditCardIcon },
  { name: "Examples", href: "/#examples", icon: LightBulbIcon },
  // { name: "Blog", href: "/blog", icon: QueueListIcon },
  { name: "Changelog", href: "/changelog", icon: DocumentIcon },
];
import { staggerContainer, slideUpSlow, staggerContainerSlow, fadeIn } from "@utils/variants";
import Link from "next/link";

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-white fixed w-full z-50 border-b border-zinc-100  "
    >
      {({ open }) => (
        <>
          <div className="max-w-[1440px] mx-auto px-2  sm:px-6 lg:px-12 ">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center justify-between ">
                <Link href="/">
                  <div className="flex-shrink-0 flex items-center cursor-pointer p-2">
                    {/* <img
                      className="hidden dark:block lg:hidden h-7 w-auto"
                      src="logo_short.png"
                      alt="screenshotify"
                    />
                    <span className="hidden dark:lg:flex  justify-center space-x-2 ">
                      <img
                        className=" h-7 "
                        src="logo.png"
                        alt="screenshotify"
                      />
                     
                    </span> */}
                    <img
                      className="hidden h-9 w-auto"
                      src="logo_short_light.png"
                      alt="screenshotify"
                    />
                    <span className="flex  justify-center space-x-2  ">
                      <img
                        className=" h-7 "
                        src="logo_light.png"
                        alt="screenshotify"
                      />
                      {/* <h1 className="text-2xl font-medium  text-center">screenshotify</h1> */}
                    </span>
                  </div>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="px-3 py-2 rounded-md  flex items-center justify-center dark:hover:text-blue-600 dark:text-zinc-700 text-zinc-900 hover:text-blue-600 font-medium transition-all duration-300 ">
                        {/* <item.icon className="h-6 mr-2 " /> */}
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex space-x-5 items-center">
                <a
                  href="https://app.screenshotify.io"
                  className="flex  rounded-md border border-transparent items-center justify-center  font-medium text-blue-600  hover:text-blue-500 transition-all duration-300"
                >
                  Log in
                </a>
                <a
                  href="https://app.screenshotify.io"
                  className="inline-flex items-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                >
                  Sign up
                </a>
              </div>

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden border-t border-zinc-100">
            <motion.div
              initial={"hidden"}
              viewport={{ once: true }}
              whileInView={"visible"}
              //@ts-ignore
              variants={staggerContainerSlow}
              className="px-2  space-y-2 py-5"
            >
              {navigation.map((item) => (
                <motion.div variants={slideUpSlow} key={item.name}>
                  <Disclosure.Button
                    as="a"
                    href={item.href}
                    className="flex px-3 py-3 text-xl font-medium hover:bg-zinc-100 duration-300 transition-all  bg-opacity-30 text-zinc-700 items-center rounded-lg"
                  >
                    <item.icon className="h-8 mr-3 text-blue-600" />
                    {item.name}
                  </Disclosure.Button>
                </motion.div>
              ))}
              <motion.div variants={fadeIn} className="w-full flex pt-3 space-x-3 px-2">
                <Disclosure.Button
                  as="a"
                  href="https://app.screenshotify.io"
                  className=" w-full inline-flex items-center justify-center rounded-lg border  bg-white px-6 py-3 text-lg font-medium text-blue-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Log in
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="https://app.screenshotify.io"
                  className="w-full inline-flex items-center justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign up
                </Disclosure.Button>
              </motion.div>
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
