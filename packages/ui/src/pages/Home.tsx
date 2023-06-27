import { Sidebar } from "ui/src";
import { UserTable } from "../components/Tables/UserTable";

export const Home = () => {
  return (
    <div className="flex flex-row w-full">
      <Sidebar/>
      <div className="w-full flex flex-col items-center justify-center bg-light-silver rounded-r-4rem">
        <UserTable/>
      </div>
    </div>
  );
}