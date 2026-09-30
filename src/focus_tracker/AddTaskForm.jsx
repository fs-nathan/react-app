import { useCallback, useState } from "react"

export default function AddTaskForm({ onAddTask }) {
    // tao gia tri luu bien o nhap
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('React');
    const [priority, setPriority] = useState('Medium')
    const [duration, setDuration] = useState('');
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (title.trim() === '' || duration.trim() === '') {
            alert('Vui long nhap tieu de')
            return;
        }
        const newTask = {
            id: Date.now(),
            title: title,
            category: category,
            priority: priority,
            duration: Number(duration),
            isCompleted: false
        }
        onAddTask(newTask);
        setTitle('');
        setDuration('')
    }, [title, duration, category, priority])
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="React">React</option>
                    <option value="Backend">Backend</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Css">Css</option>
                </select>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}