
import './datatable.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../database' 
import { Link } from 'react-router-dom';

function Datatable() {

  const actionColumn = [ 
    { 
      field: "action", 
      headerName: "Action",
      width: 300, 
      renderCell: () => { 
        return (
          <div className = "cellAction">
            <Link to="/user/test" style={{ textDecoration: "none" }}>
              <div className = "cellAction_view">View</div>
            </Link>
            <div className = "cellAction_delete">Delete</div>
          </div>
        )
      } 
    }
  ]

    
  return (
    
    <div className='datatable'>
        <div className="datatable_add">
            <Link to="/user/new" style={{ textDecoration: "none" }} className="datatable_addnew">
                ADD NEW USER
            </Link> 
        </div>
         <div style={{ height: '80vh', width: '100%' }}>
         <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
        />
        </div>
    </div>
  )
}

export default Datatable