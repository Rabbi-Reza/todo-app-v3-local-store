import React from 'react';
//Components
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import Header from "./Header";
//Context
import TaskListContextProvider from "../context/TaskListContext";
//Style file
import "../App.css";

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
        
    )
}

export default App
