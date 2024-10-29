import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SingleCourse() {
  let [tableData, setTableData] = useState([]);
  let [error, setError] = useState(null);

  // Get and Print data Function Here

  async function getData() {
    try {
      let result = await axios.get('http://localhost:8500/api/getData');
      setTableData(result.data);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);




  // Delete Data Function Here

  function deleteData(id){
    // console.log(id)
    axios.delete(`http://localhost:8500/api/deleteData/${id}`)
    getData()
  }

  return (
    <>
      <div>
        <h1 className='w-[200px] bg-gray-500 rounded-lg mt-3 text-center text-xl uppercase ml-2 py-2 px-5 text-white'>
          Single Course
        </h1>
        <div className='w-full flex items-center justify-center'>
          <Link
            to='/admin/singlecourseform'
            className='w-[250px] bg-green-500 rounded-lg mt-3 text-center text-xl uppercase py-2 px-5 mx-auto text-white'
          >
            Add New Course
          </Link>
        </div>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="overflow-x-auto mt-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Language</th>
              <th className="px-4 py-2">Discount</th>
              <th className="px-4 py-2">Course Title</th>
              <th className="px-4 py-2">Regular Price</th>
              <th className="px-4 py-2">Sale Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-500 text-white' : 'bg-slate-900 text-white'}
              >
                <td className="px-4 py-2">
                  <img
                    src={`http://localhost:8500/${row.image}`}
                    alt={row.courseTitle}
                    className="h-12 w-12 object-cover"
                  />
                </td>
                <td className="px-4 py-2">{row.language}</td>
                <td className="px-4 py-2">{row.discount}</td>
                <td className="px-4 py-2">{row.courseTitle}</td>
                <td className="px-4 py-2">{row.regularPrice}</td>
                <td className="px-4 py-2">{row.salePrice}</td>
                <td className="px-4 py-2">
                  <Link to={`/admin/singlecourseedit/${row.id}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</Link>
                  <button className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  onClick={()=>deleteData(row.id)}
                  >Delete</button>
                  <Link to={`/admin/singlecourseview/${row.id}`} className="bg-green-500 text-white px-2 py-1 rounded mr-2">View</Link>
                  {/* <button className="bg-yellow-500 text-white px-2 py-1 rounded">Update</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
