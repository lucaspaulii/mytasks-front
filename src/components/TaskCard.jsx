import { motion } from "framer-motion";

import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import ConcludeIcon from "./ConcludeIcon";

export default function TaskCard({ task, triggerUpdate }) {
  function handleTimestamp(timestamp) {
    const date = new Date(timestamp);
    return `created at ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }
  return (
    <motion.div
      className={`min-h-[15%] max-h-fit w-[100%] shrink-0  bg-opacity-70 pl-2 pr-2 pt-4 pb-4 gap-1 rounded-lg flex justify-center items-center flex-col relative ${
        task.status == "CONCLUDED" ? "bg-green-300" : "bg-slate-300"
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
    >
      <h1 className="font-bold text-xl mt-4 font-montserrat">{task.title}</h1>
      <h2 className="text-gray-600 text-center text-base leading-4">
        {task.description}
      </h2>
      <p className="text-gray-400 mb-2 text-sm mt-4">
        {handleTimestamp(task.createdAt)}
      </p>
      <div className="w-[20%] h-[35%] absolute top-0 right-0 flex items-center justify-end p-4 gap-2 text-sm sm:text-base">
        <DeleteIcon
          id={task.id}
          color={
            task.status == "CONCLUDED" ? "text-green-700" : "text-gray-500"
          }
          triggerUpdate={triggerUpdate}
        />
        {task.status == "PENDING" && (
          <EditIcon
            id={task.id}
            triggerUpdate={triggerUpdate}
            title={task.title}
            description={task.description}
          />
        )}
      </div>
      <div className="w-[20%] h-[35%] absolute bottom-0 right-0 flex items-center justify-end p-4 gap-2 text-sm sm:text-base">
        <ConcludeIcon
          id={task.id}
          concluded={task.status == "CONCLUDED" ? true : false}
          triggerUpdate={triggerUpdate}
        />
      </div>
    </motion.div>
  );
}
