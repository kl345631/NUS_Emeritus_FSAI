function Message1(){
    return(
        <>
            <div>
                I am Message component in other file.
            </div>
        </>
    )
}

function Quote(){
    return(
        <>
            <p>Teach more, Learn more!!</p>
        </>
    )
}


function Header(){
    return(
    
            <p>HEADER!!</p>
       
    )
}

function Footer(){
    return(
        <>
            <p>FOOTER!!</p>
        </>
    )
}

function Sidebar(){
    return(
        <>
            <p>SIDEBAR!!</p>
        </>
    )
}

// export default Message1
export {Message1,Header,Footer,Sidebar,Quote}