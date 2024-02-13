import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleSubmit }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" relative w-[90%] lg:w-[40%]  flex justify-center items-center"
    >
      <input
        className=" w-full p-3 rounded-2xl outline-none border-none shadow-md"
        placeholder="Enter task"
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className=" absolute right-0 bg-purple-600 m-3 shadow-md px-4 py-1.5 rounded-lg text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default InputField;
