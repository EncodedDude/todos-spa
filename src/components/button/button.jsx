import styles from "./button.module.css";

export const Button = ({ children, onClick, className = "", ...props }) => (
    <button
        className={`${styles.btn} ${className}`}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);
