
"use client";

import React, { useState } from 'react';
import axios from 'axios';

type Student = {
    userId: string;
    name: string;
    branch: string;
    mobile: number;
};

export default function Signup() {
    const [formData, setFormData] = useState<Student>({
        userId: '',
        name: '',
        branch: '',
        mobile: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'mobile' ? Number(value) : value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', formData);
            alert('User signed up successfully');
            // Reset form after successful submission
            setFormData({ userId: '', name: '', branch: '', mobile: 0 });
            // Fetch and display updated list of students
            fetchStudents();
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:3000/students');
            console.log('Fetched students:', response.data);
            // Handle displaying fetched student data as needed
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userId">User ID:</label>
                    <input
                        type="text"
                        id="userId"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
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
                    <label htmlFor="branch">Branch:</label>
                    <input
                        type="text"
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                        type="number"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile === 0 ? '' : formData.mobile}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
