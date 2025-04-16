type PropsType = {
    title: string,
    tasks: TasksType[]

}
export type TasksType = {
    id: number
    title: string
    isDone: boolean
}


export const TodolistItem = ({ title, tasks }: PropsType)=> {
    return (

        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length === 0 ? (
                <p>No Tasks</p>
            ) : (
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            )}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}




