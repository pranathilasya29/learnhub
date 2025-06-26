import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();

  return (
    <div className="mt-5">
      <h2>Course Details - ID: {id}</h2>
      <p>Fetch and display course content using this ID.</p>
    </div>
  );
}

export default CourseDetail;
