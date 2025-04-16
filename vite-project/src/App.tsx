import './App.css'
import {TodolistItem} from './TodolistItem.tsx'


const newTasks = [
  {id: 1, title: "HTML & CSS", isDone: false},
  {id: 2, title: "JS", isDone: true},
  {id: 3, title: "Java", isDone: false},
    {id: 4, title: "CSS", isDone: false},
    {id: 5, title: "JavaScript", isDone: false},
]

const newTasks2 = [
  {id: 4, title: "Hello world", isDone: true},
  {id: 5, title: "asduasnidj", isDone: false},
  {id: 6, title: "Hasdasd", isDone: true},
    {id: 7, title: "JavaScript", isDone: false},
    {id: 8, title: "CSS", isDone: false},
]
const noTasks:any = []

function App() {
  return (
      <div>
        <TodolistItem title="What to Learn" tasks={newTasks}/>
        <TodolistItem title="What to Learn2" tasks={newTasks2}/>
          <TodolistItem title={"bul"} tasks={noTasks}/>
      </div>
  )
}

export default App
