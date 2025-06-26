import React from 'react';

function Progress() {
  const progressData = [
    { course: 'Django Basics', percent: 80 },
    { course: 'React Essentials', percent: 40 }
  ];

  return (
    <div>
      <h2 className="mb-4">Your Learning Progress</h2>
      <ul className="list-group">
        {progressData.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.course}
            <div className="progress mt-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${item.percent}%` }}
              >
                {item.percent}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Progress;
