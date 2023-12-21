import { ImageIcon } from "."

const CustomIconButton:React.FC<{
    url:string;
    text?:string;
}> = ({url,text}) => {
  return (
    <div className="rounded-md px-2 py-1 justify-between text-[15px]">
        <ImageIcon url={url}/>
        <h5>{text}</h5>
    </div>
  )
}

export default CustomIconButton