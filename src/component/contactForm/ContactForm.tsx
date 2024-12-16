"use client"
import React, { useState } from "react";
import styles from "./contact.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ name, email, message });
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="name" className={styles.label}>
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
