import React from 'react';
import './About.css';

function About() {
    return (
        <div className="container my-5">
            <div className="glass-card p-5 text-center">
                
                <h2 className="glass-title mb-4">About This App</h2>

                <p className="about-text">
                    Welcome to your personal task assistant!! 
                    <br /><br />
                    This Todo App is designed to make task management simple, fast,  
                    and visually refreshing with a clean glass-morphism interface.
                    <br /><br />
                    Create tasks, stay organized, and track your progress effortlessly.  
                    Whether you're planning your day or managing long-term goals,  
                    this app keeps everything structured and distraction-free.
                    <br /><br />
                    <strong>Stay organized. Stay focused. Stay productive.</strong>
                </p>

            </div>
        </div>
    );
}

export default About;
