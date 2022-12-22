import Head from "next/head";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col mx-auto max-w-3xl h-screen bg-slate-50">
      {children}
      </div>
    </>
  );
}
