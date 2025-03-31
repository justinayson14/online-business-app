import { TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ setSearchQuery, handleSearch }) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        e.preventDefault;
        setSearchQuery(e.target.value);
      }}
      label="Enter a product name..."
      variant="outlined"
      placeholder="Search product..."
      size="small"
    />
    <IconButton type="submit" aria-label="serach" onClick={handleSearch}>
        <SearchIcon/>
    </IconButton>
  </form>
);

export default SearchBar
