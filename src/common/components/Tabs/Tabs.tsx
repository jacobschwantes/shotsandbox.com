import { NextPageContext, NextComponentType } from "next";
import clsx from "clsx";
interface TabsProps {
  selected: string;
  setSelected: (id: any) => void;
  tabs: string[];
  children?: React.ReactNode;
}
const Tabs: NextComponentType<NextPageContext, {}, TabsProps> = ({
  tabs,
  children,
  selected,
  setSelected,
}) => (
  <div>
    <div className="flex space-x-2 rounded-xl bg-gray-100  p-1 max-w-4xl ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={clsx(
            "flex w-full items-center justify-center rounded-lg py-2.5 text-center text-sm font-medium capitalize leading-5 transition-all duration-300 select-none outline-none",
            "ring-sky-600  ring-offset-2 ring-offset-white focus:outline-none focus:ring-2",
            tab === selected
              ? "bg-white text-sky-700  shadow   "
              : "text-gray-700 hover:text-gray-600 "
          )}
        >
          <h1 className="">{tab}</h1>
        </button>
      ))}
    </div>
    {children}
  </div>
);
export default Tabs;
