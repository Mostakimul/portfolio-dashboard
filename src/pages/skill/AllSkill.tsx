import Error from '../../components/common/Error';
import SkillTableRow from '../../components/skill/SkillTableRow';
import { useGetAllSkillQuery } from '../../redux/features/skill/skillApi';
import { SkillType } from '../../types';
import { ALERTS } from '../../utils/alerts';

const AllSkill = () => {
  const { data, isLoading, isError } = useGetAllSkillQuery(undefined);

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
    content = data?.data.map((item: SkillType) => (
      <SkillTableRow key={item._id} row={item} />
    ));
  }

  return (
    <div className="flex flex-col w-full my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">{ALERTS.PAGE_TITLE.ALL_SKILL}</h1>
      </div>

      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>Skill</th>
                <th>Icon</th>
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
export default AllSkill;
