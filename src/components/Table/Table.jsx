import { useState, useEffect } from "react";
//import './Table.css';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bekasi_bank_sampah from '../../data/bekasi_bank_sampah.json';
import dataJakarta from '../../data/index';
import bogor_data_all from '../../data/bogor_data_all.json'
import depok_data_all from '../../data/depok_data_all.json'
import tangerang_data_all from '../../data/tangerang_data_all.json'

function Table(props) {

    const [dataTable, setData] = useState([])
  
    useEffect(() => {
      switch (props.location) {
        case 'bekasi':
          setData(bekasi_bank_sampah)
          break;
          
        case 'jakarta':
          setData(dataJakarta)
          break;
  
        case 'bogor':
          setData(bogor_data_all)
          break;
  
        case 'depok':
          setData(depok_data_all)
          break;
  
        case 'tangerang':
          setData(tangerang_data_all)
          break;
  
        default:
          setData(dataJakarta)
          break;
      }
  
     }, [props.location]);
  
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
              backgroundColor: '#F3FFF4',
            },
          },
        },
      }
    })
  
    return (
      <div>
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Data Tempat Pengelolaan sampah dan Bank Sampah"}
            data={dataTable}
            columns={columns}
            options={options}
            />
        </ThemeProvider>
      </div>
    );
  }
  
  export default Table;