import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  useAddSkillMutation,
  useUpdateSkillMutation,
} from '../../redux/features/skill/skillApi';
import { routesName } from '../../routes/routesName';
import { SkillType } from '../../types';
import { ALERTS } from '../../utils/alerts';
import { modifyPayload } from '../../utils/modifyPayload';
import MKFileInputField from '../form/MKFileInputField';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';

type AddSkillForm = {
  skill?: SkillType;
};

const AddSkillForm = ({ skill }: AddSkillForm) => {
  const defaultValues = skill
    ? {
        skill: skill?.skill,
      }
    : undefined;

  const [addSkill] = useAddSkillMutation();
  const [updateSkill] = useUpdateSkillMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    let toastId;

    try {
      if (skill) {
        toastId = toast.loading(ALERTS.UPDATING_PROGRESS);
        const result = await updateSkill({ data, id: skill._id });
        if (result.data.success) {
          toast.success(ALERTS.SKILL.UPDATE_SKILL, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_SKILL}`);
        }
      } else {
        toastId = toast.loading(ALERTS.CREATION_PROGRESS);
        const result = await addSkill(data);
        if (result.data.success) {
          toast.success(ALERTS.SKILL.ADD_SKILL, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_SKILL}`);
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
            name="skill"
            label="Skill"
            type="text"
            placeholder="Enter skill name"
          />

          <MKFileInputField name="file" label="Upload skill icon" />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          {skill ? ALERTS.BUTTON.UPDATE_SKILL : ALERTS.BUTTON.ADD_SKILL}
        </button>
      </MKForm>
    </div>
  );
};

export default AddSkillForm;
