import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  lists: Todo[];
  setLists: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ lists, setLists }: Props) => {
  return (
    <div className="  grid grid-cols-1  w-[90%] mx-auto gap-4 lg:grid-cols-4   ">
      {lists.map((list) => (
        <SingleTodo
          list={list}
          key={list.id}
          lists={lists}
          setLists={setLists}
        />
      ))}
    </div>
  );
};

export default TodoList;
