import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/contact', { name, email, message })
            .then(response => {
                setStatus('Thank you for your message!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                console.error(error);
                setStatus('Failed to send message. Please try again.');
            });
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Message"
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Contact;
