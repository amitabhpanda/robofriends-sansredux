import React from 'react';
import './Card.css';

function Card({robot, key}){
	return(
		<div className="dib pa3 custom">
			<article className="br3 grow dark-gray mv4 w-100 shadow-5">
				<div className="pa2">
					<img src={"https://robohash.org/"+robot.id+"?300*300"} alt="robot"/>
					<div className="name">
						<h1>{robot.name}</h1>
						<p>{robot.email}</p>
					</div>
				</div>
			</article>
		</div>
		);
}

export default Card;