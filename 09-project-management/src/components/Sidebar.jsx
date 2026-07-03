import Button from "./Button";
export default function Sidebar({ onAddProject, projects, onSelectProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-500 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold md:text-xl">Your projects</h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul className="my-2">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button
                className="w-full text-left"
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
