import { useParams } from 'react-router-dom';
import AddExperienceForm from '../../components/experience/AddExperienceForm';
import { useGetSingleExperienceQuery } from '../../redux/features/experience/experienceApi';
import { ALERTS } from '../../utils/alerts';

const AddExperience = () => {
  const { id } = useParams();
  const { data } = useGetSingleExperienceQuery(id, {
    skip: !id,
  });

  return (
    <div className="flex flex-col w-full  my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">
          {id
            ? ALERTS.PAGE_TITLE.EDIT_EXPEREIENCE
            : ALERTS.PAGE_TITLE.ADD_EXPERIENCE}
        </h1>
      </div>
      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        {data?.data ? (
          <AddExperienceForm experience={data?.data} />
        ) : (
          <AddExperienceForm />
        )}
      </div>
    </div>
  );
};

export default AddExperience;
