import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CourseForm = () => {
  const [formData, setFormData] = useState({ courseName: "", designation: "" });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      Swal.fire("Error!", "Unauthorized access. Please log in.", "error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/courses/add",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCourses([...courses, res.data.course]);
      Swal.fire("Success!", "Course added successfully!", "success");
      setFormData({ courseName: "", designation: "" });
    } catch (error) {
      Swal.fire("Error!", "Unauthorized access!", "error");
    }
  };

  const handleEdit = async (id) => {
    const { value: newName } = await Swal.fire({
      title: "Edit Course",
      input: "text",
      inputLabel: "Course Name",
      inputValue: courses.find((course) => course._id === id)?.courseName,
      showCancelButton: true,
    });

    if (newName) {
      try {
        const token = localStorage.getItem("token");
        await axios.put(
          `http://localhost:5000/api/courses/${id}`,
          { courseName: newName },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setCourses(
          courses.map((course) =>
            course._id === id ? { ...course, courseName: newName } : course
          )
        );
        Swal.fire("Updated!", "Course updated successfully!", "success");
      } catch (error) {
        Swal.fire("Error!", "Unauthorized access!", "error");
      }
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`http://localhost:5000/api/courses/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          setCourses(courses.filter((course) => course._id !== id));
          Swal.fire("Deleted!", "Course has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Unauthorized access!", "error");
        }
      }
    });
  };

  return (
    <div className="bg-gray-900 dark:bg-gray-50 w-full min-h-screen py-20 px-6 transition-all mx-auto p-5 duration-1000">
      {/* ✅ Smaller Form Width for Better UI */}
      <div className="bg-gray-800 dark:bg-white max-w-sm mx-auto shadow-md rounded-lg p-6 mt-10 duration-1000">
        <h2 className="text-2xl font-bold text-sky-600 text-center mb-4">Add New Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="courseName"
            placeholder="Enter course name"
            className="w-full p-2 border rounded-lg focus:outline-none dark:bg-gray-100 bg-gray-600 text-gray-300 dark:text-gray-600 duration-1000"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="designation"
            placeholder="Enter Duration"
            className="w-full p-2 border rounded-lg focus:outline-none dark:bg-gray-100 bg-gray-600 text-gray-300 dark:text-gray-600 duration-1000"
            value={formData.designation}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-all">
            Add Course
          </button>
        </form>
      </div>

      {/* ✅ Beautiful Responsive Table */}
      <div className="mt-8 max-w-4xl mx-auto overflow-x-auto shadow-md p-4 rounded">
      <h3 className="text-3xl font-semibold text-gray-200 dark:text-gray-600 text-center mb-4">Courses List</h3>
        <table className="w-full rounded-lg border-collapse table-bordered table-striped">
          <thead className="bg-sky-500 text-white">
            <tr className="text-left">
              <th className="p-3 text-center">Sr No.</th>
              <th className="p-3 text-center">Course Name</th>
              <th className="p-3 text-center">Duration</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course._id} className="border-b dark:bg-gray-100 bg-gray-600 text-gray-200 dark:text-gray-600 duration-1000">
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3 text-center">{course.courseName}</td>
                <td className="p-3 text-center">{course.designation}</td>
                <td className="p-3 flex justify-center space-x-3">
                  <button
                    onClick={() => handleEdit(course._id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseForm;
