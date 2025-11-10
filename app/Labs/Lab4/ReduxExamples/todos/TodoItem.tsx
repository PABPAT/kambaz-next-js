import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo
}: {todo: any}) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id} className="d-flex justify-content-between align-items-center bg-secondary bg-opacity-10">
      {todo.title}
      <div className="d-flex gap-2">
            <Button onClick={() => dispatch(setTodo(todo))}
                    id="wd-set-todo-click"> Edit </Button>
            <Button onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click" variant="danger"> Delete </Button>
      </div>
    </ListGroupItem>);}