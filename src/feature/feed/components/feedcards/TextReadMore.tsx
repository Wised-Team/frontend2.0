import { useReadMore } from '../../hooks/useReadMore';

const TextReadMore: React.FC<{
    text: string;
}> = ({ text }) => {
    const [isReadMoreOpen, handleToggleSwitch] = useReadMore();

    const textDispaly = () => {
        return !isReadMoreOpen ? `${text.slice(0, 170)}` : text;
    };
    return (
        <div className="mt-[1rem]">
            <p className='text-xs leading-6'>{textDispaly()}
                {!isReadMoreOpen && (
                    <span
                        className="cursor-pointer text-xs font-bold hover:text-lightBlue"
                        onClick={handleToggleSwitch}
                    >
                        ...See More
                    </span>
                )}
            </p>
        </div>
    );
};

export default TextReadMore;
