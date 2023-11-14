/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from '@mui/material';
import { FormGroup } from '@mui/material';

type StyledFormGroupProps = {
  paddingtop?: number;
};


/**
 * Styled Api does not have access to the default theme directly. So padding:2 will reflect as padding=2px (in sx this would be 16px)
 */
export const StyledFormGroup = styled(FormGroup, {
  name: 'StyledFormGroup',
  slot: 'Wrapper', //! name and slot will defined a class for the FormGroup so that we can use that class to apply css if we need
  skipSx: true, //*!neglect the sx prop
})<StyledFormGroupProps>((props) => ({
  // padding: 2,
  padding: props.theme.spacing(2),
  justifyContent: 'space-between',
  paddingTop: props.paddingtop,
  minWidth: 580,
}));
