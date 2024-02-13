import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  // let name: string;
  // let age: number | string;
  // let isAdmin: boolean;
  // let hobbies: string[];
  // let id: [number, string]; //tuple

  // type Person = {
  //   name: string;
  //   age?: number;
  // };

  // let person: Person = {
  //   name: "atuzie rex",
  //   age: 25,
  // };

  // let people: Person[];

  // interface Governor {
  //   name: string;
  //   age: number;
  // }

  // type X = {
  //   a: string;
  //   b: number;
  // };

  // //joing 2 tyoes
  // type Y = X & {
  //   c: string;
  //   d: number;
  // };

  // let test: Y = {
  //   a: "cat",
  //   b: 10,
  //   c: "apple",
  //   d: 20,
  // };

  // interface Guy extends Governor {
  //   job: string;
  //   yearOfExp: number;
  // }

  // let data: Guy = {
  //   name: "Femi Lazarus",
  //   age: 25,
  //   job: "developer",
  //   yearOfExp: 2,
  // };

  // // let governor: Governor = {
  // //   name: "fubara",
  // //   age: 40,
  // // };

  const [todo, setTodo] = useState<string>("");
  const [lists, setLists] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setLists([...lists, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(lists);

  return (
    <div className=" w-full min-h-screen gap-9 bg-purple-200 flex flex-col  items-center">
      <h2 className="  text-4xl text-center  font-bold mt-8">Todo</h2>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList lists={lists} setLists={setLists} />
    </div>
  );
};

export default App;
