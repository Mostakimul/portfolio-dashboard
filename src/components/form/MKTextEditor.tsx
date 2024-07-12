import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ReactQuill from 'react-quill';

type TInputFieldProps = {
  name: string;
};

const tollbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ header: 1 }, { header: 2 }],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }],

  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ['clean'],
];

const module = {
  toolbar: tollbarOptions,
};

const MKTextEditor: React.FC<TInputFieldProps> = ({ name }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <ReactQuill
          {...field}
          modules={module}
          theme="snow"
          className="h-4/6"
        />
      )}
    />
  );
};

export default MKTextEditor;
