import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

const ProductTable = ({ condition, setcondition }) => {
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('update-data')) || [];
    const login = JSON.parse(localStorage.getItem("selore-login")) || {};
    let selectdata = storedData.filter(item => item.email === login.email);
    setUpdateData(selectdata);
  }, [condition]);

  const Delete = (index) => {
    const newData = [...updateData];
    newData.splice(index, 1);
    setUpdateData(newData);
    localStorage.setItem('update-data', JSON.stringify(newData));
    setcondition(!condition);
  };

  return (
    <>
      <div className='mx-3'>
        <h1>Added Products Details</h1>
      </div>

      <div className='mx-2' style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Images</th>
              <th scope="col">Price</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {updateData.map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td><img src={e.images} alt="Product" style={{ width: "50px", height: "50px" }} /></td>
                <td>{e.price}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td><MdDelete onClick={() => Delete(i)} style={{ cursor: 'pointer', color: "red" }} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
