"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:rakeshrvr1998@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-12 md:px-10">
      <h3 className="uppercase tracking-[20px] text-2xl text-center mb-6">
        Contact Me
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 max-w-3xl w-full">
        <input {...register('name')} placeholder="Name" className="contactInput" type="text" required />
        <input {...register('email')} placeholder="Email" className="contactInput" type="email" required />
        <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" required />
        <textarea {...register('message')} placeholder="Message" className="contactInput" rows={4} required />
        <button type="submit" className="bg-white py-3 px-6 rounded-md text-black font-bold text-lg hover:bg-gray-300 transition duration-300 ease-in-out">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
