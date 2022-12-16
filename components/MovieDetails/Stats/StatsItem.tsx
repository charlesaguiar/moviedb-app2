interface IMovieStatsItemProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatsItem: React.FC<IMovieStatsItemProps> = ({ title, value, icon }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 items-center">
        {icon}
        <span className="text-lg font-bold">{title}</span>
      </div>
      <span>{value}</span>
    </div>
  );
};

export default StatsItem;
