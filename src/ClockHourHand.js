
import React from 'react';

function ClockHourHand(props) {
const secDeg = props.hours*30;   //hours tims 30 will give you degrees
const styles = { 
    transform: `rotate(${secDeg}deg)` 
};

return (

<div className="bar-h hourhand" style={styles}></div>

)

}


export default ClockHourHand;