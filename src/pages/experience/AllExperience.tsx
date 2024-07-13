import Error from '../../components/common/Error';
import ExperinceTableRow from '../../components/experience/ExperinceTableRow';
import { useGetAllExperienceQuery } from '../../redux/features/experience/experienceApi';
import { ExperienceType } from '../../types';
import { ALERTS } from '../../utils/alerts';

const AllExperience = () => {
  /**
   * rtk  queries
   */
  const { data, isLoading, isError } = useGetAllExperienceQuery(undefined);

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
    content = data?.data.map((item: ExperienceType) => (
      <ExperinceTableRow key={item._id} row={item} />
    ));
  }

  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">
          {ALERTS.PAGE_TITLE.ALL_EXPERIENCE}
        </h1>
      </div>

      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Company</th>
                <th>Time Frame</th>
                <th>Role</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllExperience;
