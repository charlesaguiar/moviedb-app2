import s from "../Footer.module.scss";

interface IFooterBlockProps {
  title: string;
  items: string[];
}

const FooterBlock: React.FC<IFooterBlockProps> = ({ title, items }) => {
  return (
    <div className={s.block}>
      <span className="block__title">{title.toUpperCase()}</span>
      {items.map((i) => (
        <a key={i}>{i}</a>
      ))}
    </div>
  );
};

export default FooterBlock;
