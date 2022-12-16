import Image from "next/image";
import Link from "next/link";
import LogoMedia from "../../public/logo.png";

interface ILogoProps {
  size?: number;
  displaySub?: boolean;
}

const Logo: React.FC<ILogoProps> = ({ size = 50, displaySub = false }) => {
  return (
    <Link href="/">
      <a>
        <div className="flex flex-col items-center justify-center align-center">
          <Image src={LogoMedia} alt="Logo" width={size} height={size} />
          {displaySub ? (
            <div className="flex flex-col items-center justify-center">
              <div className="text-secondary font-bold tracking-widest">
                LOSER
              </div>
            </div>
          ) : null}
        </div>
      </a>
    </Link>
  );
};

export default Logo;
