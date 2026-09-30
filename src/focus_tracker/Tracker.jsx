import AddTaskForm from "./AddTaskForm";
import Tasklist from "./Tasklist";
import { useCallback, useEffect, useState } from "react";

const TASKS = [
    { id: 1, title: "Làm bài tập Custom Hook", category: "React", priority: "High", duration: 45, isCompleted: false },
    { id: 2, title: "Đọc tài liệu React.memo & referential equality", category: "React", priority: "Medium", duration: 30, isCompleted: true },
    { id: 3, title: "Thiết kế REST API cho User Service", category: "Backend", priority: "High", duration: 60, isCompleted: false },
    { id: 4, title: "Ôn tập kiến thức Event Loop & Closure", category: "JavaScript", priority: "Low", duration: 25, isCompleted: true },
    { id: 5, title: "Tối ưu database index & query slow log", category: "Backend", priority: "Medium", duration: 50, isCompleted: false },
    { id: 6, title: "Setup Docker container cho Next.js app", category: "DevOps", priority: "High", duration: 40, isCompleted: false },
    { id: 7, title: "Fix lỗi CSS responsive layout trên Mobile", category: "CSS", priority: "Low", duration: 20, isCompleted: true },
    { id: 8, title: "Viết Unit Test với Jest và React Testing Library", category: "React", priority: "Medium", duration: 50, isCompleted: false },
];
export default function Tracker() {
    const [tasks, setTasks] = useState(TASKS)
    const [search, setSearch] = useState('')
    const handleToggle = (id) => {
        setTasks(prev => prev.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task;
        }))
    }
    const handleAddTask = (newTask) => {
        setTasks((prev) => [newTask, ...prev])
    }
    const handleSeach = useCallback((e) => {
        setSearch(e.target.value)
    }, [])
    useEffect(() => {
        let taskfilter = [...TASKS];
        if (search) {
            taskfilter = taskfilter.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
        }
        setTasks(taskfilter)
    }, [search])
    return (
        <>
            <Tasklist tasks={tasks} handleToggle={handleToggle} />
            <input type="text" value={search} onChange={handleSeach} />
            <AddTaskForm onAddTask={handleAddTask} />
        </>
    );
}