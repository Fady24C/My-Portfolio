// ============================================================================
// ConnectPage.tsx — LET'S CONNECT PAGE
// Name / Email / Message form addressed to maxfady24@gmail.com.
//
// HOW MESSAGES REACH YOUR GMAIL:
//   A) mailto (current): opens the visitor's mail app with everything
//      pre-filled and addressed to your Gmail — zero setup.
//   B) Direct sending (recommended): use Formspree (free):
//      1. Sign up at https://formspree.io with maxfady24@gmail.com
//      2. Create a form, copy its endpoint like https://formspree.io/f/abcdwxyz
//      3. Replace the mailto lines in handleSubmit with:
//           await fetch('https://formspree.io/f/abcdwxyz', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(form),
//           });
// ============================================================================
import { useState } from 'react';
import type { ChangeEvent, FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { usePageTransition } from '../App';

const EMAIL = 'maxfady24@gmail.com'; // <-- your inbox

export const ConnectPage: FC = () => {
  const navigate = useNavigate();
  const playTransition = usePageTransition();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build a pre-filled email to your Gmail (see header comment for Formspree option)
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}

— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="connect-page">
      <Reveal>
        <button className="back-link" onClick={() => playTransition(() => navigate('/'))}>
          &larr; Back home
        </button>
        <p className="section-index">Let&rsquo;s Connect</p>
        <h2>
          Tell me about
          <br />
          your <span className="accent-text">idea</span>.
        </h2>
        <p className="about-lead">
          Fill in the form and your message lands directly in my inbox — I usually reply
          within 24 hours.
        </p>
      </Reveal>

      <Reveal delay={150}>
        <form className="connect-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={update}
              required
              placeholder="John Doe"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="field">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={update}
              required
              placeholder="Tell me about your project..."
            />
          </div>
          <button className="btn" type="submit">
            Send Message &rarr;
          </button>
          {sent && (
            <p className="form-note">
              Your mail app should open with the message ready — hit send there and
              I&rsquo;ll receive it.
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
};
