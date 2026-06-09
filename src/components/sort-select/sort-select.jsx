import styles from "./sort-select.module.css";

export const SortSelect = ({ value, onChange }) => 
    <div className={styles["select-holder"]}>
        <select value={value} onChange={onChange}>
            <option value="">По умолчанию</option>
            <option value="asc">По возрастанию (А→Я)</option>
            <option value="desc">По убыванию (Я→А)</option>
        </select>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
        >
            <path fill="#2d2d2d" d="m7 10l5 5l5-5z" />
        </svg>
    </div>;
