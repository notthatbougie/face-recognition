import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, faceBox}) => {
	return (
		<div className="center ma">
			<div className="absolute mt2">
				<img id="inputimage" alt="" src={imageURL} width="500px" height="auto" />
				<div className="bounding-box" style={{top: faceBox.top, right: faceBox.right, bottom: faceBox.bottom, left: faceBox.left}}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;