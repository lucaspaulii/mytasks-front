import tasksApi from "../service/tasksApi";
import { Tasks } from "./test";

export default async function seedDb(triggerUpdate) {
  Tasks.forEach(async (Task) => {
    await tasksApi.post(Task.title, Task.description);
  });
  triggerUpdate();
}
