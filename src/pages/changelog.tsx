import Image from "next/image";

const logs = [
  // {
  //   title: "Template Release",
  //   date: 1672624509000,
  //   description:
  //     "Initial Boost multipurpose Framer template release. Combine sections from a range of categories to easily assemble pages that meet the needs of your growing business.",
  // },
];

export default function Example() {
  return (
    <div className="flex-1 flex flex-col h-full min-h-screen">
      <div className="bg-sky-50 mt-16">
        <div className=" py-32 flex flex-col justify-center items-center text-center space-y-5">
          <h1 className="text-black text-4xl lg:text-6xl font-bold">
            Changelog
          </h1>
          <h2 className="text-zinc-700 text-2xl max-w-lg">
            Follow this page to keep updated with the latest platform changes.
          </h2>
        </div>
      </div>
      <ul className="mx-auto max-w-5xl py-24">
        {logs.map((log) => (
          <li className="flex space-x-40">
            <span className="font-bold text-2xl text-zinc-400 whitespace-pre">
              {new Date(log.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <div className="space-y-5">
              <h1 className="font-semibold text-2xl">{log.title}</h1>
              <h2 className="text-zinc-700 text-lg">{log.description}</h2>
              <div className="relative aspect-video">

             
              <Image className="absolute w-full h-full rounded-2xl" layout="fill" src="/dashboard_preview.png" /> </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
