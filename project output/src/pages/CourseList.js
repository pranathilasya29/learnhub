import React from 'react';
import CourseCard from '../components/CourseCard';

function CourseList() {
  const sampleCourses = [
    { id: 1, title: 'Django Basics', description: 'Learn Django from scratch', is_paid: true },
    { id: 2, title: 'React Essentials', description: 'Build interactive UIs with React', is_paid: false }
  ];

  return (
    <div>
      <h2 className="mb-4">Available Courses</h2>
      <div className="row">
        {sampleCourses.map(course => (
          <div key={course.id} className="col-md-6 col-lg-4 mb-4">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
