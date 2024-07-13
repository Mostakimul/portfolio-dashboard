import { useParams } from 'react-router-dom';
import AddSkillForm from '../../components/skill/AddSkillForm';
import { useGetSingleSkillQuery } from '../../redux/features/skill/skillApi';
import { ALERTS } from '../../utils/alerts';

const AddSkill = () => {
  const { id } = useParams();
  const { data } = useGetSingleSkillQuery(id, {
    skip: !id,
  });

  return (
    <div className="flex flex-col w-full  my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">
          {id ? ALERTS.PAGE_TITLE.EDIT_SKILL : ALERTS.PAGE_TITLE.ADD_SKILL}
        </h1>
      </div>
      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        {data?.data ? <AddSkillForm skill={data?.data} /> : <AddSkillForm />}
      </div>
    </div>
  );
};

export default AddSkill;
