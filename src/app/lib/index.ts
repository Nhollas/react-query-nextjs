import { User } from "@/types";

export async function fetchTodos() {
  const todos = [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false,
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return todos;
}

export async function getUsers(page = 1) {
  console.log("We are in getUsers", page);

  await new Promise((resolve) => setTimeout(resolve, 4000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_start=${
      page ? page * 2 : 0
    }&_limit=2`
  );
  const users = (await res.json()) as User[];
  return users;
}
