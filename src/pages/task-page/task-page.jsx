import { useEffect, useState } from "react";
import { useDetailsTodo } from "../../hooks/use-details-todo";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./task-page.module.css";

export const TaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { todo, getTodo, editTodo, deleteTodo } = useDetailsTodo();

    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState("");

    useEffect(() => {
        setIsLoading(true);
        getTodo(id)
            .then((loadedTodo) => {
                setEditText(loadedTodo.text);
                setIsLoading(false);
            })
            .catch(() => navigate("/404", { replace: true }));
    }, [id]);

    if (isLoading) {
        return <h2 className={styles.loading}>Загрузка задачи...</h2>;
    }

    if (!todo) {
        return <h2 className={styles.notFound}>Задача не найдена</h2>;
    }

    const handleSave = () => {
        editTodo(todo.id, editText)
            .then(() => {
                setIsEditing(false);
            })
            .catch((error) => {
                alert("Не удалось сохранить изменения");
                console.error(error);
            });
    };

    // const handleSave = async () => {
    //     try {
    //         await editTodo(todo.id, editText);
    //         setIsEditing(false);
    //     } catch (error) {
    //         alert('Не удалось сохранить изменения');
    //         console.error(error);
    //     }
    // }

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleDelete = () => {
        if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
            deleteTodo(todo.id)
                .then(() => navigate("/"))
                .catch((error) => {
                    alert("Ошибка при удалении задачи");
                    console.error(error);
                });
        }
    };

    // const handleDelete = async () => {
    //     if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
    //         await deleteTodo(todo.id);
    //         navigate("/");
    //     }
    // };

    return (
        <div className={styles["task-page"]}>
            <div className={styles["task-header"]}>
                <button className={styles["back-button"]} onClick={handleBack}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#2d2d2d"
                            d="M12 20l-8-8l8-8l1.425 1.4l-6.575 6.6H20v2H6.85l6.575 6.6z"
                        />
                    </svg>
                </button>
                <h1 className={styles["task-title"]}>Задача</h1>
            </div>

            <div className={styles["task-content"]}>
                {isEditing ? (
                    <div>
                        <textarea
                            className={styles["edit-textarea"]}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            autoFocus
                        />
                    </div>
                ) : (
                    <p className={styles["task-text"]}>{todo.text}</p>
                )}
            </div>

            <div className={styles["task-actions"]}>
                {isEditing ? (
                    <>
                        <button
                            className={styles["save-button"]}
                            onClick={handleSave}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#2d2d2d"
                                    d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                                />
                            </svg>
                        </button>
                        <button
                            className={styles["cancel-button"]}
                            onClick={handleCancel}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="#2d2d2d"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                />
                            </svg>
                        </button>
                    </>
                ) : (
                    <button
                        className={styles["edit-button"]}
                        onClick={() => setIsEditing(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#2d2d2d"
                                d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
                            />
                        </svg>
                    </button>
                )}

                <button
                    className={styles["delete-button"]}
                    onClick={handleDelete}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#2d2d2d"
                            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
