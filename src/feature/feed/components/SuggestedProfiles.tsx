import DropdownMenu from '../../../components/ui/others/Dropdown/DropdownMenu';
import Avatar from '../../../components/ui/others/Avatar';
import FollowButton from '../../../components/ui/buttons/FollowButton';

const PeopleUniversity = () => {
  return (
    <div className="mb-[1rem]">
      <h2 className=" text-lg font-semibold text-darkBlue">
        From University of Mumbai
      </h2>
      <div className="mt-[1rem] flex flex-col">
        {new Array(3).fill(0).map((item, index) => (
          <div key={index} className="mb-[1rem] flex items-center gap-20">
            <div className="flex items-center gap-2">
              <Avatar size={40} />
              <div className="flex flex-col">
                <h3 className="text-sm font-bold">Robert Green</h3>
                <p className="text-sm font-normal">Software Dev...</p>
              </div>
            </div>
            <FollowButton className="h-7 w-[5.5rem] text-xs font-light" />
          </div>
        ))}
      </div>
    </div>
  );
};

const SuggestedProfiles = () => {
  return (
    <div>
      <h3 className="text-lg font-bold">Suggested Profiles</h3>
      <div className="mt-[1rem] flex items-center gap-2 text-sm">
        Sort By:{' '}
        <DropdownMenu
          listItems={[
            {
              title: 'Top Creators',
              value: 'creators',
            },
            {
              title: 'Location',
              value: 'location',
            },
            {
              title: 'University',
              value: 'university',
            },
          ]}
        />
      </div>

      <div className="mt-[1rem] flex flex-col">
        {PeopleUniversity()}
        {PeopleUniversity()}
        {PeopleUniversity()}
      </div>
    </div>
  );
};

export default SuggestedProfiles;
