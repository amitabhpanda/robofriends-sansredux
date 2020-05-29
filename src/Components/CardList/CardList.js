import React from 'react';
import Card from '../Card/Card';


function CardList({robots,searchParam}){
	let filteredRobots=robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchParam.toLowerCase());
	});

	return(
		//<p>Hello World</p>
		<div className="tc">
			{filteredRobots.map(robot=>{
				return(
						<Card robot={robot} key={robot.id}/>
					)	
			})}
		</div>
	);
}

export default CardList;