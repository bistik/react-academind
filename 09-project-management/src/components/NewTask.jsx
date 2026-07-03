import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAdd() {
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm border-2 border-stone-500"
        type="text"
        value={enteredTask}
        onChange={handleChange}
      />
      <Button onClick={handleAdd}>Add task</Button>
    </div>
  );
}
