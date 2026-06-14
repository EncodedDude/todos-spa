import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button/button';
import styles from './not-found-page.module.css';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className={styles['not-found']}>
            <p className={styles['error-code']}>404</p>
            <p className={styles['error-message']}>Страница не найдена</p>
            <p className={styles['error-description']}>Запрашиваемый адрес не существует</p>
            <Button className={`${styles['home-button']}`} onClick={goHome}>
                Перейти на главную
            </Button>
        </div>
    );
};