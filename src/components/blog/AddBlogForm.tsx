import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  useAddBlogMutation,
  useUpdateBlogMutation,
} from '../../redux/features/blog/blogApi';
import { routesName } from '../../routes/routesName';
import { BlogType } from '../../types';
import { ALERTS } from '../../utils/alerts';
import { modifyPayload } from '../../utils/modifyPayload';
import MKFileInputField from '../form/MKFileInputField';
import MKForm from '../form/MKForm';
import MKInputField from '../form/MKInputField';
import MKTextEditor from '../form/MKTextEditor';

type AddBlogFormProps = {
  blog?: BlogType;
};

const AddBlogForm = ({ blog }: AddBlogFormProps) => {
  const defaultValues = blog
    ? {
        title: blog.title,
        content: blog.content,
      }
    : undefined;

  const [addBlog] = useAddBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    let toastId;

    try {
      if (blog) {
        toastId = toast.loading(ALERTS.UPDATING_PROGRESS);
        const result = await updateBlog({ data, id: blog?._id });
        if (result.data.success) {
          toast.success(ALERTS.BLOG.UPDATE_BLOG, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_BLOG}`);
        }
      } else {
        toastId = toast.loading(ALERTS.CREATION_PROGRESS);
        const result = await addBlog(data);
        if (result.data.success) {
          toast.success(ALERTS.BLOG.ADD_BLOG, {
            id: toastId,
            duration: 2000,
          });
          navigate(`/${routesName.ALL_BLOG}`);
        }
      }
    } catch (error) {
      toast.error(ALERTS.SOMETHING_WRONG, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="text-center w-1/2">
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
            placeholder="Enter blog title"
          />
          <div className="h-72">
            <MKTextEditor name="content" />
          </div>

          <MKFileInputField name="file" label="Upload blog cover" />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          {blog ? ALERTS.BUTTON.UPDATE_BLOG : ALERTS.BUTTON.ADD_BLOG}
        </button>
      </MKForm>
    </div>
  );
};

export default AddBlogForm;
