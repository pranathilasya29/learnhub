import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <p>
          <span className={`badge ${course.is_paid ? 'bg-warning text-dark' : 'bg-success'}`}>
            {course.is_paid ? 'Paid' : 'Free'}
          </span>
        </p>
        <Link to={`/courses/${course.id}`} className="btn btn-primary btn-sm mt-2">View Details</Link>
      </div>
    </div>
  );
}

export default CourseCard;
