import { useState } from "react";
import { useTodos } from "../../hooks/use-todos";
import { useSearch } from "../../hooks/use-search";
import { sortTodosByText } from "../../utils/sort-todos";
import { TodoForm } from "../../components/todo-form/todo-form";
import { SearchBar } from "../../components/search-bar/search-bar";
import { SortSelect } from "../../components/sort-select/sort-select";
import { TodoList } from "../../components/todo-list/todo-list";
import styles from './tasks-list-page.module.css';

export const TasksListPage = () => {
    const { todos, isLoading, addTodo } = useTodos();
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
        <>
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

            {
                showResultText && (
                    <h2 className={styles.title}>
                        Результаты поиска по запросу: {searchQuery}
                    </h2>
                )
            }

            <TodoList
                todos={sortedTodos}
                isLoading={isLoading}
            />

            {!isSearching && <TodoForm onAdd={addTodo} />}
        </>
    );
}