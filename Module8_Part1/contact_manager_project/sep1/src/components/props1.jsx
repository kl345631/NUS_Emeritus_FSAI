export function Greeting1(props){
    return <h2>Hello, {props.name}</h2>
}

export function Greeting2({name}){
    return <h2>Hello, {name}</h2>
}

export function Greeting3({name,age}){
    return <h2>Hello, {name}{age}</h2>
}

export function Card({title,desc,price}){
return(
    <div style={{border:"2px solid gray",padding:"10px"}}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>price:{price}</p>
    </div>
)
}

export function Array1({items}){
    return (
        <ul>
            {items.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}