import s from "./Title.module.scss";

interface ITitleProps {
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};

export default Title;
