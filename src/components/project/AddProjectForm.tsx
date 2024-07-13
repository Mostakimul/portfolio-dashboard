import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  useAddProjectMutation,
  useUpdateProjectMutation,
} from '../../redux/features/project/projectApi';
import { routesName } from '../../routes/routesName';
import { ProjectType } from '../../types';
import { ALERTS } from '../../utils/alerts';
import { modifyPayload } from '../../utils/modifyPayload';
import MKFileInputField from '../form/MKFileInputField';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';
import Badges from './Badges';

type AddProjectFormProps = {
  project?: ProjectType;
};

const AddProjectForm = ({ project }: AddProjectFormProps) => {
  const defaultValues = project
    ? {
        title: project.title,
        description: project.description,
        badges: project.badges,
        imageSrc: project.imageSrc,
      }
    : undefined;

  const [addProject] = useAddProjectMutation();
  const [updateProject] = useUpdateProjectMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    let toastId;

    try {
      if (project) {
        toastId = toast.loading(ALERTS.UPDATING_PROGRESS);
        const result = await updateProject({ data, id: project._id });
        if (result.data.success) {
          toast.success(ALERTS.PROJECT.UPDATE_PROJECT, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_PROJECT}`);
        }
      } else {
        toastId = toast.loading(ALERTS.CREATION_PROGRESS);
        const result = await addProject(data);
        if (result.data.success) {
          toast.success(ALERTS.PROJECT.ADD_PROJECT, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_PROJECT}`);
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
            name="title"
            label="Title"
            type="text"
            placeholder="Enter project title"
          />
          <MKInputField
            name="description"
            label="Description"
            type="text"
            placeholder="Enter project description"
          />

          <MKFileInputField name="file" label="Upload project photo" />
          <Badges />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          {project ? ALERTS.BUTTON.UPDATE_PROJECT : ALERTS.BUTTON.ADD_PROJECT}
        </button>
      </MKForm>
    </div>
  );
};
export default AddProjectForm;
