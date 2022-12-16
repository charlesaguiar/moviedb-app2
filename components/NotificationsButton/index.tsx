import { ImBell } from "react-icons/im";

interface INotificationsButtonProps {
  notifications?: number;
  showLabel?: boolean;
  iconSize?: number;
  classNames?: string;
}

const NotificationsButton: React.FC<INotificationsButtonProps> = ({
  notifications = 0,
  showLabel = false,
  iconSize = 24,
  classNames = "",
}) => {
  return (
    <div className={classNames}>
      <div className="relative">
        <ImBell size={iconSize} />
        {notifications > 0 ? (
          <div className="absolute bottom-[60%] left-[20px] text-sm bg-red-600 rounded-full p-1">
            {notifications}
          </div>
        ) : null}
      </div>
      {showLabel ? <span>Notifications</span> : null}
    </div>
  );
};

export default NotificationsButton;
