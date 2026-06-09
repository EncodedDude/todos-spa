import { useState, useEffect } from "react";
import {
    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodoApi,
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

    const editTodo = (id, newText) => {
        updateTodo(id, newText)
            .then((updatedTodo) => {
                setTodos((prev) =>
                    prev.map((todo) =>
                        todo.id === updatedTodo.id ? updatedTodo : todo,
                    ),
                );
            })
            .catch(console.error);
    };

    const deleteTodo = (id) => {
        deleteTodoApi(id)
            .then(() =>
                setTodos((prev) => prev.filter((todo) => todo.id !== id))
            )
            .catch(console.error);
    };

    return { todos, isLoading, addTodo, editTodo, deleteTodo }
};
