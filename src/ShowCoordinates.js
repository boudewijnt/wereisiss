import React from 'react';

const ShowCoordinates = ({long, lat}) => {
	const str = `http://www.google.com/maps/place/${lat},${long}`
	return (
		<div>
			<p>Longitude: {long}</p>
			<p>Latitude: {lat}</p>
			<a href={str} target="_blank" rel="noreferrer">see on Google Maps</a>
		</div>		
	)

}

export default ShowCoordinates;