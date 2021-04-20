import ListItem from "./ListItem.js"

const List = ( {data, handleClick, deleteAction} ) => {
  console.log("from List component", data)
    return (
      <ul>
        {data.map((singleElement, idx) => 
          //ternary controls the CSS classes
          singleElement.completed?
            <ListItem handleClick={handleClick} todo={singleElement.todo} key={idx} id={singleElement._id} deleteAction={deleteAction} /> :
            <ListItem handleClick={handleClick} todo={singleElement.todo} key={idx} id={singleElement._id} deleteAction={deleteAction} className="simple-todo"/> 
        )}
      </ul>
    )
}

export default List