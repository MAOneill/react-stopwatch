
import React from 'react';

function ClockMinuteHand(props) {
const secDeg = props.minutes*6;   //minutes tims 6 will give you degrees
const styles = { 
    transform: `rotate(${secDeg}deg)` 
};

return (

<div className="bar-m " style={styles}></div>

)

}


export default ClockMinuteHand;