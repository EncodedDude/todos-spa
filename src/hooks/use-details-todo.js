import { useState } from "react";
import { updateTodo, deleteTodoApi } from "../api/todos";
import { getTodoById } from "../api/todos";

export const useDetailsTodo = () => {
    const [todo, setTodo] = useState(null);
    const getTodo = (id) => {
        return getTodoById(id).then((loadedTodo) => {
            setTodo(loadedTodo);
            return loadedTodo;
        });
    };

    const editTodo = (id, newText) => {
        return updateTodo(id, newText).then((updatedTodo) => {
            setTodo(updatedTodo);
        });
    };

    const deleteTodo = (id) => {
        return deleteTodoApi(id);
    };

    return { todo, getTodo, editTodo, deleteTodo };
};
