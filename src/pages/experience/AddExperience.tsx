import { useParams } from 'react-router-dom';
import AddExperienceForm from '../../components/experience/AddExperienceForm';
import { useGetSingleExperienceQuery } from '../../redux/features/experience/experienceApi';

const AddExperience = () => {
  const { id } = useParams();
  const { data } = useGetSingleExperienceQuery(id);
  return (
    <div className="flex flex-col w-full  my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">Add New Experience</h1>
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
