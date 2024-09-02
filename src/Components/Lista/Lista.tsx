import React, { useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { StyledInput, StyledList, StyledTaskList, StyledTodoContainer } from './Lista.style';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export const Lista: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim()) {
            const newTaskObject = {
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                text: newTask,
                completed: false,
            };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (id: number) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <StyledTodoContainer>
            <StyledList>
                <StyledInput
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Digite o item desejado..."
                />
                <div onClick={addTask} style={{ cursor: 'pointer' }}>
                    <BsPlusCircle size="2rem" color="#38aede" />
                </div>
            </StyledList>

            <StyledTaskList>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </label>
                    </li>
                ))}
            </StyledTaskList>
        </StyledTodoContainer>
    );
};
