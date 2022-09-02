/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Tabs } from "@components/index";
const tiers = [
  {
    name: "Free",
    href: "#",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Get started for free. Limited API and editor access to try out.",
    includedFeatures: [
      "100 request quota per month",
      "Access to limited editor features.",
    ],
  },
  {
    name: "Pro",
    href: "#",
    priceMonthly: 8,
    priceYearly: 50,
    description: "All the basics for new developers and small business owners.",
    includedFeatures: [
      "1000 quota per month.",
      "Full access to the editor.",
      "Custom presets and templates.",
    ],
  },
  {
    name: "Pro+",
    href: "#",
    priceMonthly: 15,
    priceYearly: 80,
    description: "Extended features for experienced developers and business owners.",
    includedFeatures: [
      "Everything in Pro",
      "Priority support.",
      "First access to new features.",
      "Server rendered mockup API access.",
    ],
  },
];

export default function Example() {
  const [selected, setSelected] = useState("yearly billing");
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto py-36 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-bold text-gray-900 sm:text-center dark:text-zinc-50">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center dark:text-zinc-400">
            Start creating for free, then upgrade to unlock full potential. Account
            plans unlock additional features.
          </p>
        </div>
        <div className="max-w-xl mx-auto w-full">
          <Tabs
            selected={selected}
            setSelected={setSelected}
            tabs={["yearly billing", "monthly billing"]}
          />
        </div>
        <div className="space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-gray-200 dark:border-zinc-800 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-zinc-800"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-zinc-100">
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500 dark:text-zinc-400">
                  {tier.description}
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-bold dark:text-zinc-100 text-gray-900">
                    ${selected === 'monthly billing' ? tier.priceMonthly : tier.priceYearly}
                  </span>{" "}
                  <span className="text-base font-medium text-gray-500">
                    /{selected === 'monthly billing' ? 'mo' : 'yr'}
                  </span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-blue-600 border border-zinc-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
                >
                  Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What&apos;s included
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500 dark:text-zinc-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
