import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Your EmailJS user ID
    const userID = "9qL8gXuppFxYAZtRE";

    // Send email using EmailJS
    emailjs
      .sendForm("service_695loxi", "template_tuqphcs", e.target, userID)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset the form after successful submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
        }
      );
  };

  return (
    <div className="bodyContainer">
      <div className="body">
        <h1>Let's talk</h1>
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Subject*</label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submitBtn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
