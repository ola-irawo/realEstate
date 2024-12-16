import React from 'react';
import styles from './testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed',
      feedback: "Working with Damilola was a delight! Her team handled the entire selling process with utmost professionalism. Highly recommend their expertise and dedication",
    },
    {
      name: 'Grace',
      feedback: "Outstanding experience with this real estate agency! Their knowledge of the market and attention to detail helped us find the perfect home.",
    },
    {
      name: 'Chike',
      feedback:"She guided us through every step, and we couldn't be happier with the outcome. Thank you for making our dream a reality.",
    },
    {
      name: 'Michael',
      feedback: "She guided us through every step, and we couldn't be happier with the outcome. Thank you for making our dream a reality.",
    },
  ];

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.heading}>What Our Clients Say</h2>
        <ul className={styles.testimonialList}>
          {testimonials.map((testimonial, index) => (
            <li key={index} className={styles.testimonialItem}>
              <p className={styles.feedback}>&quot;{testimonial.feedback}&quot;</p>
              <h3 className={styles.name}>- {testimonial.name}</h3>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Testimonials;
