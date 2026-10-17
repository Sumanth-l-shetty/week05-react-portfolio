import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus(
      `Thank you, ${form.name}! Your message has been validated successfully.`
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>
          Get In <span>Touch</span>
        </h2>
        <p>Have an idea or want to collaborate? Let's connect.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's build something great.</h3>

          <p>
            I'm interested in web development, artificial intelligence,
            machine learning, and collaborative projects.
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            💻 GitHub Profile ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            🔗 LinkedIn Profile ↗
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn primary-btn">
            Submit Message ↗
          </button>

          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;