import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import brandMark from "@/assets/brand-mark.svg";

interface AppHeaderProps {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const AppHeader = ({
  startAdornment = <Fragment />,
  endAdornment = <Fragment />,
}: AppHeaderProps) => {
  return (
    <header className="bg-background-100 border-b-background-300 shadow-down sticky top-0 grid h-[4.5rem] w-full grid-cols-3 items-center border-b px-5 pt-5 pb-3">
      <div className="flex justify-start">{startAdornment}</div>

      <div className="flex justify-center">
        <Link to="/">
          <img src={brandMark} alt="Company logo" className="h-7 w-auto" />
        </Link>
      </div>

      <div className="flex justify-end">{endAdornment}</div>
    </header>
  );
};

export { AppHeader };
