import React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const EmailTemplate = ({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) => {
  return (
    <div className="font-sans text-gray-800 max-w-lg mx-auto p-6 border border-gray-200 rounded-lg bg-gray-50">
      <h1 className="text-2xl font-bold text-blue-500 mb-2">
        Hello, {firstName} {lastName}!
      </h1>
      <p className="text-lg text-gray-600">
        Thank you for reaching out. Here’s what we received from you:
      </p>

      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Message</h2>
        <p className="text-gray-600 leading-relaxed mt-2 whitespace-pre-line">
          {message}
        </p>
      </div>

      <div className="mt-6 text-sm text-gray-500 text-center">
        <p>From: {email}</p>
        <p>Looking forward to staying in touch!</p>
      </div>

      <footer className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
        <p>Best regards,</p>
        <p className="font-bold">Your Company Team</p>
      </footer>
    </div>
  );
};

export default EmailTemplate;
