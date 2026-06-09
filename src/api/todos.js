const URL = "http://localhost:4000/todos"; // Изменили порт на 4000

export const fetchTodos = () =>
    fetch(URL).then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка загрузки задач");
        }
        return response.json();
    });

export const createTodo = (text) =>
    fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    }).then((response) => {
        if (!response.ok) throw new Error("Ошибка добавления задачи");
        return response.json();
    });

export const updateTodo = (id, text) =>
    fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }), // Убрали id из тела, так как он уже в URL
    }).then((response) => {
        if (!response.ok) throw new Error("Ошибка редактирования задачи");
        return response.json();
    });

export const deleteTodoApi = (id) =>
    fetch(`${URL}/${id}`, {
        method: "DELETE",
    }).then((response) => {
        if (!response.ok) throw new Error("Ошибка удаления задачи");
    });