import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => {
    // {console.log("----text----", text)}
    return (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        {/*<p className="pin-text">{text}</p>*/}
    </div>
)}

export default LocationPin