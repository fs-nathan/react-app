export default function Task({ task, handleToggle }) {
    return (
        <>
            <li>

                <input type="checkbox" checked={task.isCompleted} onChange={() => handleToggle(task.id)} />
                <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none', color: task.isCompleted }}>{task.title}</span>
            </li>
        </>
    )
}