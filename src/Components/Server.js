import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Server() {
  const[records, setRecords] = useState([]);

    // Use an object to track selected rows
    const [selectedRows, setSelectedRows] = useState({});

  // Handle row selection for a specific ID
  const handleRowSelect = (recordId) => {
    setSelectedRows((prevSelected) => ({
      ...Object.keys(prevSelected).reduce((acc, key) => {
        acc[key] = key === recordId; // Set the selected state for the clicked row
        return acc;
      }, {}),
    }));
  };
  
  useEffect(() => {
    axios.get('http://localhost:51177/')
      .then(res => {
        console.log(res.data); // Log the response data
        const data = res.data.recordset; // Access the recordset property
        setRecords(data || []);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <table className='Table'>
        <thead>
          <tr>
            <th className='column1'>Select</th>
            <th className='column2'>owner</th>
            <th>server_name</th>
            <th>event_text</th>
          </tr>
        </thead>
        <tbody>
          {records.map((data) => (
            <tr key={data.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleRowSelect(data.id)}
                  checked={selectedRows[data.id] || false}
                />
              </td>
              <td>{data.owner}</td>
              <td>{data.server_name}</td>
              <td>{data.event_text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
