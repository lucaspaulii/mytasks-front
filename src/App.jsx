import MainContainer from "./components/MainContainer";
import { BiTask } from "react-icons/bi";

export default function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-bl from-green-400 to-blue-300 flex justify-center items-center flex-col gap-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-4xl font-extrabold font-montserrat">MyTasks</h1>
        <BiTask className="text-4xl"/>
      </div>

      <MainContainer />
    </div>
  );
}
