import React, { useState }  from 'react'

// const initialState = {
//     item: "",
//     completed: false,
//     deleted: false
// }

const UserForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const todoItem = {
        text: newTodo,
        complete: false
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.length === 0) {
            return;
        }
        setTodos([...todos, todoItem])
        setNewTodo("");
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handleDelete = (delIdx) => {
        const filteredTodos = todos.filter((todo, i) => {
            return i !== delIdx;
        });

        setTodos(filteredTodos);
    }

    const handleCheck = (idx) => {
        const updatedTodos = todos.map((todo, i) => {
            if (idx === i) {
                const updatedTodo = {...todo, complete: !todo.complete}
                return updatedTodo;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center mt-5'>
                    <input name="text" type="text" className='form-control w-50' onChange={handleChange} value={newTodo}/>
                </div>
                <input type="submit" className='btn btn-outline-primary' value="Add" />
            </form>
            <div> 
                {todos.map((todo, i) => {
                return (
                    <div key={i} className="d-flex gap-3 justify-content-center">
                        { todo.complete ? <h1 style={{textDecoration: 'line-through'}}>{todo.text}</h1> : <h1>{todo.text}</h1>}
                        <form>
                            <input type="checkbox" checked={todo.complete} onChange={(e) => {handleCheck(i);}} />
                        </form>
                        <button onClick={(e) => {handleDelete(i);}}>Delete</button>
                    </div>
                )
                })}
            </div>
        </div>
    )
}

export default UserForm