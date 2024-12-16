"use client";
import React, { useState } from "react";
import styles from "./book-inspection.module.css";

interface BookInspectionProps {
  propertyLink: string;
  title: string,
  type: string
  setOpenBookInspection: (value: boolean) => void;
}

const BookInspection: React.FC<BookInspectionProps> = ({ propertyLink, setOpenBookInspection, title, type}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState(
    `Hello, I am interested in scheduling an inspection for the property, "${title}". 
    Here are the details:
    - Property Link: ${propertyLink}
    - Preferred Date: ${date}
    - Preferred Time: ${time}
    - Preferred Tyoe: For ${type}
    `
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = +2348156959983

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
        phoneNumber
      )}&text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, '_blank');
    setOpenBookInspection(false)
  };

  return (
    <aside className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={() => setOpenBookInspection(false)}>
          &times;
        </button>
        <h2>Book Inspection</h2>
        <p>Property Link: <a href={propertyLink} target="_blank" rel="noopener noreferrer">{propertyLink}</a></p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>
          <label>
            Message: (You can edit the message below)
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add any additional information..."
            />
          </label>
          
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </aside>
  );
};

export default BookInspection;
