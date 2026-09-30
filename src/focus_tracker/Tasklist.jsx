import Task from "./Task";

export default function Tasklist({ tasks, handleToggle }) {
    return (
        <>
            {tasks.map((task) =>
                <Task key={task.id}
                    task={task}
                    handleToggle={handleToggle}
                />
            )}
        </>
    )
}