import { Link } from "react-router-dom"

function NotFound() {
    return(<>
     <div style={{color:"white",fontSize:"32px"}}>404 NOT FOUND</div>
     <Link to="/" >Home</Link> 
    </>)
}

export default NotFound