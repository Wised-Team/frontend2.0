import React from 'react'

const chips = ["constetur",
    "con",
    "constetur",
    "coggfgn",
    "constetur",
    "constetur",
    "con",
    "coggfgn"
]

const Trending = () => {
    return (
        <div className='border-b-[1px] '>
            <h3 className='font-bold text-lg'>Trending</h3>
            <div className='mt-[1rem] flex flex-wrap gap-y-3 gap-x-6 mb-[1rem]'>
                {
                    chips.map((item, index) => (
                        <div key = {index} className='p-1  border-[1px] border-[#E5E5E5] text-sm rounded-lg'>
                            {item}
                        </div>
                    ))
                }
            </div>
            <div className='h-[1px] bg-[#E5E5E5]  right-0 left-0 absolute'>

            </div>
        </div>
    )
}

export default Trending