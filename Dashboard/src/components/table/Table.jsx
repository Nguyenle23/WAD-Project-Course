
import './table.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


function Table() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
          field: 'method',
          headerName: 'Method',
          description: 'This column has a value getter and is not sortable.',
          width: 160,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
        },
      ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, method: 'Visa', status: 'Active' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 45, method: 'Mastercard', status: 'Active' },
        { id: 3, lastName: 'Stark', firstName: 'Robb', age: 18, method: 'Visa', status: 'Active' },
        { id: 4, lastName: 'Stark', firstName: 'Sansa', age: 18, method: 'Visa', status: 'Active' },
        { id: 5, lastName: 'Stark', firstName: 'Arya', age: 18, method: 'Visa', status: 'Active' },
        { id: 6, lastName: 'Stark', firstName: 'Bran', age: 18, method: 'Visa', status: 'Active' },
        { id: 7, lastName: 'Stark', firstName: 'Rickon', age: 18, method: 'Visa', status: 'Active' },
        { id: 8, lastName: 'Stark', firstName: 'Joffrey', age: 18, method: 'Visa', status: 'Active' },
        { id: 9, lastName: 'Stark', firstName: 'Tyrion', age: 18, method: 'Visa', status: 'Active' },
        { id: 10, lastName: 'Stark', firstName: 'Sandor', age: 18, method: 'Visa', status: 'Active' },
        { id: 11, lastName: 'Stark', firstName: 'Eddard', age: 18, method: 'Visa', status: 'Active' },
      ];

  return (
    <div className='table'>
        <div style={{ height: '30vh', width: '100%' }}>
         <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
        </div>
    </div>
  )
}

export default Table