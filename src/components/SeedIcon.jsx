import { FaSeedling } from "react-icons/fa";
import seedDb from "../assets/seedDb";

export default function SeedIcon({ triggerUpdate }) {
  return (
    <div
      className="flex justify-center items-center flex-col gap-1 hover:cursor-pointer p-1"
      onClick={() => seedDb(triggerUpdate)}
    >
      <FaSeedling className="text-gray-400 text-[1.7rem] hover:scale-110 hover:text-green-500 transition-all duration-400" />
      <p className=" text-[0.9rem]">Seed</p>
    </div>
  );
}
