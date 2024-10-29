import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SingleCourseEdit = () => {
  const { id } = useParams(); // Get course ID from URL
  const [formData, setFormData] = useState({
    courseTitle: '',
    language: '',
    discount: '',
    teacherName: '',
    time: '',
    lessons: '',
    regularPrice: '',
    salePrice: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [apiResponse, setApiResponse] = useState(null);
  const navigate = useNavigate();

  // Fetch the existing course data
  useEffect(() => {
    async function fetchCourseData() {
      try {
        const response = await axios.get(`http://localhost:8500/api/viewData/${id}`);
        const courseData = response.data[0];
        setFormData({
          courseTitle: courseData.courseTitle,
          language: courseData.language,
          discount: courseData.discount,
          teacherName: courseData.teacherName,
          time: courseData.time,
          lessons: courseData.lessons,
          regularPrice: courseData.regularPrice,
          salePrice: courseData.salePrice,
          image: courseData.image, // Keep image empty initially for security reasons
        });
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    }
    fetchCourseData();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Validate form fields
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.courseTitle) tempErrors.courseTitle = 'Course Title is required';
    if (!formData.language) tempErrors.language = 'Language is required';
    if (!formData.discount) tempErrors.discount = 'Discount is required';
    if (!formData.teacherName) tempErrors.teacherName = 'Teacher Name is required';
    if (!formData.time) tempErrors.time = 'Time is required';
    if (!formData.lessons) tempErrors.lessons = 'Lessons are required';
    if (!formData.regularPrice) tempErrors.regularPrice = 'Regular Price is required';
    if (!formData.salePrice) tempErrors.salePrice = 'Sale Price is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (validateForm()) {
      try {
        await axios.put(`http://localhost:8500/api/updateData/${id}`, formData);
        navigate('/admin/singlecourse'); // Redirect after successful update
      } catch (error) {
        console.error('Error updating course:', error);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Edit Course</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Section 1: Course Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-white">Course Title</label>
            <input
              type="text"
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.courseTitle && <p className="text-red-500 text-sm">{errors.courseTitle}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Language</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Discount</label>
            <input
              type="text"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.discount && <p className="text-red-500 text-sm">{errors.discount}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Teacher Name</label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.teacherName && <p className="text-red-500 text-sm">{errors.teacherName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Time (in hours)</label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Lessons</label>
            <input
              type="number"
              name="lessons"
              value={formData.lessons}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.lessons && <p className="text-red-500 text-sm">{errors.lessons}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Regular Price</label>
            <input
              type="text"
              name="regularPrice"
              value={formData.regularPrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.regularPrice && <p className="text-red-500 text-sm">{errors.regularPrice}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Sale Price</label>
            <input
              type="text"
              name="salePrice"
              value={formData.salePrice}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.salePrice && <p className="text-red-500 text-sm">{errors.salePrice}</p>}
          </div>
        </div>

        {/* Section 2: Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white">Upload Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Update Course
        </button>
        <Link to='/admin/singlecourse'
          className="bg-blue-800 text-white px-4 ml-5 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default SingleCourseEdit;
