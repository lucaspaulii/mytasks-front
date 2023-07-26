import { motion } from "framer-motion";
import { useState } from "react";
import tasksApi from "../service/tasksApi";

export default function ConfirmActionModal({ setModal, role, id, triggerUpdate }) {
  const [loading, setLoading] = useState(false);

  function handleClickOutside() {
    setModal(false);
  }

  async function handleAction() {
    setLoading(true);
    if (role == "delete") {
      await tasksApi.remove(id);
    }
    if ((role == "conclude")) {
      await tasksApi.conclude(id);
    }
    setLoading(false);
    setModal(false);
    triggerUpdate();
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[50] bg-slate-950 bg-opacity-80 w-full h-full"
        onClick={handleClickOutside}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.4 }}
      ></motion.div>
      <div className="fixed z-[60] flex flex-col items-center justify-center w-[90%] h-[20%] sm:w-[500px] sm:h-[150px] gap-4 bg-gray-300 rounded-3xl shadow-lg shadow-[#00000040] top-[30%] left-[50%] -ml-[45%] sm:-ml-[250px]">
        <h1 className="text-base">
          Are you sure you want to {role} this Task?
        </h1>
        <button
          className="text-base p-2 rounded-xl bg-teal-500 text-white"
          onClick={handleAction}
        >
          Yes, {role}
        </button>
      </div>
    </>
  );
}
