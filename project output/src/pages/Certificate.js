import React from 'react';

function Certificate() {
  const certificates = ['React Essentials', 'Intro to Python'];

  return (
    <div className="mt-5">
      <h2>Your Certificates</h2>
      <ul className="list-group">
        {certificates.map((title, index) => (
          <li key={index} className="list-group-item">
            {title} — <button className="btn btn-link">Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificate;
