import React from 'react';

function SearchBox({getSearchParam}){
	return(
		<div className="tc">
			<input type="text" name="searchField" placeholder="Enter Robot Name" onChange={getSearchParam}/>
		</div>
	)
}

export default SearchBox;