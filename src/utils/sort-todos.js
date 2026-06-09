export const sortTodosByText = (todos, order) => {
    if (order === "") return todos;
    const copy = [...todos];
    const compare = (a, b) => a.text.localeCompare(b.text);
    return order === "asc" ? copy.sort(compare) : copy.sort(compare).reverse();
}