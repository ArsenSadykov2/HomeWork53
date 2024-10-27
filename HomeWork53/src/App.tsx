import './App.css'
import {useState} from "react";
import * as React from "react";
import {ITask} from "./type";
import Task from "./components/Task/Task.tsx";

const App = () => {
    const [inputTask , setInputTask] = useState<string>('');
    const [tasks, setTasks] = useState<ITask[]>([
        {id: '1', title: 'Lets Workout'},
        {id: '2', title: 'Do Homeworks'},
        {id: '3', title: 'Dont forget to walk outside'},
        {id: '4', title: 'Barcelona is the best club of the world!!!'},
    ]);
    const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputTask(event.target.value);
    };
const addTaskArray = () => {
    if(inputTask.trim().length > 0) {
        setTasks([...tasks, {
            id: String(new Date()),
            title: inputTask,
        }]);
    } else {
        alert('Вы ничего не Ввели...');
    }
};

const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
};

  return (
      <>
          <div className="container mx-auto block">
              <div className="flex justify-between items-center w-2/4 my-2">
                  <div>
                      <div
                          className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input value={inputTask} onChange={onChangeInput} type="text" name="username" id="username" autoComplete="username"
                                 className="block flex-1 border-neutral-600 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                 placeholder="Text new task"/>
                      </div>
                  </div>
                  <button
                        onClick={addTaskArray}
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                  </button>
              </div>
              <hr/>
              <div>
                  {tasks.map(task => (
                      <Task title={task.title} key={task.id} deleteTask={() => deleteTask(task.id)}/>
                  ))}
              </div>
          </div>
      </>
  )
};

export default App
