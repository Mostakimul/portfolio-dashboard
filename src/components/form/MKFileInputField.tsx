import { Controller, useFormContext } from 'react-hook-form';

type TProps = {
  name: string;
  label?: string;
};

const MKFileInputField = ({ name, label }: TProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2">
              {label && <span>{label}:</span>}
              <input
                {...field}
                type={name}
                value={value?.fileName}
                onChange={(e) => onChange(e.target.files?.[0])}
                className="w-full max-w-xs"
              />
            </label>
          </div>
        );
      }}
    />
  );
};

export default MKFileInputField;
