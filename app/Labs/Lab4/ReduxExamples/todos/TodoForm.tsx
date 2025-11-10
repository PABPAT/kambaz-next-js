import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm(
) {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex gap-2 justify-content-between align-items-center">
      <FormControl
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
      <Button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click" variant="warning"> Update </Button>
      <Button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click" variant="success"> Add </Button>
    </ListGroupItem>
);}
