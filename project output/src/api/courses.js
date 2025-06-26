import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/courses/';

export const fetchCourses = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.error('Error fetching courses:', err);
    return [];
  }
};

export const fetchCourseDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}${id}/`);
    return response.data;
  } catch (err) {
    console.error(`Error fetching course #${id}:`, err);
    return null;
  }
};
