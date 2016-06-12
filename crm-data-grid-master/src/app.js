require('./crmgrid.css');
import React from 'react';
import CrmGrid from './crmgrid';

export default class App extends React.Component {
  render() {
    return (
      <div className='col-md-offset-1 col-md-8'>
        <div className='panel panel-default'>
          <div className='panel-body'>
            <CrmGrid />
          </div>
        </div>
      </div>
    );
  }
}
