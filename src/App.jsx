import { Navigate, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import { TaskPage, TasksListPage, NotFoundPage } from "./pages";


// function AppContent() {

//     return (
//         <Routes>
//             <Route 
//                 path="/" 
//                 element={
//                     <>
//                         <div className="container">
//                             <section className={styles["todos-app"]}>
//                                 <h1 className={styles.title}>Todos application</h1>


//                             </section>
//                         </div>
//                     </>
//                 } 
//             />
//             <Route 
//                 path="/task/:id" 
//                 element={
//                     <TaskPage 
//                         todos={todos} 
//                         isLoading={isLoading} 
//                         onEdit={editTodo} 
//                         onDelete={deleteTodo} 
//                     /> 
//                 } 
//             />
//             <Route path="*" element={<NotFound />} />
//         </Routes>
//     );
// }

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