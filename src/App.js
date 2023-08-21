


import React, { useState } from 'react';
import './App.css';
import _ from 'lodash';

const staticData = [
  { id: 1, firstName: 'Chandran', lastName: 'S', email: 'chandran@gmail.com', phoneNumber: '8220840748' },
  { id: 2, firstName: 'Dheeran', lastName: 'S', email: 'dheeran@gmail.com', phoneNumber: '9876543210' },
  { id: 2, firstName: 'Murugan', lastName: 'S', email: 'murugan@gmail.com', phoneNumber: '7785978902' },

  // Add more data entries as needed
];

function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(staticData);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);

    const filtered = _.filter(staticData, (item) =>
      _.some(item, (value) =>
        _.includes(_.toLower(value), _.toLower(searchTerm))
      )
    );

    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <h1>Table with Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>S No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

