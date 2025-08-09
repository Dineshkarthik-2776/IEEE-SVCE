import React, { useEffect, useRef, useState } from 'react';
import './about.css';

const About = () => {
  const textRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Re-trigger animation by removing and re-adding class
          setAnimate(false);
          setTimeout(() => setAnimate(true), 10); // short delay to re-trigger
        }
      },
      {
        threshold: 0.6, // only when ~60% of heading is in view
      }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="abt">
      <h1 ref={textRef} className={`hero ${animate ? 'typewriter-text' : ''}`}>
        ABOUT US
      </h1>
      <div className='para'>
        <p>IEEE Student Chapter of SVCE which falls under Region 10 of IEEE Madras Section has been continuously propelling forward the innovative student community of SVCE since it's inception. The IEEE Student Chapter of SVCE is a fully student organized club consisting of students from all the departments of SVCE. The club stays true to the original testament of IEEE by organizing various events and conferences in order to expand and exploit the technical and scientific knowledge being taught in the curriculum. The club serves as a medium through which the plethora of knowledge of latest advancements in technology is being reached to the whole student community to spurt out ideas and strengthen the intuition of the students.</p>
      </div>
    </section>
  );
};

export default About;
