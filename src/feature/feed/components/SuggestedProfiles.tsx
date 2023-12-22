import React from 'react'
import DropdownMenu from '../../../components/ui/others/Dropdown/DropdownMenu'
import Avatar from '../../../components/ui/others/Avatar'
import FollowButton from '../../../components/ui/buttons/FollowButton'




const PeopleUniversity = () => {
    return (
        <div className='mb-[1rem]'>
            <h2 className=' text-darkBlue font-semibold text-lg'>From University of Mumbai</h2>

            <div className='flex flex-col mt-[1rem]'>
                {
                    new Array(3).fill(0).map((item, index) => (
                        <div key = {index} className='flex items-center gap-20 mb-[1rem]'>
                            <div className='flex items-center gap-2'>
                                <Avatar size={40} />
                                <div className='flex flex-col'>
                                    <h3 className='font-bold text-sm'>Robert Green</h3>
                                    <p className='font-normal text-sm'>Software Dev...</p>
                                </div>
                            </div>
                            <FollowButton className='w-[5.5rem] h-7 font-light text-xs' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


const SuggestedProfiles = () => {
    return (
        <div>
            <h3 className='font-bold text-lg'>Suggested Profiles</h3>
            <div className='flex items-center gap-2 mt-[1rem] text-sm'>
                Sort By: <DropdownMenu listItems={[{
                    title: 'Top Creators',
                    value: 'creators',
                },
                {
                    title: 'Location',
                    value: 'location',
                },
                {
                    title: 'University',
                    value: 'university'
                }]} />
            </div>


            <div className='flex flex-col mt-[1rem]'>
                {PeopleUniversity()}
                {PeopleUniversity()}
                {PeopleUniversity()}
            </div>
        </div>
    )
}

export default SuggestedProfiles