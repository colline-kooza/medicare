import React from 'react';
import { FieldErrors } from 'react-hook-form';

export type SelectOption = {
  label: string;
  value: string;
};

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  errors?: FieldErrors;
}

export default function Select({
  label,
  options,
  errors,
  ...props
}: SelectInputProps) {
  return (
    <div className="space-y-2">
      <label 
        htmlFor={props.name} 
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        {...props}
        className={`mt-1 block w-full rounded-md border ${
          errors && errors[props.name as string] 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:border-indigo-500'
        } py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[props.name as string] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[props.name as string]?.message as string}
        </p>
      )}
    </div>
  );
}