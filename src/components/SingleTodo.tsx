import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  list: Todo;
  lists: Todo[];
  setLists: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ list, lists, setLists }: Props) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState<string>(list.todo);

  const handleDone = (id: number) => {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, isDone: !list.isDone } : list
      )
    );
  };

  const handleDelete = (id: number) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setLists(
      lists.map((list) => (list.id === id ? { ...list, todo: editTodo } : list))
    );

    setEdit(false);
  };

  return (
    <form
      onSubmit={(e) => handleEdit(e, list.id)}
      className="  rounded bg-white shadow-md flex items-center justify-between my-2 p-2 w-full"
    >
      {edit ? (
        <input
          value={editTodo}
          autoFocus={true}
          className=" border capitalize  text-gray-500 p-2"
          type="text"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : list.isDone ? (
        <h1 className=" font-semibold capitalize line-through">{list.todo}</h1>
      ) : (
        <h1 className=" font-semibold capitalize ">{list.todo}</h1>
      )}

      <div className=" flex gap-3">
        <span
          className=" cursor-pointer"
          onClick={() => {
            if (!edit && !list.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>

        <span className=" cursor-pointer" onClick={() => handleDelete(list.id)}>
          <AiFillDelete />
        </span>

        <span className=" cursor-pointer" onClick={() => handleDone(list.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
