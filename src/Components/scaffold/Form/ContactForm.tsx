import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack,
  createTheme,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { contactData, FormValues } from '../../../Data/ContactData';
import { useState } from 'react';
import dayjs from 'dayjs';
import BeautifulTextField from './FormSubComponents/BeautifulTextField';
import BeautifulAutocomplete from './FormSubComponents/BeautifulAutocomplete';
import BeautifulSelect from './FormSubComponents/BeautifulSelect';
import BeautifulDesktopDatePicker from './FormSubComponents/BeautifulDesktopDatePicker';
import BeautifulRadio from './FormSubComponents/BeautifulRadio';
import { StyledFormGroup } from './FormSubComponents/StyledFormGroup';


export const minWidth = 300;
const defaultWorkPreference = 'Hybrid';
const skills = ['React', 'Angular', 'Python', 'NodeJS', 'Machine Learning'];

const today = new Date();

const paperInputStyle = {
  textAlign: 'left',
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: '2px solid', borderColor: 'primary.main' },
    '&:hover': {
      '& > fieldset': {
        borderColor: 'primary.light',
      },
    },
  },
  '& .MuiFormLabel-root': {
    color: 'primary.dark',
  },
  // backgroundColor: '#F9F3CC',
  minWidth: 800,
};

const ContactForm = () => {
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: '',
      skills: ['React'],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultWorkPreference,
    };
  };

  console.log(contactData);

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );

  const [alertOpen, setAlertOpen] = useState(false);

  function handleTextFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleAutoCompleteChange(
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) {
    event.preventDefault();
    setFormValues({
      ...formValues,
      role: value || '',
    });
  }

  function handleSelectChange(event: SelectChangeEvent<string[]>) {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === 'string' ? value.split(', ') : value,
    });
  }

  function handleDatePickerChange(value: dayjs.Dayjs | null | undefined) {
    if (value != undefined || value != null) {
      setFormValues({
        ...formValues,
        startDate: `${value.month() + 1}/${value.date()}/${value.year()}`,
      });
    }
  }

  function handleRadioChange(
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    event.preventDefault();

    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value || '',
    });
  }

  function handleSubmit() {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  }
  function handleClear() {
    clearValues();
  }

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  const theme = createTheme();

  return (
    <>
      <Paper
        sx={{
          ...paperInputStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          "&:hover": {backgroundColor: 'rgba(0,0,0,0.1)'},
          backgroundColor: 'grid.dark'
        }}
      >
        <form>
          <FormControl>
            <StyledFormGroup row sx={{ backgroundColor: 'pink' }}>
              <BeautifulTextField
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeautifulAutocomplete
                value={formValues.role || ''}
                onInputChange={handleAutoCompleteChange}
              />
            </StyledFormGroup>
            <StyledFormGroup row paddingtop={10}>
              <BeautifulSelect
                value={formValues.skills || ''}
                onChange={handleSelectChange}
              >
                {skills.map((skill) => {
                  return (
                    <MenuItem value={skill} key={skill} sx={{ maxHeight: 180 }}>
                      <Checkbox
                        checked={formValues.skills?.includes(skill)}
                      ></Checkbox>
                      <ListItemText primary={skill} />
                    </MenuItem>
                  );
                })}
              </BeautifulSelect>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BeautifulDesktopDatePicker
                  value={dayjs(formValues.startDate)}
                  onChange={handleDatePickerChange}
                />
              </LocalizationProvider>
            </StyledFormGroup>
            <StyledFormGroup row>
              <StyledFormGroup>
                <FormLabel>Work Preference</FormLabel>
                <BeautifulRadio
                  defaultValue={defaultWorkPreference}
                  value={formValues.preference}
                  onChange={handleRadioChange}
                ></BeautifulRadio>
              </StyledFormGroup>
              <Stack>
                <Button variant='contained' sx={{height: 56, width: 100}} onClick={handleSubmit}>Submit</Button>
                <Button variant='beautiful' sx={{height: 56, width: 100}} onClick={handleClear}>Clear</Button>
              </Stack>
            </StyledFormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert>
          <AlertTitle>Success!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
};

export default ContactForm;

/**
 ** MUI does not have default FORM component. but it has sub component that can used with <form> element of html
 ** <FormControl /> is controlling the children inside the <form/> component 
 ** <FormGroup /> is responsible for Laying out the children inside the form ---> just like row property it set components horizontally

 *? <AutoComplete />
 ** Autocomplete get values from options (props)
 ** options -- this tell what is included inside the auto complete. 
 ** renderInput --  controls the render area of the autoComplete. That means actual TYPABLE area of the autoComplete. by passing the PROPS 
            ** make sure to properly add the autoComplete to it. 
 ** getOptionLabel -- determine string value for a given option. we can use this value to filter the input from autoComplete
 ** renderOption -- Render the options ---> function(props: object, option: Value, state: object, ownerState: object) => ReactNode 
            ** renderOption control how our options render in the dropdown on the autoComplete

  *?<Select />
  ** get values from its children
  ** renderValue -- tells how to render the value that return from the skill array
    *? <MenuItem />
        ** value -- this property tell the UI what value we currently selected.
    *? <ListItemText /> 
        ** this is what actually visible in the UI.  
        ** primary -- this tell what to indicate in the UI
 */

/**
 *? -----> Sx Props <------
 
 ** breakpoints ---> this will define how app should behave when screen size changes.
      -- A breakpoint is the screen size threshold determined by specific layout requirements. At a given breakpoint range, the layout adjusts to suit the screen size and orientation.
      *! margin : {sx: 1, sm: 2} ----> this means in smaller screen (sx) apply margin=1 (which is 8px) and small screen(sm) apply margin=2(16px). [1=8px is because using default 
      *! theme MUI is converting 1, 2 into px values 8, 16 respectively]. sm -- 600px of screen width 

 */

/**
 * ? --------> FormControl component <----------
 * * FormControl should wrap a single <Input /> component(best practice). it control the state of what is wraps. 
 * 
 * FormGroup 
 *!  - it's purpose is to align the items within the form. has display=flex as default

 * FormLabel
 *!   - label for multiple form elements

 * FormControlLabel
 *!   - used to wrap one perticular control --- normally checkbox, radio button, switch etc...

 * FormHelperText
  *!  - kind of label other than formLabel
 */