import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { contactData } from '../../Data/ContactData';

const ContactTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>StartDate</TableCell>
            <TableCell>Preference</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactData.map((contact) => {
            return (
              <TableRow key={contact.id}>
                {Object.entries(contact).map(([key, value]) => {
                  if (key === 'skills') {
                    return <TableCell key={key}>{value.join(", ")}</TableCell>;
                  }if(key !== 'id'){
                    return (
                      <TableCell key={key}>{value}</TableCell>
                    )
                  }
                  return;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;

/**
 ** Table is based on ROWS not like grid, which is align items based on columns
 */
