import Image from "next/image";

interface IFlagProps {
  country: string;
  width?: number;
  height?: number;
}

const Flag: React.FC<IFlagProps> = ({ country, width = 16, height = 12 }) => {
  return (
    <Image
      src={`https://flagcdn.com/${width}x${height}/${country.toLowerCase()}.png`}
      width={width}
      height={height}
      alt="Country flag"
      objectFit="cover"
      objectPosition="center"
      layout="fixed"
    />
  );
};

export default Flag;
