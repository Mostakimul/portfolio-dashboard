import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAddBlogMutation } from '../../redux/features/blog/blogApi';
import { routesName } from '../../routes/routesName';
import { modifyPayload } from '../../utils/modifyPayload';
import MKFileInputField from '../form/MKFileInputField';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';
import MKTextEditor from '../form/MKTextEditor';

const AddBlogForm = () => {
  const [addBlog] = useAddBlogMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = modifyPayload(values);
    const toastId = toast.loading('Creation in progress...');

    try {
      const result = await addBlog(data);
      if (result.data.success) {
        toast.success('Blog added successfully', {
          id: toastId,
          duration: 2000,
        });
        navigate(`/${routesName.ALL_BLOG}`);
      }
    } catch (error) {
      toast.error('Something went wrong!', { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="text-center w-1/2">
      <MKForm onSubmit={handleSubmit} resetOnSubmit>
        <div className="flex flex-col gap-5 mb-5">
          <MKInputField
            name="title"
            label="Title"
            type="text"
            placeholder="Enter blog title"
          />
          <div className="h-72">
            <MKTextEditor name="content" />
          </div>

          <MKFileInputField name="file" label="Upload blog cover" />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Add Blog
        </button>
      </MKForm>
    </div>
  );
};

export default AddBlogForm;
