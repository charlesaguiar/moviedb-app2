import Logo from "@components/Logo";
import FooterBlock from "./FooterBlock";

import s from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <Logo size={110} />
      <div className={s.blocks}>
        <FooterBlock
          title="The basics"
          items={[
            "About",
            "Contact Us",
            "Support Forums",
            "API",
            "Sustem Status",
          ]}
        />
        <FooterBlock
          title="Get involved"
          items={["Contribution", "Add New Movie", "Add New TV Show"]}
        />
        <FooterBlock
          title="Community"
          items={["Guidelines", "Discussions", "Leaderboard", "Twitter"]}
        />
        <FooterBlock
          title="Legal"
          items={["Terms of Use", "API Terms of Use", "Privacy Policy"]}
        />
      </div>
    </footer>
  );
};

export default Footer;
