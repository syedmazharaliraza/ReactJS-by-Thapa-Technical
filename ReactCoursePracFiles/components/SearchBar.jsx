import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = (props) => {
	return (
		<div className='search'>
			<SearchIcon className='search-icons'/>
			<input
				onChange={(event) =>
					props.searchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default SearchBar;