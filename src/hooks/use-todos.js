import { useState, useEffect } from "react";
import {
    fetchTodos,
    createTodo,
} from "../api/todos";

export const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchTodos()
            .then(setTodos)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    const addTodo = (text) => {
        if (!text.trim()) {
            alert("Текст задачи не должен быть пустым");
            return;
        }

        createTodo(text)
            .then((newTodo) => setTodos((prev) => [...prev, newTodo]))
            .catch(console.error);
    };



    return { todos, isLoading, addTodo }
};
