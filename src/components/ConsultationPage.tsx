import React, { useState } from 'react';
import { LoadingSpinnerIcon } from './Icons';

const ConsultationPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        if (window.location.hash !== hash) {
          window.location.hash = hash;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        if (!name || !email || !company || !message) {
            setErrorMessage('Please fill out all required fields.');
            setStatus('error');
            return;
        }

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real app, you would handle API errors here.
        // For this example, we'll assume it's always successful.
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <main className="py-20 md:py-32 bg-dark-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white-text mb-4">Thank You!</h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-light-text mb-12">
                        Your consultation request has been received. We'll be in touch within 24 hours to schedule a meeting.
                    </p>
                    <a
                        href="#"
                        onClick={(e) => handleNavClick(e, '#')}
                        className="inline-block px-8 py-4 bg-accent text-white-text font-semibold rounded-md hover:bg-accent-hover transition-colors text-lg shadow-lg shadow-accent/20"
                    >
                        Back to Home
                    </a>
                </div>
            </main>
        );
    }
    
    return (
        <main id="consultation" className="py-20 bg-dark-bg animate-fade-in-up">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-text">Book a Free Consultation</h2>
                    <p className="text-lg text-light-text mt-4">Tell us about your project and we'll get back to you shortly.</p>
                </div>
                <div className="bg-dark-card border border-dark-border rounded-lg p-8 md:p-10">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-light-text mb-2">Full Name</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-light-text mb-2">Company Name</label>
                                <input type="text" id="company" value={company} onChange={e => setCompany(e.target.value)} required className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition" />
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-light-text mb-2">Email</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-light-text mb-2">Phone Number <span className="text-gray-400">(Optional)</span></label>
                                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition" />
                            </div>
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-sm font-medium text-light-text mb-2">Tell us about your project</label>
                            <textarea id="message" rows={5} value={message} onChange={e => setMessage(e.target.value)} required className="w-full bg-dark-bg border border-dark-border rounded-md px-3 py-2 text-white-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition" placeholder="What problem are you trying to solve? What are your goals?"></textarea>
                        </div>
                        {status === 'error' && <p className="text-red-400 text-center mb-4">{errorMessage}</p>}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full md:w-auto inline-flex justify-center items-center px-8 py-3 bg-accent text-white-text font-semibold rounded-md hover:bg-accent-hover transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <LoadingSpinnerIcon className="animate-spin h-5 w-5 mr-3" />
                                        Submitting...
                                    </>
                                ) : 'Request Consultation'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default ConsultationPage;