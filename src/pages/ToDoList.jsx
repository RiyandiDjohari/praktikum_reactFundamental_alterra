const ToDoList = ({list}) => {
  return ( 
    <h4 style={{textDecoration: list.Completed ? 'line-through': 'none'}}>{list.title}</h4>
  );
}
export default ToDoList;