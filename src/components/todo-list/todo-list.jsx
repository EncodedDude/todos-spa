import { TodoCard } from "../todo-card/todo-card";
import styles from "./todo-list.module.css";

export const TodoList = ({ todos, isLoading }) => {
    if (isLoading) return <h2 className="title">Загрузка задач...</h2>;
    if (!todos.length) return <h2 className="title">Задач нет</h2>;

    return (
        <div className={styles["todos-items"]}>
            {todos.map((todo, index) => (
                <TodoCard
                    key={todo.id}
                    id={todo.id}
                    index={index}
                    text={todo.text}
                />
            ))}
        </div>
    );
};