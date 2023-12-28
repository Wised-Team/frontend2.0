import { useReadMore } from '../../hooks/useReadMore';

const TextReadMore: React.FC<{
  text: string;
}> = ({ text }) => {
  const [isReadMoreOpen, handleToggleSwitch] = useReadMore();

  const textDispaly = () => {
    return !isReadMoreOpen ? `${text.slice(0, 170)}...` : text;
  };
  return (
    <div className="mt-[1rem]">
      {textDispaly()}
      {!isReadMoreOpen && (
        <span
          className="cursor-pointer text-sm font-bold hover:text-lightBlue"
          onClick={handleToggleSwitch}
        >
          Read More
        </span>
      )}
    </div>
  );
};

export default TextReadMore;
