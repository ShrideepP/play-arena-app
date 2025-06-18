import { Fragment } from "react";
import brandMark from "@/assets/brand-mark.svg";

interface AppHeader {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const AppHeader = ({
  startAdornment = <Fragment />,
  endAdornment = <Fragment />,
}: AppHeader) => {
  return (
    <header className="bg-background-100 border-b-background-300 shadow-down sticky top-0 flex h-fit w-full items-center justify-between border-b px-5 pt-5 pb-3">
      <div className="flex h-fit grow justify-start">{startAdornment}</div>

      <div className="flex h-fit grow justify-center">
        <img src={brandMark} alt="Company logo" className="h-7 w-auto" />
      </div>

      <div className="flex h-fit grow justify-end">{endAdornment}</div>
    </header>
  );
};

export default AppHeader;
