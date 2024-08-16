import React from 'react';
import styles from '../../src/styles/About/Exhibition.module.css';

const Timeline = () => {

    const events = [
        {
          title: "Group show-Organized by HYPERGLOT REVIEW at CSOI art gallery, New Delhi.",
          description: "",
          date: "2023"
        },
        {
          title: "Group show-Organized by “positive energy art foundation”, BTU gallery, Bangkok, Thailand.",
          description: "",
          date: "2023"
        },
        {
          title: "Online art exhibition with Positive energy art.",
          description: "",
          date: "2020"
        },
        {
          title: "Online art exhibition with ICAC,World art hub ,Mumbai.",
          description: "",
          date: "2020"
        },
        {
          title: "Group show (The Story) at Niv art Gallery,New Delhi.",
          description: "",
          date: "2020"
        },
        {
          title: "Group show( Shadow) at Niv art Gallery, New Delhi.",
          description: "",
          date: "2020"
        },
        {
          title: "Group show at gallery of Fine Arts Faculty, M.S. University, Baroda.",
          description: "",
          date: "2018"
        },
        {
          title: "Group show at Lalit Kala Akademi, New Delhi.",
          description: "",
          date: "2017"
        },
        {
          title: "Solo Exhibition at Jehangir art Gallery, Mumbai.",
          description: "",
          date: "2013"
        },
        {
          title: "“Resist”, organized by Engendered, American Centre, New Delhi.",
          description: "",
          date: "2012"
        },
        {
          title: "Samanvai art gallery, New Delhi",
          description: "",
          date: "2011"
        },
        {
          title: "Group show at Birla Academy of Art & Culture, Kolkata",
          description: "",
          date: "2010"
        },
        {
          title: "Annual Exhibition by Kala Bhavana at Academy Of Fine Arts, Kolkata.",
          description: "",
          date: "2009"
        },
        {
          title: "Group show at Nandan Art Gallery, Santiniketan.",
          description: "",
          date: "2008"
        },
        {
          title: "Group show at Nandan Art Gallery, Santiniketan.",
          description: "",
          date: "2005"
        },
        {
          title: "Annual Exhibition of Kala Bhavana, Nandan Art Gallery, Santiniketan.",
          description: "",
          date: "2004"
        },
       
        




      ];


  return (
    <div className={styles.timelinecontainer}>
      <div className={styles.timelineline}></div>
      {events.map((event, index) => (
        <div key={index} className={styles.timelineevent}>
          <div className={styles.timelinebox}>
            <h3>{event.title}</h3>
            {event.description && <p>{event.description}</p>}
            <span>{event.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;