import { Sidebar } from "ui/src";

export const Home = () => {
  return (
    <div className="flex flex-row w-full">
      <Sidebar/>
      <div className="w-full flex flex-col items-center justify-center bg-light-silver rounded-r-4rem">
        <h1>HOME</h1>
      </div>
    </div>
  );
}