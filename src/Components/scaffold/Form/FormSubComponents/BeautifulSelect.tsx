import { Select, SelectChangeEvent } from '@mui/material';
import { minWidth } from '../ContactForm';
import { ReactNode, useEffect, useRef, useState } from 'react';

const BeautifulSelect = (props: {
  value: string[] | undefined | '';
  onChange: (event: SelectChangeEvent<string[]>, child: ReactNode) => void;
  children: React.ReactNode[];
}) => {
  const selectInputComponent = useRef<HTMLInputElement>(null);

  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect().left + 20
        : 0
    );
  }, [selectInputComponent]);

  return (
    <Select
      ref={selectInputComponent}
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(', ')}
      sx={{
        minWidth: minWidth,
        marginRight: 2,
        maxHeight: 180,
      }}
      multiple
      MenuProps={{PaperProps: {
        sx: {
          left: `${position}px !important`,
          maxHeight: 180
        }
      }}}
    >
      {props.children}
    </Select>
  );
};

export default BeautifulSelect;
