import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchQuery, handleSearch }) => (
  <form onSubmit={(e) => {
    e.preventDefault()
    handleSearch(e)
  }}>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
      }}
      variant="outlined"
      sx={{minWidth: 300}}
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
