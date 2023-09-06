import Head from "next/head";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./Chart/CanvasJSChart"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <title>Index</title>
      <Chart />
    </div>
  );
}
