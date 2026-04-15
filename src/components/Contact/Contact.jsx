import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Magnetic from '../Magnetic/Magnetic';
import './Contact.css';

const LinkedinIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="contact-container">
      <motion.div 
        className="contact-content glass-panel"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="contact-title" variants={itemVariants}>Let's <span>Connect</span></motion.h2>
        <motion.p className="contact-desc" variants={itemVariants}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <div className="contact-links">
          <Magnetic>
            <motion.a href="mailto:kranandkamal089@gmail.com" className="contact-item interactive" variants={itemVariants}>
              <div className="contact-icon"><Mail size={20} /></div>
              <span>kranandkamal089@gmail.com</span>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="tel:+918873167803" className="contact-item interactive" variants={itemVariants}>
              <div className="contact-icon"><Phone size={20} /></div>
              <span>+91 8873167803</span>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="https://linkedin.com/in/anand-satyarthi" target="_blank" rel="noreferrer" className="contact-item interactive" variants={itemVariants}>
              <div className="contact-icon"><LinkedinIcon size={20} /></div>
              <span>linkedin.com/in/anand-satyarthi</span>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a href="https://github.com/satyarthi123" target="_blank" rel="noreferrer" className="contact-item interactive" variants={itemVariants}>
              <div className="contact-icon"><GithubIcon size={20} /></div>
              <span>github.com/satyarthi123</span>
            </motion.a>
          </Magnetic>
        </div>
      </motion.div>
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>Built with React & Vite by Anand Satyarthi. &copy; {new Date().getFullYear()}</p>
      </motion.div>
    </footer>
  );
};

export default Contact;
