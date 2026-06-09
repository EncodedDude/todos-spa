import { Button } from "../button/button";
import styles from "./search-bar.module.css";

export const SearchBar = ({
    value,
    onChange,
    onSearch,
    isSearching,
    onCancel,
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(value);
    };

    return (
        <form className={styles["form-search"]} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Введите фразу"
                className={styles.input}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            <Button type="submit">Найти</Button>
            {isSearching && <Button onClick={onCancel}>Отменить</Button>}
        </form>
    );
};
