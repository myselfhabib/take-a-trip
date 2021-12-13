import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'



const Booking = () => {
    const { serviceId } = useParams();

    return (
        <div className="input-card">
            <h2 className="cyb">Confirm Your Booking</h2>
            <h2 className="id" >Booking Id: {serviceId}</h2>
            <input type="text" className="yfn" placeholder="Your Full Name" />
            <input type="date" className="yfn" id="myDate" />
            <input type="text" className="yfn2" placeholder="Payment" /> <br /> <br />
            <Link className="confirm" to="/booked">Confirm</Link>

        </div>
    );
};

export default Booking;