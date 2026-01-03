export default function ToDoList ({tasks}) {
    return (
        <>
            <ul>
                 {tasks.map((t,index) => (
                    <li key={index}> {t} </li>
                 ))} 
            </ul>
        </>
    )
}

// const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );

// return (
//   <ul>{listItems}</ul>
// );