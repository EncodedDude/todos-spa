import { useNavigate } from 'react-router-dom';
import { Button } from '../button/button';
import styles from './not-found.module.css';

export const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className={styles['not-found']}>
            <p className={styles['error-code']}>404</p>
            <h1 className={styles['error-message']}>Страница не найдена</h1>
            <p className={styles['error-description']}>Запрашиваемый адрес не существует</p>
            <Button className={`${styles['home-button']}`} onClick={goHome}>
                Перейти на главную
            </Button>
        </div>
    );
};