import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CircleCheckBig } from "lucide-react";

function ToDo({ tasks, deleteTask }) {
  console.log("Tasks:", tasks); // Debugging line

  return (
    <>
      {tasks.length > 0 && (
        <div className="screen mt-7 bg-[#E6E6E6] w-141 flex justify-center items-start overflow-auto">
          <div className="flex flex-col w-full max-w-md space-y-4 mb-5">
            {tasks.map((task) => (
              <div
                className="todo flex justify-between items-center w-full p-4 bg-white rounded-lg"
                key={task.id}>
                <div className="flex items-center space-x-2">
                  <CircleCheckBig />
                  <p className="text-xl">{task.text}</p>{" "}
                  {/* Display task content */}
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => deleteTask(task.id)}>
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
      )}
    </>
  );
}

export default ToDo;
