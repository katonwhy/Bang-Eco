// import './App.css';
import React from 'react';
//import MUIDataTable from 'mui-datatables';
import { useState } from "react";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import saveLocation from '../../store/action';
import Table from './Table';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import data from '../../data';
import './Table.css'

function TableComponent() {
  const dispatch = useDispatch()
  const [buttonStyle1, setButtonStyle1] = useState('outlined')
  const [buttonStyle2, setButtonStyle2] = useState('contained')
  const [buttonStyle3, setButtonStyle3] = useState('outlined')
  const [buttonStyle4, setButtonStyle4] = useState('outlined')
  const [buttonStyle5, setButtonStyle5] = useState('outlined')

// <<<<<<< HEAD
//   const options = {
//     selectableRows: 'none',
//     searchAlwaysOpen: true,
//     searchPlaceholder: 'Masukan kecamatan atau kelurahan anda',
//     print: false,
//     download: false,
//   };
// =======
  const handleBekasi = () => {
    dispatch(saveLocation('bekasi'))
    setButtonStyle1('contained')
    setButtonStyle2('outlined')
    setButtonStyle3('outlined')
    setButtonStyle4('outlined')
    setButtonStyle5('outlined')
  }

  const handleJakarta = () => {
    dispatch(saveLocation('jakarta'))
    setButtonStyle1('outlined')
    setButtonStyle2('contained')
    setButtonStyle3('outlined')
    setButtonStyle4('outlined')
    setButtonStyle5('outlined')
  }

  const handleDepok = () => {
    dispatch(saveLocation('depok'))
    setButtonStyle1('outlined')
    setButtonStyle2('outlined')
    setButtonStyle3('contained')
    setButtonStyle4('outlined')
    setButtonStyle5('outlined')
  }

  const handleBogor = () => {
    dispatch(saveLocation('bogor'))
    setButtonStyle1('outlined')
    setButtonStyle2('outlined')
    setButtonStyle3('outlined')
    setButtonStyle4('contained')
    setButtonStyle5('outlined')
  }

  const handleTangerang = () => {
    dispatch(saveLocation('tangerang'))
    setButtonStyle1('outlined')
    setButtonStyle2('outlined')
    setButtonStyle3('outlined')
    setButtonStyle4('outlined')
    setButtonStyle5('contained')
  }
  
  return (
    <div className='table-container'>
      <p id="table-title">Cari Tempat Pengelolaan Sampah Di Sekitarmu</p>
      <Button 
          variant={buttonStyle1} 
          color="success" 
          size="large"
          onClick={handleBekasi} 
      >Kota Bekasi
      </Button>
      <Button 
          variant={buttonStyle2} 
          color="success" 
          size="large"
          onClick={handleJakarta} 
      >DKI Jakarta
      </Button>
      <Button 
          variant={buttonStyle3} 
          color="success" 
          size="large"
          onClick={handleDepok} 
      >Depok  
      </Button>
      <Button 
          variant={buttonStyle4} 
          color="success" 
          size="large"
          onClick={handleBogor} 
      >Bogor  
      </Button>
      <Button 
          variant={buttonStyle5} 
          color="success" 
          size="large"
          onClick={handleTangerang} 
      >Tangerang  
      </Button>
      <Table location = {useSelector((state) => state.location)} />
    </div>
  );
}

export default TableComponent;
