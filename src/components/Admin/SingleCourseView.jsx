import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';  // Import axios

export default function SingleCourseView() {
  const [data, setData] = useState({});
  const { id } = useParams();

  // Fetch course data based on id
  async function getData() {
    try {
      const result = await axios.get(`http://localhost:8500/api/viewData/${id}`);
      setData(result.data[0]);
    } catch (error) {
      console.error('Error fetching the course data:', error);
    }
      console.log(data)
  }

  useEffect(() => {
    getData();
  }, [id]); // Trigger only when `id` changes

  return (
    <div className="max-w-sm mx-auto mt-20 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover"
        src={`http://localhost:8500/${data.image}`}  // Assuming `data.image` holds the image path
        alt={data.courseTitle || 'Course Image'}  // Default alt text if course title is undefined
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{data.courseTitle || 'Course Title'}</h2>
        <p className="text-gray-600">Language: <span className="font-medium">{data.language || 'N/A'}</span></p>
        <p className="text-gray-600">Discount: <span className="text-green-500 font-bold">{data.discount || 'N/A'}</span></p>
        <p className="text-gray-600">Hours: <span className="font-medium">{data.time || 'N/A'}</span></p>
        <p className="text-gray-600">Lessons: <span className="font-medium">{data.lessons || 'N/A'}</span></p>
        <p className="text-gray-600">Teacher: <span className="font-medium">{data.teacherName || 'N/A'}</span></p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-gray-600 line-through">₹{data.regularPrice || 'N/A'}</p>
            <p className="text-green-500 text-lg font-bold">₹{data.salePrice || 'N/A'}</p>
          </div>
          <Link to='/admin/singlecourse' className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Go to Page
          </Link>
        </div>
      </div>
    </div>
  );
}
