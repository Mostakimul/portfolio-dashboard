import BlogTableRow from '../../components/blog/BlogTableRow';
import Error from '../../components/common/Error';
import { useGetAllBlogQuery } from '../../redux/features/blog/blogApi';
import { BlogType } from '../../types';

const AllBlogs = () => {
  const { data, isLoading, isError } = useGetAllBlogQuery(undefined);

  let content = null;
  if (isLoading && !isError) {
    content = <tr className="loading loading-bars loading-lg"></tr>;
  } else if (!isLoading && isError) {
    content = (
      <tr>
        <Error message="Error fetching data!" />
      </tr>
    );
  } else if (!isLoading && !isError && data?.data.length > 0) {
    content = data?.data.map((item: BlogType) => (
      <BlogTableRow key={item._id} row={item} />
    ));
  }

  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">All Blogs</h1>
      </div>

      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>Title</th>
                <th>Content</th>
                <th>Cover Image</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
