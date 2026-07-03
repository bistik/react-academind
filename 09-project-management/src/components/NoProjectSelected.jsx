import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="mt-24 text-center">
      <img
        src={noProjectImg}
        alt="No Project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl text-stone-500 my-4">No Project selected</h2>
      <p>Select a project or start a new one</p>
      <p>
        <Button onClick={onAddProject}>Create a new project</Button>
      </p>
    </div>
  );
}
