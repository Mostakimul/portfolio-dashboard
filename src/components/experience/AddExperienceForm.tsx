import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAddExperienceMutation } from '../../redux/features/experience/experienceApi';
import { ExperienceType } from '../../types';
import InputField from '../form/InputField';

interface ExperienceTypeProps {
  item?: ExperienceType;
}

const AddExperienceForm = ({ item }: ExperienceTypeProps) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: item
      ? {
          timeFrame: item.timeFrame,
          role: item.role,
          company: item.company,
          location: item.location,
        }
      : undefined,
  });
  const [addExperience] = useAddExperienceMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Data ', data);
    const toastId = toast.loading('Creation in progress...');

    try {
      const result = await addExperience(data);
      if (result.data.success) {
        toast.success('Experience added successfully', {
          id: toastId,
          duration: 2000,
        });
        reset();
        navigate('/add-experience');
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center w-1/3">
        <div className="flex flex-col gap-5 mb-5">
          <InputField
            label="company"
            type="text"
            register={register}
            placeholder="Company"
            required={true}
          />

          <InputField
            label="role"
            type="text"
            register={register}
            placeholder="Role"
            required={true}
          />
          <InputField
            label="timeFrame"
            type="text"
            register={register}
            placeholder="Time Frame"
            required={true}
          />
          <InputField
            label="location"
            type="text"
            register={register}
            placeholder="Location"
            required={true}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          {item ? 'Update Experience' : 'Add Experience'}
        </button>
      </form>
    </>
  );
};

export default AddExperienceForm;
