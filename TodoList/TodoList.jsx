import Todo from './TodoList.css';
function TodoList(props) {
    const {tit} = props;
    return (
        <>
            <div className="todoList">
                <h1 className="todo">Todo List Pending</h1>
                <p className={`todo-item ${tit.completed ? 'completed':'Incomplete'}`}>Title: {tit.title}</p>
            </div>
        </>
    )
}
export default TodoList;