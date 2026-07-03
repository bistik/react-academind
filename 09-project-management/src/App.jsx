import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

const INIT_PROJECT_STATE = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

function getProjectById(projects, id) {
  for (const project of projects) {
    if (project.id == id) {
      return project;
    }
  }
  return null;
}

function App() {
  const [projectState, setProjectState] = useState(INIT_PROJECT_STATE);

  function handlerAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handlerSaveProject(newProject) {
    const savedProject = {
      ...newProject,
      id: Math.floor(Math.random() * 1000000),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, savedProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handlerSelectProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  function handleAddTask(task) {
    setProjectState((prevState) => {
      const savedTask = {
        text: task,
        projectId: prevState.selectedProjectId,
        id: Math.floor(Math.random() * 1000000),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, savedTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handlerAddProject}
        onSelectProject={handlerSelectProject}
        projects={projectState.projects}
      />
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handlerAddProject} />
      )}
      {projectState.selectedProjectId === null && (
        <NewProject
          onProjectSave={handlerSaveProject}
          onProjectCancel={handleCancelAddProject}
        />
      )}
      {projectState.selectedProjectId && (
        <SelectedProject
          project={getProjectById(
            projectState.projects,
            projectState.selectedProjectId,
          )}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          tasks={projectState.tasks}
        />
      )}
    </main>
  );
}

export default App;
