import React, { useRef, useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert'; // Assuming your hook supports TS or you may add types.
import Alert from '../components/Alert';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<FormValues>({ name: '', email: '', message: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID as string,
                {
                    from_name: form.name,
                    to_name: 'JavaScript Mastery',
                    from_email: form.email,
                    to_email: 'sujata@jsmastery.pro',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY as string,
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        text: 'Thank you for your message 😃',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert();
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, 3000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        text: "I didn't receive your message 😢",
                        type: 'danger',
                    });
                },
            );
    };

    return (
        <section className="c-space my-5" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="contact-container">
                    <h3 className="text-red-900 text-5xl">Let's talk</h3>
                    <p className="text-lg text-red-800 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
