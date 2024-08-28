// src/app/kainos/EmailInput.tsx
import React from 'react';

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-zinc-100 mb-1">
        El. paštas:
      </label>
      <input
        id="email"
        type="email"
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-zinc-700 bg-zinc-800 text-zinc-100 rounded-md"
        placeholder="Įveskite savo el. paštą"
        required
      />
    </div>
  );
};

export default EmailInput;