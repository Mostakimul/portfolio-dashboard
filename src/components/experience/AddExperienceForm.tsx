import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAddExperienceMutation } from '../../redux/features/experience/experienceApi';
import { routesName } from '../../routes/routesName';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';

const defaultValues = {
  timeFrame: '',
  role: '',
  company: '',
  location: '',
};

const AddExperienceForm = () => {
  const [addExperience] = useAddExperienceMutation();
  const navigate = useNavigate();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Creation in progress...');

    try {
      const result = await addExperience(data);
      if (result.data.success) {
        toast.success('Experience added successfully', {
          id: toastId,
          duration: 2000,
        });
        navigate(`/${routesName.ALL_EXPERIENCE}`);
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="text-center w-1/3">
      <MKForm
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
        resetOnSubmit
      >
        <div className="flex flex-col gap-5 mb-5">
          <MKInputField
            name="company"
            label="Company"
            type="text"
            placeholder="Enter your company name"
            required={true}
          />

          <MKInputField
            name="role"
            label="Role"
            type="text"
            placeholder="Enter your role"
            required={true}
          />
          <MKInputField
            name="timeFrame"
            label="Time Frame"
            type="text"
            placeholder="Enter your time frame"
            required={true}
          />
          <MKInputField
            name="location"
            label="Location"
            type="text"
            placeholder="Enter company location"
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Add Experience
        </button>
      </MKForm>
    </div>
  );
};

export default AddExperienceForm;
