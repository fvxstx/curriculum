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
        Email by {firstName} {lastName}!
      </h1>

      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">Message</h2>
        <p className="text-gray-600 leading-relaxed mt-2 whitespace-pre-line">
          {message}
        </p>
      </div>

      <div className="mt-6 text-sm text-gray-500 text-center">
        <p>From: {email}</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
