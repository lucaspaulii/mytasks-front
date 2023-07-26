import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import tasksApi from "../service/tasksApi";

export default function Modal({ setModal, role, id, triggerUpdate, existingTitle, existingDescription }) {
  const [title, setTitle] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  function handleClickOutside() {
    setModal(false);
  }

  useEffect(() => {
    if (role == "edit") {
      setTitle(existingTitle);
      setDescription(existingDescription);
    }
  }, [])

  async function handleSubmit() {
    if (role == "create") {
      console.log("here");
      await tasksApi.post(title, description);
    }
    if (role == "edit") {
      await tasksApi.edit(title, description, id);
    }
    triggerUpdate();
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[50] bg-slate-950 bg-opacity-80 w-screen h-full"
        onClick={handleClickOutside}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.4 }}
      ></motion.div>
      <div className="fixed z-[60] flex flex-col items-center justify-center w-[95%] h-[40%]  sm:w-[550px] sm:h-[350px] bg-gray-300 rounded-3xl shadow-lg shadow-[#00000040] top-[30%] left-[50%] -ml-[47.5%] sm:-ml-[275px]">
        <h1 className="font-bold text-2xl mb-2 mt-2">
          {role == "create" ? "Create Task" : role == "edit" ? "Edit Task" : ""}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-[90%] h-[80%] flex flex-col items-center justify-between"
        >
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            className="w-full text-base h-[20%] pl-3 rounded-lg"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            id="description"
            value={description}
            rows={3}
            name="description"
            className="w-full text-base h-[45%] pl-3 pt-2 rounded-lg resize-none"
            placeholder="Desciption"
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-lg p-2 rounded-xl bg-teal-500 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
