import React from "react"

interface ILayerButton {
    text: string
}

const LayerdButton: React.FC<ILayerButton> = ({
    text
}) => {
    return (
        <div className="relative w-[200px] group transition-transform duration-400">
            <button className={`bg-lighterBlue w-full py-4 border-[2px] rounded-md border-black font-bold absolute z-[10]`}>
                {text}
            </button>
            <div className="w-[100%] h-[60px] bg-lightBlue border-[2px] rounded-md border-black absolute z-[8] group-hover:translate-x-[5px] group-hover:translate-y-[6px] transition-transform duration-400">

            </div>
            <div className="w-[100%] h-[60px] bg-darkBlue border-[2px] rounded-md border-black absolute z-[5] group-hover:translate-x-[10px] group-hover:translate-y-[12px] transition-transform duration-400">

            </div>
        </div>
    )
}

export default LayerdButton