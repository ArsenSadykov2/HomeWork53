import * as React from "react";

interface Props {
    title: string;
    deleteTask: (id: number) => void;
}

const Task: React.FC<Props> = ({title, deleteTask}) => {
    return (
        <div className="p-2 flex justify-between items-center my-5 border border-b-cyan-400">
            <h4>{title}</h4>
            <div>
                <button type="button" onClick={deleteTask}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Task;