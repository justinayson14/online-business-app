import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchQuery, handleSearch }) => (
  <form onSubmit={handleSearch}>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        e.preventDefault;
        setSearchQuery(e.target.value);
      }}
      variant="outlined"
      placeholder="Search product..."
      size="small"
      slotProps={{
        input:{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        },
      }}
    />
  </form>
);

export default SearchBar
