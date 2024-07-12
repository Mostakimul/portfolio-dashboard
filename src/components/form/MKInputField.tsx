import { HTMLInputTypeAttribute } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type TInputFieldProps = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

const MKInputField: React.FC<TInputFieldProps> = ({
  name,
  label,
  type,
  placeholder = 'Type here',
  required,
  disabled,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="form-control w-full">
          <label className="input input-bordered flex items-center gap-2">
            {label}:
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className="w-full max-w-xs"
              required={required}
              disabled={disabled}
            />
          </label>
          {error && (
            <div className="label">
              <span className="label-text-alt text-rose-700">
                {error?.message}
              </span>
            </div>
          )}
        </div>
      )}
    />
  );
};

export default MKInputField;
