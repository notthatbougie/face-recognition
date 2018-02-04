import React from 'react';
import './ImageLinkForm.css';

const ImageLinkFrom = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className="f3">This Magic Brain will detect faces in your pictures. Give it a try!</p>
			<div className="center">
				<div className="pa4 br3 shadow-5 form center">
					<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
					<button 
						className="f4 link grow w-30 ph3 pv2 dib white bg-light-purple"
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkFrom;