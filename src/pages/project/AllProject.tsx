import Error from '../../components/common/Error';
import ProjectTableRow from '../../components/project/ProjectTableRow';
import { useGetAllProjectsQuery } from '../../redux/features/project/projectApi';
import { ProjectType } from '../../types';

const AllProject = () => {
  const { data, isLoading, isError } = useGetAllProjectsQuery(undefined);

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
    content = data?.data.map((item: ProjectType) => (
      <ProjectTableRow key={item._id} row={item} />
    ));
  }

  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">All Projects</h1>
      </div>

      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>Title</th>
                <th>Description</th>
                <th>Badges</th>
                <th>Cover photo</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AllProject;
