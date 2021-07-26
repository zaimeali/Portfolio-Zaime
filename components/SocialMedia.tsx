import Link from "next/link";

interface MetaData {
  url: string;
  classes?: string;
  children: JSX.Element;
}

const SocialMedia = ({ url, classes = "", children }: MetaData) => {
  return (
    <Link href={url}>
      <a target="__blank" className={classes}>
        {children}
      </a>
    </Link>
  );
};

export default SocialMedia;
