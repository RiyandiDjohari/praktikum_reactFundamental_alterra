import ToDoList from "./ToDoList";

const Home = ({lists}) => {
  return ( 
    <div className="home">
      {lists.map((list) => (
        <div className="list" key={list.id}>
          <ToDoList list={list} completed={list.completed} />
        </div>
      ))}
    </div>
   );
}
 
export default Home;