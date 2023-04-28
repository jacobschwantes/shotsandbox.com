import Head from "next/head";

const logs = [
  {
    id: 1,
    title: "Initial Release",
    date: 1682470548000,
    description:
      "The initial release of ShotSandbox. This includes the ability to create and manage your own projects, and export to a variety of formats.",
  },
];

export default function Example() {
  return (
    <div className="flex-1 flex flex-col h-full min-h-screen">
      <Head>
        <title>Changelog | ShotSandbox</title>
      </Head>
      <div className="bg-sky-50 mt-16">
        <div className=" md:py-32 py-10 flex flex-col justify-center items-center text-center space-y-5 px-4">
          <h1 className="text-black text-4xl lg:text-6xl font-bold">
            Changelog
          </h1>
          <h2 className="text-zinc-700 text-2xl max-w-lg">
            Follow this page to keep updated with the latest platform changes.
          </h2>
        </div>
      </div>
      <ul className="mx-auto max-w-5xl flex flex-col space-y-10 py-24 px-4">
        {logs.map((log) => (
          <li key={log.id} className="md:flex md:space-x-40 space-y-4 md:space-y-0">
            <span className="font-bold text-lg md:text-2xl text-zinc-400 whitespace-pre">
              {new Date(log.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <div className="space-y-5 ">
              <h1 className="font-semibold text-2xl">{log.title}</h1>
              <h2 className="text-zinc-700 text-lg">{log.description}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
