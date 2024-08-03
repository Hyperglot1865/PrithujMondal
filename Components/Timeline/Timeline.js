import React from 'react';
import styles from '../../src/styles/About/Exhibition.module.css';

const Timeline = () => {

    const events = [
        {
          title: "Event 1",
          description: "Description for event 1.",
          date: "2024-01-01"
        },
        {
          title: "Event 2",
          description: "Description for event 2.",
          date: "2024-02-01"
        },
        {
          title: "Event 3",
          description: "Description for event 3.",
          date: "2024-03-01"
        },
        {
            title: "Event 4",
            description: "Description for event 4.",
            date: "2024-01-01"
          },
          {
            title: "Event 5",
            description: "Description for event 5.",
            date: "2024-02-01"
          },
          {
            title: "Event 6",
            description: "Description for event 6.",
            date: "2024-03-01"
          },
      ];


  return (
    <div className={styles.timelinecontainer}>
      <div className={styles.timelineline}></div>
      {events.map((event, index) => (
        <div key={index} className={styles.timelineevent}>
          <div className={styles.timelinebox}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <span>{event.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;