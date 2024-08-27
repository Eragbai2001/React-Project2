import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CircleCheckBig } from "lucide-react";
import { TaskContext } from "../Context/TaskContext";

function ToDo2() {
  const { deletedTasks, permanentlyDeleteTask } = useContext(TaskContext); // Assuming you have this function in context

  return (
    <>
      {deletedTasks.length > 0 ? (
        <div className="screen mt-7 bg-[#E6E6E6] w-141 flex justify-center items-start overflow-auto">
          <div className="flex flex-col w-full max-w-md space-y-4 mb-5">
            {deletedTasks.map((task) => (
              <div
                className="todo flex justify-between items-center w-full p-4 bg-white rounded-lg"
                key={task.id}>
                <div className="flex items-center space-x-2">
                  <CircleCheckBig />
                  <p className="text-lg ml-10">{task.text}</p>{" "}
                  {/* Display deleted task */}
                </div>
                <div className="flex space-x-2">
                  {/* Trash button for permanent delete */}
                  <button onClick={() => permanentlyDeleteTask(task.id)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-red-600 text-xl"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-lg ml-10 mt-5">No tasks in history</p>
      )}
    </>
  );
}

export default ToDo2;
