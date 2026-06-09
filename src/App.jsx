import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTodos } from "./hooks/use-todos";
import { useSearch } from "./hooks/use-search";
import { sortTodosByText } from "./utils/sort-todos";
import { TodoForm } from "./components/todo-form/todo-form";
import { SearchBar } from "./components/search-bar/search-bar";
import { SortSelect } from "./components/sort-select/sort-select";
import { TodoList } from "./components/todo-list/todo-list";
import { TaskPage } from "./components/task-page/task-page";
import { NotFound } from "./components/not-found/not-found";
import styles from "./app.module.css";

function AppContent() {
    const { todos, isLoading, addTodo, editTodo, deleteTodo } = useTodos();
    const {
        searchValue,
        setSearchValue,
        searchQuery,
        isSearching,
        performSearch,
        cancelSearch,
    } = useSearch();
    const [sortOrder, setSortOrder] = useState("");

    let displayedTodos = todos;
    if (isSearching && searchQuery) {
        displayedTodos = todos.filter((todo) =>
            todo.text.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }

    const sortedTodos = sortTodosByText(displayedTodos, sortOrder);
    const showResultText =
        isSearching && searchQuery && displayedTodos.length > 0;

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <>
                        <div className="container">
                            <section className={styles["todos-app"]}>
                                <h1 className={styles.title}>Todos application</h1>

                                <div className={styles["todos-bar"]}>
                                    <SearchBar
                                        value={searchValue}
                                        onChange={setSearchValue}
                                        onSearch={performSearch}
                                        isSearching={isSearching}
                                        onCancel={cancelSearch}
                                    />
                                    <SortSelect
                                        value={sortOrder}
                                        onChange={(event) =>
                                            setSortOrder(event.target.value)
                                        }
                                    />
                                </div>

                                {showResultText && (
                                    <h2 className={styles.title}>
                                        Результаты поиска по запросу: {searchQuery}
                                    </h2>
                                )}

                                <TodoList
                                    todos={sortedTodos}
                                    isLoading={isLoading}
                                />

                                {!isSearching && <TodoForm onAdd={addTodo} />}
                            </section>
                        </div>
                    </>
                } 
            />
            <Route 
                path="/task/:id" 
                element={
                    <TaskPage 
                        todos={todos} 
                        isLoading={isLoading} 
                        onEdit={editTodo} 
                        onDelete={deleteTodo} 
                    /> 
                } 
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;