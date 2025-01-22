'use client';
import type { FC } from "react";
import { useForm } from 'react-hook-form';
import sendEmail from '@/utils/send_mail';

enum DaysOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
};

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    description: string;
    size: number;
    placement: string;
    budget: number;
    days: Array<DaysOfWeek>
};
  

const BookingForm: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        sendEmail(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-2">
                    <label htmlFor="firstName" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                        First Name:
                        <input
                            type='text'
                            placeholder='First Name'
                            autoComplete="given-name"
                            autoCapitalize="words"
                            className="mt-1 block w-full p-2"
                            {...register('firstName', { required: false })}
                        />
                    </label>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-2">
                    <label htmlFor="lastName" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                        Last Name:
                        <input
                            type='text'
                            placeholder='Last Name'
                            autoComplete="family-name"
                            autoCapitalize="words"
                            className="mt-1 block w-full p-2"
                            {...register('lastName', { required: false })}
                        />
                    </label>
                </div>
            </div>
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-2">
                    <label htmlFor="email" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                        Email:
                        <input
                            type='email'
                            placeholder='example@email.com'
                            autoComplete="email"
                            className="mt-1 block w-full p-2"
                            {...register('email', { required: false })}
                        />
                    </label>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-2">
                    <label htmlFor="phone" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                        Phone:
                        <input
                            type="tel"
                            autoComplete="tel"
                            placeholder='Phone'
                            className="mt-1 block w-full p-2"
                            {...register('phone', { required: false })}
                        />
                    </label>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="description" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                    Description of Design:
                    <textarea
                        placeholder='Description of Design'
                        className="mt-1 block w-full p-2 text-maire"
                        {...register('description', { required: false })}
                    />
                </label>
            </div>
            <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-2">
                    <label htmlFor="size" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                        Size (Inches):
                        <input
                            type='number'
                            placeholder='Size'
                            className="mt-1 block w-full p-2 text-maire"
                            {...register('size', { required: false })}
                        />
                    </label>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-2">
                    <label htmlFor="budget" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                        Budget (£):
                        <input
                            type='number'
                            placeholder='Budget'
                            className="mt-1 block w-full p-2 text-maire"
                            {...register('budget', { required: false })}
                        />
                    </label>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="placement" className="block font-medium text-maire dark:text-ivory focus-within:text-gold">
                    Placement on Body:
                    <input
                        type='text'
                        placeholder='Placement on Body'
                        className="mt-1 block w-full p-2 text-maire"
                        {...register('placement', { required: false })}
                    />
                </label>
            </div>
            <div className="mb-2">
                <label className="block font-medium text-maire dark:text-ivory focus-within:text-gold">Preferred Days of the Week:</label>
                <div className="flex flex-wrap flex-row -mx-2">
                    {Object.values(DaysOfWeek).map((day) => (
                        <div key={day} className="md:w-1/3 w-1/2 px-2 py-1 flex items-center">
                            <input
                                type="checkbox"
                                id={day}
                                value={day}
                                className="h-5 w-5 accent-gold"
                                {...register('days')}
                            />
                            <label htmlFor={day} className="ml-2 text-maire dark:text-ivory">
                                {day}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <button className="w-full inline-flex justify-center p-2 mb-2 text-ivory dark:text-maire bg-maire dark:bg-ivory hover:bg-gold focus:bg-gold">
                Submit your Booking
            </button>
        </form>
    );
}

export type { FormData, DaysOfWeek };
export default BookingForm;
