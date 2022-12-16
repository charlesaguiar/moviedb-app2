import { RiStarFill } from "react-icons/ri";

interface IReviewBadgeProps {
  stars: number;
}

const ReviewBadge: React.FC<IReviewBadgeProps> = ({ stars }) => {
  return (
    <div className="flex gap-2 px-2 py-1 items-center rounded-lg bg-gray-400 max-w-fit">
      <RiStarFill size={18} color="white" />
      <span className="text-sm">{`${stars}/10`}</span>
    </div>
  );
};

export default ReviewBadge;
