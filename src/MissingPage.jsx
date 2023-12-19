import { Navigate } from "react-router-dom"

const UnknownLink = () => {
 return <Navigate to={{pathname: '/'}}/>
}

export default UnknownLink