//basic props example (less secure)
export function Greeting(props){
    return <h2>Hello, {props.name}</h2>
}

//destructuring props examples
export function Greeting2({name}){
    return <p>Hello, {name}</p>
}
// passing multiple props example
export function Greeting3({name, age}){
    return <p>Hello  {name}, you are {age} years old</p>
}
// css in card
export function Card({title,description,price}){
    return (
    <div  style={{border:"2px solid gray", padding:"10px"}}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
    </div>
    )
}
// Fetch Array props example
export function Array({items}){
    return (
        <ul>
            {/* use map to iterate through each element in array list, i is the location */}
            {items.map((element,i)=>(
                <li key={i}>{element}</li> //print element in each location, i
            ))}
        </ul>
    )
}
