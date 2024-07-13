import { useParams } from 'react-router-dom';
import AddBlogForm from '../../components/blog/AddBlogForm';
import { useGetSingleBlogQuery } from '../../redux/features/blog/blogApi';
import { ALERTS } from '../../utils/alerts';

const AddBlog = () => {
  const { id } = useParams();
  const { data } = useGetSingleBlogQuery(id, {
    skip: !id,
  });

  return (
    <div className="flex flex-col w-full  my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">
          {id ? ALERTS.PAGE_TITLE.ADD_BLOG : ALERTS.PAGE_TITLE.EDIT_BLOG}
        </h1>
      </div>
      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        {data?.data ? <AddBlogForm blog={data?.data} /> : <AddBlogForm />}
      </div>
    </div>
  );
};

export default AddBlog;
