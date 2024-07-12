import { useFieldArray, useFormContext } from 'react-hook-form';
import MKInputField from '../form/MKInputField';

const Badges = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'badges',
  });
  return (
    <div>
      <label className="label">Badges: </label>
      <div>
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col items-center gap-3 mb-5">
            <MKInputField
              name={`badges[${index}].title`}
              label={`Badge ${index + 1} Title`}
              type="text"
              placeholder="Enter badge title"
            />
            <MKInputField
              name={`badges[${index}].link`}
              label={`Badge ${index + 1} Link`}
              type="text"
              placeholder="Enter badge link"
            />
            <button
              type="button"
              className="btn w-1/3 btn-xs btn-outline btn-error"
              onClick={() => remove(index)}
            >
              Remove Badge
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="btn btn-sm btn-secondary "
          onClick={() => append({ title: '', link: '' })}
        >
          Add Badge
        </button>
      </div>
    </div>
  );
};

export default Badges;
