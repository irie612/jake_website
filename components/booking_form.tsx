'use client';
import React from "react";
import { useState } from "react";

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        size: "",
        placement: "",
        budget: "",
        images: null as FileList | null,
        preferredDay: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, images: e.target.files });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Description of Design:
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Size in Inches:
                <input type="text" name="size" value={formData.size} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Placement on Body:
                <input type="text" name="placement" value={formData.placement} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Budget:
                <input type="text" name="budget" value={formData.budget} onChange={handleChange} required />
            </label>
            <br />
            <label>
                Images:
                <input type="file" name="images" onChange={handleFileChange} multiple />
            </label>
            <br />
            <label>
                Preferred Day of the Week:
                <input type="text" name="preferredDay" value={formData.preferredDay} onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Submit your Booking</button>
        </form>
    );
}

export default BookingForm;