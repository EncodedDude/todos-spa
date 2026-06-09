import { useState } from "react";
import { Button } from "../button/button";
import styles from "./todo-form.module.css";

export const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        onAdd(text);
        setText("");
    };

    return (
        <div className={styles["create-todo-card"]}>
            <div className={styles["create-todo-card__title"]}>
                Добавить новую задачу
            </div>
            <textarea
                placeholder="Текст задачи"
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <Button
                className={styles["btn-create-todo"]}
                onClick={handleSubmit}
            >
                Добавить задачу
            </Button>
        </div>
    );
};
