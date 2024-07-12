import AddSkillForm from '../../components/skill/AddSkillForm';

const AddSkill = () => {
  return (
    <div className="flex flex-col w-full  my-5 gap-5">
      <div className="grid h-20 card bg-base-200 rounded-box place-items-center ">
        <h1 className="text-3xl font-bold">Add New Skill</h1>
      </div>
      <div className="grid card bg-base-200 rounded-box place-items-center p-5">
        <AddSkillForm />
      </div>
    </div>
  );
};

export default AddSkill;