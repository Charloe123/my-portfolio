
'use client'; 

import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          Name
          <input
            type="text"
            name="name"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block mb-4">
          Email
          <input
            type="email"
            name="email"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Your email"
            required
          />
        </label>
        <label className="block mb-4">
          Message
          <textarea
            name="message"
            className="w-full mt-1 p-2 border rounded"
            placeholder="Your message"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
