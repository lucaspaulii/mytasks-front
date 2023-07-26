import { useEffect, useState } from "react";
import CreateIcon from "./CreateIcon";
import TaskCard from "./TaskCard";
import tasksApi from "../service/tasksApi";
import Spinner from "./Spinner";
import SeedIcon from "./SeedIcon";

export default function MainContainer() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const fetchedData = await tasksApi.getAll();
      setTasks(fetchedData);
    }
    fetchData();
    setLoading(false);
  }, [update]);

  function triggerUpdate() {
    setUpdate(!update);
  }

  return (
    <div className="flex flex-col items-center w-[90%] h-[80%] gap-4 p-3 sm:w-[500px] sm:h-[650px] bg-white rounded-3xl shadow-lg shadow-[#00000040]">
      <div className="w-full h-full flex items-center gap-5 justify-start flex-col overflow-y-scroll no-scrollbar relative border-[#00000005] border-2 sm:p-2 rounded-xl">
        {loading ? (
          <Spinner />
        ) : tasks.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p>There are no tasks yet!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} triggerUpdate={triggerUpdate} />
          ))
        )}
      </div>
      <div className="w-full h-[10%] text-5xl flex items-center justify-center relative">
        <CreateIcon triggerUpdate={triggerUpdate} />
        <div className="absolute right-0 bottom-0">
          <SeedIcon triggerUpdate={triggerUpdate}/>
        </div>
      </div>
    </div>
  );
}
