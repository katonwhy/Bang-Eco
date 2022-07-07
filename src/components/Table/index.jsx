// import './App.css';
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from '../../data';
import './Table.css'

function Table() {
  const columns =  [{
    name: "nama_lokasi_3R/bank_sampah",
    label: "Nama TPS3R/Bank Sampah",
   },
   {
    name: "wilayah",
    label: "Wilayah",
   },
   {
    name: "kecamatan",
    label: "Kecamatan",
   },
   {
    name: "kelurahan",
    label: "Kelurahan",
   },
   {
    name: "alamat",
    label: "Alamat",
   }
  ]

  const options = {
    selectableRows: 'none',
    searchAlwaysOpen: true,
    searchPlaceholder: 'Masukan kecamatan/kelurahan anda',
    print: false,
    download: false,
  };

  const getMuiTheme = () => createTheme({
    components: {
      MUIDataTableBodyCell: {
        styleOverrides:{
          root: {
              backgroundColor: "#F3FFF4"
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: '#219653',
            color: 'white'
          },
        },
      },
    }
  })
  
  return (
    <div id="table-container">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Data Tempat Pengelolaan sampah dan Bank Sampah"}
          data={data}
          columns={columns}
          options={options}
          />
      </ThemeProvider>
    </div>
  );
}

export default Table;
