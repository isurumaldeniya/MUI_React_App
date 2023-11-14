import { DesktopDatePicker } from '@mui/x-date-pickers';
import { minWidth } from '../ContactForm';
import dayjs, { Dayjs } from 'dayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const popperSx = {
  // color: "yellow"
  '& .MuiPaper-root': {
    color: 'green',
  },
  '& [role=grid]': {
    backgroundColor: 'skyblue',
    '& button': {
      backgroundColor: 'green',
    },
    // '& span': {
    //   backgroundColor: 'red',
    // },

    /**
     ** here ---- '& button' ----- we are selecting a child inside the grid. So we need (___) space after '&'. Since we are not targeting a child class no need for the ` . ` .
     */
  },
};

const BeautifulDesktopDatePicker = (props: {
  value: Dayjs | null | undefined;
  onChange: (value: dayjs.Dayjs | null | undefined) => void;
}) => {
  return (
    <DesktopDatePicker
      {...props}
      label="Date"
      format="MM/DD/YYYY"
      view="day"
      slots={{
        openPickerIcon: CalendarMonthIcon,
      }}
      sx={{
        minWidth: minWidth,
      }}
      slotProps={{
        openPickerButton: { color: 'primary' },
        popper: { sx: popperSx },
      }}
    />
  );
};

export default BeautifulDesktopDatePicker;
