import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  useAddExperienceMutation,
  useUpdateExperienceMutation,
} from '../../redux/features/experience/experienceApi';
import { routesName } from '../../routes/routesName';
import { ExperienceType } from '../../types';
import { ALERTS } from '../../utils/alerts';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';

type ExperienceProps = {
  experience?: ExperienceType;
};

const AddExperienceForm = ({ experience }: ExperienceProps) => {
  const defaultValues = experience
    ? {
        timeFrame: experience.timeFrame,
        role: experience.role,
        company: experience.company,
        location: experience.location,
      }
    : undefined;

  const [addExperience] = useAddExperienceMutation();
  const [updateExperience] = useUpdateExperienceMutation();
  const navigate = useNavigate();

  const handleSubmit = async (data: FieldValues) => {
    let toastId;
    try {
      toastId = toast.loading(ALERTS.UPDATING_PROGRESS);
      if (experience) {
        const result = await updateExperience({
          data,
          id: experience?._id,
        });
        if (result.data.success) {
          toast.success(ALERTS.EXPERIENCE.UPDATE_EXPERIENCE, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_EXPERIENCE}`);
        }
      } else {
        toastId = toast.loading(ALERTS.CREATION_PROGRESS);
        const result = await addExperience(data);
        if (result.data.success) {
          toast.success(ALERTS.EXPERIENCE.ADD_EXPERIENCE, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_EXPERIENCE}`);
        }
      }
    } catch (error) {
      toast.error(ALERTS.SOMETHING_WRONG, { id: toastId, duration: 2000 });
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
          {experience
            ? ALERTS.BUTTON.UPDATE_EXPERIENCE
            : ALERTS.BUTTON.ADD_EXPERIENCE}
        </button>
      </MKForm>
    </div>
  );
};

export default AddExperienceForm;
