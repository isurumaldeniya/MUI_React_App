import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const BeautifulRadio = (props: {
  defaultValue: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}) => {
  return (
    <RadioGroup {...props} id="preference-type-radio" name="preference">
      <FormControlLabel
        control={<Radio />}
        label="Work From Home"
        value="Work From Home"
      />
      <FormControlLabel control={<Radio />} label="Hybrid" value="Hybrid" />
      <FormControlLabel
        control={<Radio />}
        label="In Office"
        value="In Office"
      />
    </RadioGroup>
  );
};

export default BeautifulRadio;
