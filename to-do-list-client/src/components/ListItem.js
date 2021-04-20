import DeleteButton from "./DeleteButton.js"

const ListItem = ( {handleClick, key, id, className, todo, deleteAction}) => {
    return (
      <li onClick={handleClick} key={key} id={id} className={className}>{todo} <DeleteButton id={`del-${id}`} handleClick={deleteAction}/></li>
    )
}

export default ListItem