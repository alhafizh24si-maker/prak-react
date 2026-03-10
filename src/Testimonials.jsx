import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    role: 'Food Blogger',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    comment: 'Makanan di FlavorFusion luar biasa! Rasa authentic dengan presentasi yang cantik. Pelayanan juga sangat ramah dan cepat. Recommended banget!',
    date: '2 minggu lalu'
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'Pengusaha',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment: 'Tempatnya cozy banget untuk dinner bareng keluarga. Menunya variatif dan harganya terjangkau. Nasi gorengnya juara!',
    date: '1 bulan lalu'
  },
  {
    id: 3,
    name: 'Diana Putri',
    role: 'Mahasiswa',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
    comment: 'Suki banget sama dessertnya! Es krimnya creamy dan browniesnya lembut. Pasti bakal balik lagi buat cobain menu lain.',
    date: '3 minggu lalu'
  },
  {
    id: 4,
    name: 'Ahmad Rizky',
    role: 'Chef',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    rating: 5,
    comment: 'Sebagai chef, saya appreciate banget sama kualitas bahan dan teknik masaknya. Beef steaknya medium rare sempurna!',
    date: '5 hari lalu'
  },
  {
    id: 5,
    name: 'Linda Kusuma',
    role: 'Traveler',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    rating: 5,
    comment: 'Hidden gem di kota ini! Suasananya instagramable banget, cocok buat foto-foto. Makanannya enak semua gak ada yang mengecewakan.',
    date: '1 minggu lalu'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? 'star-filled' : 'star-empty'} 
      />
    ));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Apa Kata Mereka</h2>
          <p className="testimonials-subtitle">
            Pengalaman pelanggan yang telah menikmati hidangan kami
          </p>
        </motion.div>

        <div className="testimonials-container">
          {/* Stats Section */}
          <motion.div 
            className="testimonials-stats"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <h3>4.8</h3>
                <p>Rating Rata-rata</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <h3>500+</h3>
                <p>Pelanggan Puas</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-info">
                <h3>250+</h3>
                <p>Ulasan 5 Bintang</p>
              </div>
            </div>
          </motion.div>

          {/* Main Testimonial Carousel */}
          <div className="testimonial-carousel">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="testimonial-card"
              >
                <FaQuoteLeft className="quote-icon" />
                <div className="testimonial-header">
                  <img 
                    src={testimonialsData[currentIndex].image} 
                    alt={testimonialsData[currentIndex].name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h3>{testimonialsData[currentIndex].name}</h3>
                    <p className="testimonial-role">{testimonialsData[currentIndex].role}</p>
                    <div className="testimonial-rating">
                      {renderStars(testimonialsData[currentIndex].rating)}
                    </div>
                  </div>
                </div>
                <p className="testimonial-comment">"{testimonialsData[currentIndex].comment}"</p>
                <p className="testimonial-date">{testimonialsData[currentIndex].date}</p>
              </motion.div>
            </AnimatePresence>

            <div className="carousel-controls">
              <button 
                className="carousel-btn prev-btn" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <div className="carousel-dots">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                className="carousel-btn next-btn" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid (Alternative Layout) */}
        <motion.div 
          className="testimonials-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="grid-title">Testimonial Lainnya</h3>
          <div className="grid-container">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="grid-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid-card-header">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <div className="grid-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p>"{testimonial.comment.substring(0, 100)}..."</p>
                <span className="read-more">Baca Selengkapnya →</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add Testimonial CTA */}
        <motion.div 
          className="testimonials-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Sudah Mencoba Menu Kami?</h3>
            <p>Bagikan pengalaman kuliner Anda dan dapatkan diskon 10% untuk kunjungan berikutnya!</p>
            <button className="btn cta-btn">Tulis Testimonial</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;