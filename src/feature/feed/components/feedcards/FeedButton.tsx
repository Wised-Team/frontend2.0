type FeedButtonProps = {
  clickedIcon?: any;
  icon: any;
  isClicked?: boolean;
  handleClick: () => void;
};

const FeedButton: React.FC<FeedButtonProps> = ({
  clickedIcon,
  icon,
  isClicked,
  handleClick,
}) => {
  return (
    <button onClick={handleClick}>
      <img src={isClicked ? clickedIcon : icon} alt="icon" className="w-6" />
    </button>
  );
};

export default FeedButton;
