"use client";

import React, { useState } from 'react';
import axios from 'axios';

type Student = {
    userId: string;
    name: string;
    branch: string;
    mobile: number;
};

export default function Login() {
    const [formData, setFormData] = useState({ id: '', name: '' });
    const [students, setStudents] = useState<Student[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post<Student[]>('http://localhost:3000/login', formData)
            .then(response => {
                setStudents(response.data);
                setError(null);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setError('Invalid credentials or error occurred');
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">User ID:</label>
                    <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h2>All Students</h2>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.userId}>
                            <td>{student.userId}</td>
                            <td>{student.name}</td>
                            <td>{student.branch}</td>
                            <td>{student.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
