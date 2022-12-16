import Image from "next/image";

import { cn } from "@utils/style";
import s from "./Avatar.module.scss";

interface IAvatarProps {
  initial?: string;
  username?: string;
  src?: string;
  size?: number;
  onClick?: (...params: any) => void;
  className?: string;
}

const Avatar: React.FC<IAvatarProps> = ({
  initial,
  username,
  src,
  size = 50,
  onClick,
  className = "",
}) => {
  return (
    <div className={s.container}>
      <div
        className={cn(s.avatar, className)}
        style={{ width: size, height: size }}
        onClick={onClick}
      >
        {src ? (
          <Image
            src={src}
            alt="User avatar"
            objectFit="contain"
            objectPosition="center"
            width={size}
            height={size}
            layout="fixed"
            className="rounded-full"
          />
        ) : (
          initial
        )}
      </div>
      {username ? <span className={s.username}>{username}</span> : null}
    </div>
  );
};

export default Avatar;
