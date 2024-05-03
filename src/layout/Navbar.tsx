import { Button, Icon } from "semantic-ui-react"
import "./navbar.css"
import { useNavigate } from "react-router-dom"
const Navbar =()=>{
    const navigate = useNavigate();


    const navigateToDashboard=()=>{
        navigate("/dashboard")
    }

    const navigateToReservation=()=>{
        navigate("/reservation")
    }

    return (
    <div className="nav_bar">
        <Button  color='facebook'onClick={navigateToReservation}>
      <Icon name='thumbs up' /> Reservation
    </Button>
    <Button color='twitter' onClick={navigateToDashboard}>
      <Icon name='dashboard' /> Dashboard
    </Button>
    </div>)
}

export default Navbar