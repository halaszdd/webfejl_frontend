import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import Edit from "./components/Edit";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromSever = await fetchTasks()
      setTasks(tasksFromSever)
    }
    getTasks()
  }, [])

  //Fetch Task
  const fetchTasks = async () => {
    const res = await fetch('/api/v1/ingamehero')
    const data = await res.json()
    return data
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('/api/v1/ingamehero', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()

    setTasks([...tasks, data])
  }

  //Delete a Task
  const deleteTask = async (id) => {
    await fetch(`/api/v1/ingamehero/${id}`,
      {
        method: 'DELETE',
      })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Edit a task
  const editTask = async(id, {name, rarity, vision, sex, constellation}) => {
    const res = await fetch(`/api/v1/ingamehero/${id}?name=${name}&rarity=${rarity}&vision=${vision}&sex=${sex}&constellation=${constellation}`,
      {
        method: 'PUT'
      })
      const data = await res.json()
    setTasks(await fetchTasks());
  }

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='/' element={<>
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ?
              (<Tasks tasks={tasks} onDelete={deleteTask} />) :
              ('No Rows to show!')}
          </>} />
          <Route path='/about' element={<><About /></>} />
          <Route path='/edit/:id' element={<><Edit onEdit={editTask} tasks={tasks}/></>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
