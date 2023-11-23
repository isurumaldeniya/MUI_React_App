import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { contactData } from '../../Data/ContactData';
import { Theme, useTheme } from '@mui/material';

const columns = (theme: Theme) => [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
  {
    field: 'role',
    headerName: 'Role',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
  {
    field: 'skills',
    headerName: 'Skills',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div style={{ color: theme.palette.primary.main }}>
          {cellValues.value ? cellValues.value[0] : ''}
        </div>
      );
    },
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
  {
    field: 'preference',
    headerName: 'Preference',
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return cellValues.value;
    },
  },
];

const ContactDataGrid = () => {
  const rows = () => [...contactData];

  const theme = useTheme();

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        autoHeight
        columns={columns(theme)}
        rows={rows()}
        pageSie={5}
        headerHeight={60}
        rowHeight={120}
      />
    </div>
  );
};

export default ContactDataGrid;
