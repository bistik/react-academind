import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onProjectSave, onProjectCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    const newProject = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onProjectSave(newProject);
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="px-2 py-2 text-base md:text-xl">Invalid input</h2>
        <p>Please make sure all the fields are not empty</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="px-3 py-2" onClick={onProjectCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-3 py-2 bg-stone-800 hover:bg-stone-950 text-stone-200 hover:text-stone-50"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
