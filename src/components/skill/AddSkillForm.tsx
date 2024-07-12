import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAddSkillMutation } from '../../redux/features/skill/skillApi';
import { routesName } from '../../routes/routesName';
import { modifyPayload } from '../../utils/modifyPayload';
import MKFileInputField from '../form/MKFileInputField';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';

const AddSkillForm = () => {
  const [addSkill] = useAddSkillMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    const toastId = toast.loading('Creation in progress...');

    try {
      const result = await addSkill(data);
      if (result.data.success) {
        toast.success('Skill added successfully', {
          id: toastId,
          duration: 2000,
        });
        navigate(`/${routesName.ALL_SKILL}`);
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="text-center w-1/3">
      <MKForm onSubmit={handleSubmit} resetOnSubmit>
        <div className="flex flex-col gap-5 mb-5">
          <MKInputField
            name="skill"
            label="Skill"
            type="text"
            placeholder="Enter skill name"
          />

          <MKFileInputField name="file" label="Upload skill icon" />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Add Skill
        </button>
      </MKForm>
    </div>
  );
};

export default AddSkillForm;
