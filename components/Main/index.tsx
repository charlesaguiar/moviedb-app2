import s from "./Main.module.scss";

interface IMainProps {
  children: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {
  return <main className={s["main-container"]}>{children}</main>;
};

export default Main;
