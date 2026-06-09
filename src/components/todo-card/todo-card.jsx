import { useNavigate } from 'react-router-dom';
import styles from './todo-card.module.css';

export const TodoCard = ({ id, index, text }) => {
    const navigate = useNavigate();
    
    const truncateText = (str, maxLength = 50) => {
        if (str.length <= maxLength) {
            return str;
        }
        return str.substring(0, maxLength) + '...';
    };

    const handleClick = () => {
        navigate(`/task/${id}`);
    };

    return (
        <div className={styles['item-todo']} onClick={handleClick}>
            <div className={styles['item-todo__title']}>Задача №{index + 1}</div>
            <p 
                className={styles['item-todo__text']}
                title={text}
            >
                {truncateText(text)}
            </p>
        </div>
    )
}