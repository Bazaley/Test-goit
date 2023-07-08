import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export const Dropdown = ({ setValue, value }) => {
  return (
    <FormControl
      variant="outlined"
      sx={{
        marginTop: 2,
        marginLeft: 15,
        width: 150,
        height: 30,
      }}
    >
      <InputLabel>Filter</InputLabel>

      <Select
        label="Filter"
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <MenuItem value={1}>Show all</MenuItem>
        <MenuItem value={2}>Follow</MenuItem>
        <MenuItem value={3}>Followings</MenuItem>
      </Select>
    </FormControl>
  );
};
