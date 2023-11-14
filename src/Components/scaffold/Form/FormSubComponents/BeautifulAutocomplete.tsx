import { Autocomplete, TextField } from '@mui/material';
import { minWidth } from '../ContactForm';
import { blue, green } from '@mui/material/colors';

const roles = ['Software Dev', 'Architect', 'Designer', 'BI'];
const BeautifulAutocomplete = (props: {
  value: string;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void;
}) => {
  return (
    <Autocomplete
      {...props}
      sx={{
        minWidth: minWidth,
      }}
      options={roles}
      isOptionEqualToValue={(option, value) => option === value || value === ''}
      renderInput={(props) => {
        return (
          <TextField
            name="roles"
            //*! since we want to add CSS to input area we can directly use the TextField sx
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused': {
                color: 'primary.dark',
              },
            }}
            {...props}
          />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      ListboxProps={{
        sx: {
          height: 100,
          color: 'primary.dark',
          '& li.MuiAutocomplete-option:nth-child': {
            backgroundColor: green[300],
          },
          '& li.MuiAutocomplete-option:hover': {
            backgroundColor: blue[300],
          },
        },
      }}
    />
  );
};

export default BeautifulAutocomplete;

/**
 *? isOptionEqualTpValue
    ** ---> this props determine that if the value is not an option it will equal to empty string so that TS should not throw any errors when rendering the component.
  
*? renderInput
    ** ---> Controls the rendering of the Input area that we type. 

*? getOptionLabel
    ** ---> act as a filter to what we type in renderInput. Based on what we type it will filter options from the drop down menu
  
*? renderOption
    ** ---> Controls how we render the options in the drop down menu
 */
