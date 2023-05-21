import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { setStatusFilter } from 'redux/phonebook/filterSlice';
import { selectStatusFilter } from 'redux/phonebook/filterSlice';

import { Box, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const filterInputRef = useRef(null);
  const filter = useSelector(selectStatusFilter);
  const filterStatus = filter.status;

  const handleFilter = () => {
    const filter = filterInputRef.current.value.toLowerCase();
    dispatch(setStatusFilter(filter));
  };

  return (
    <Box sx={{ backgroundColor: 'secondary.main', padding: '10px' }}>
      <TextField
        fullWidth
        size="small"
        id="filter"
        type="text"
        label="Search for contact..."
        name="filter"
        value={filterStatus}
        onChange={handleFilter}
        inputRef={filterInputRef}
      />
    </Box>
  );
};

export default Filter;
