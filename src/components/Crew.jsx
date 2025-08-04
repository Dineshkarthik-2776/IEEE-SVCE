import React, { useState, useEffect, useRef } from 'react';
import './Crew.css';

const Crew = () => {
  const [selectedYear, setSelectedYear] = useState('2025-2026');
  const rowRefs = useRef([]);

  const crewData = {
    '2025-2026': [
      [
        { name: 'dk', position: 'Chair', photo: '/photos/john.jpg' },
        { name: 'xyz', position: 'Secretary 1', photo: '/photos/jane.jpg' },
        { name: 'asd', position: 'Secretary 2', photo: '/photos/alex.jpg' },
      ],
      [
        { name: 'Emily Davis', position: 'Vice Chair', photo: '/photos/emily.jpg' },
        { name: 'Michael Brown', position: 'Vice Secretary 1', photo: '/photos/michael.jpg' },
        { name: 'Sarah Wilson', position: 'Vice Secretary 2', photo: '/photos/sarah.jpg' },
        { name: 'David Lee', position: 'Treasury 1', photo: '/photos/david.jpg' },
        { name: 'Linda Taylor', position: 'Treasury 2', photo: '/photos/linda.jpg' },
      ],
      [
        { name: 'Chris Martin', position: 'Event Head', photo: '/photos/chris.jpg' },
        { name: 'Patricia Moore', position: 'Web Master', photo: '/photos/patricia.jpg' },
      ],
      [
        { name: 'Daniel Anderson', position: 'Executive Member 1', photo: '/photos/daniel.jpg' },
        { name: 'Nancy Thomas', position: 'Executive Member 2', photo: '/photos/nancy.jpg' },
        { name: 'Steven Jackson', position: 'Outreach 1', photo: '/photos/steven.jpg' },
        { name: 'Barbara White', position: 'Outreach 2', photo: '/photos/barbara.jpg' },
      ],
    ],
  };

  useEffect(() => {
    const intervalIds = [];

    if (window.innerWidth <= 600) {
      rowRefs.current.forEach((row) => {
        if (!row) return;
        let scrollPos = 0;
        const scrollStep = 240;
        const intervalId = setInterval(() => {
          if (row.scrollWidth - row.clientWidth <= scrollPos) {
            scrollPos = 0;
          } else {
            scrollPos += scrollStep;
          }
          row.scrollTo({
            left: scrollPos,
            behavior: 'smooth',
          });
        }, 3000);
        intervalIds.push(intervalId);
      });
    }

    return () => {
      intervalIds.forEach(clearInterval);
    };
  }, [selectedYear]);

  return (
    <section className="crew-section">
      <div className="year-toggle">
        {['2025-2026', '2024-2025', '2023-2024'].map((year) => (
          <button
  key={year}
  className={`year-btn ${selectedYear === year ? 'active' : ''}`}
  onClick={() => setSelectedYear(year)}
>
  {year}
</button>
        ))}
      </div>

      {crewData[selectedYear] ? (
        <div className="crew-rows">
          {crewData[selectedYear].map((row, index) => (
            <div
              className="crew-row"
              key={index}
              ref={(el) => (rowRefs.current[index] = el)}
            >
              {row.map((member, i) => (
                <div className="crew-card" key={i}>
                  <div
                    className="photo"
                    style={{ backgroundImage: `url(${member.photo})` }}
                  ></div>
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                  <div className="glow-border"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-data">Crew data for this academic year will be updated soon.</p>
      )}
    </section>
  );
};

export default Crew;
