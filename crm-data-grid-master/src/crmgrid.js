import React from 'react';
import { BootstrapTable, TableHeaderColumn } from '../dist/react-bootstrap-table';

const data = [];

function addData(quantity) {
  const startId = data.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    data.push({
	  id: id,
      locationName: "Item name " + id,
	  totalLeads: id+2,
	  totalOccurances: id+3,
      totalDonated: 100 + i
    });
  }
}

addData(70);

function onRowSelect(row, isSelected) {
  console.log(row);
  console.log(`selected: ${isSelected}`);
}

function onSelectAll(isSelected) {
  console.log(`is select all: ${isSelected}`);
}

function onAfterSaveCell(row, cellName, cellValue) {
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('Thw whole row :');
  console.log(row);
}

function onAfterTableComplete() {
  console.log('Table render complete.');
}

function onAfterDeleteRow(rowKeys) {
  console.log('onAfterDeleteRow');
  console.log(rowKeys);
}

function onAfterInsertRow(row) {
  console.log('onAfterInsertRow');
  console.log(row);
}

const selectRowProp = {
  mode: 'checkbox',
  clickToSelect: true,
  selected: [], // default select on table
  bgColor: 'rgb(238, 193, 213)',
  onSelect: onRowSelect,
  onSelectAll: onSelectAll
};

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  afterSaveCell: onAfterSaveCell
};

const options = {
  paginationShowsTotal: true,
  sortName: 'name',  // default sort column name
  sortOrder: 'desc',  // default sort order
  afterTableComplete: onAfterTableComplete, // A hook for after table render complete.
  afterDeleteRow: onAfterDeleteRow,  // A hook for after droping rows.
  afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};


function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

export default class Crmgrid extends React.Component {
  render() {
    return (
      <BootstrapTable data={ data }
        selectRow={ selectRowProp }
        cellEdit={ cellEditProp }
        options={ options }
        insertRow
        deleteRow
        search
        hover
		exportCSV
        pagination>	  
	  <TableHeaderColumn dataField="id" filter={ { type: 'TextFilter', delay: 100 } } dataAlign='center' dataSort isKey autoValue>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="locationName" filter={ { type: 'TextFilter', delay: 100 } } dataSort>Location Name</TableHeaderColumn>
	  <TableHeaderColumn dataField='totalLeads' filter={ { type: 'TextFilter', delay: 100 } }>Total Leads</TableHeaderColumn>  
	  <TableHeaderColumn dataField='totalOccurances' filter={ { type: 'TextFilter', delay: 100 } }>Total Occurances</TableHeaderColumn>  
      <TableHeaderColumn dataField="totalDonated" dataFormat={priceFormatter} editable={false} filter={ { type: 'TextFilter', delay: 100 } }>Total Donated</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
