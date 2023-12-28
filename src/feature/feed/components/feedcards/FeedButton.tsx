
type FeedButtonProps = {
    clickedIcon: any,
    unClickedIcon: any,
    isClicked: boolean,
    handleClick: () => void
}

const FeedButton: React.FC<FeedButtonProps> = ({
    clickedIcon, unClickedIcon, isClicked, handleClick
}) => {
    return (
        <button onClick={handleClick}>
            <img src={isClicked ? clickedIcon : unClickedIcon} alt="icon" className="w-6"/>
        </button>
    )
}

export default FeedButton