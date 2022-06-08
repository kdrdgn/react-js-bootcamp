import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const Todo = () => {

    // const [todos, setTodos] = useState<Array<any>>([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    //     .then((res) => res.json())
    //     .then((todos) => setTodos(todos))
    // }, []);

    const [todos] = useFetch('https://jsonplaceholder.typicode.com/users/1/todos');


    return (
        <div>
            <p>Todo List</p>
            {todos && todos.map((todo:any, index: number) => {
                return <p key={index}>{todo.title}</p>
            })}
        </div>
    )
}

export default Todo;