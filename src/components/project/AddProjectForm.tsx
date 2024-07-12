import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAddProjectMutation } from '../../redux/features/project/projectApi';
import { routesName } from '../../routes/routesName';
import { modifyPayload } from '../../utils/modifyPayload';
import MKFileInputField from '../form/MKFileInputField';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';
import Badges from './Badges';

const AddProjectForm = () => {
  const [addProject] = useAddProjectMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = modifyPayload(values);
    const toastId = toast.loading('Creation in progress...');

    try {
      const result = await addProject(data);
      if (result.data.success) {
        toast.success('Project added successfully', {
          id: toastId,
          duration: 2000,
        });
        navigate(`/${routesName.ALL_PROJECT}`);
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
          Add Project
        </button>
      </MKForm>
    </div>
  );
};
export default AddProjectForm;
