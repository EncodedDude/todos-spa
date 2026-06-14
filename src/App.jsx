import { Navigate, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import { TaskPage, TasksListPage, NotFoundPage } from "./pages";

 const App = () => {
    return (
        <div className={styles['todos-app']}>
            <div className="container">
                <h1 className={styles.title}>Todos Application</h1>
                <Routes>
                    <Route path='/' element={<TasksListPage />}></Route>
                    <Route path='task/:id' element={<TaskPage />}></Route>
                    <Route path='/404' element={<NotFoundPage />}></Route>
                    <Route path='*' element={<Navigate to='/404' />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;