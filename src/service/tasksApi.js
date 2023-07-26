import axios from "axios";

const ApiUrl = import.meta.env.VITE_API_URL;

async function getAll() {
  try {
    const tasks = await axios.get(ApiUrl);
    return tasks.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getById(id) {
  try {
    const task = await axios.get(`${ApiUrl + "/" + id}`);
    return task.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function post(title, description) {
  const postObj = { title, description };

  try {
    await axios.post(ApiUrl, postObj);
  } catch (error) {
    console.log(error);
  }
  return;
}

async function conclude(id) {
  try {
    await axios.put(`${ApiUrl}/conclude/${id}`);
  } catch (error) {
    console.log(error);
  }
  return;
}

async function remove(id) {
  try {
    await axios.delete(`${ApiUrl + "/" + id}`);
  } catch (error) {
    console.log(error);
  }
  return;
}

async function edit(title, description, id) {
  const editObj = { title, description };

  try {
    await axios.put(`${ApiUrl}/edit/${id}`, editObj);
  } catch (error) {
    console.log(error);
  }
  return;
}

const tasksApi = {
  getAll,
  getById,
  post,
  conclude,
  remove,
  edit,
};

export default tasksApi;
