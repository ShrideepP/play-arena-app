import { forwardRef, useId, Fragment } from "react";
import { cn } from "@/lib/utils";

interface InputGroupProps {
  children: React.ReactNode;
}

const InputGroup = ({ children }: InputGroupProps) => {
  return (
    <div className="shadow-down [&>div]:border-background-300 rounded-xl [&>div]:border-r [&>div]:border-l [&>div:first-child]:rounded-t-xl [&>div:first-child]:border-t [&>div:first-child]:border-b [&>div:last-child]:rounded-b-xl [&>div:not(:first-child)]:border-b">
      {children}
    </div>
  );
};

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  endAdornment?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, endAdornment = <Fragment />, ...props }, ref) => {
    const internalId = useId();

    const handleDivClick = () => {
      if (ref && typeof ref === "object" && ref.current) ref.current.focus();
    };

    return (
      <div
        role="textbox"
        onClick={handleDivClick}
        className={cn(
          "group bg-background-100 relative grid h-14 w-full place-items-center gap-1 px-3 py-2 transition-all duration-200 ease-in-out",
          "focus-within:border-primary-100 focus-within:z-10 focus-within:border",
        )}
      >
        <div className="z-50 order-2 flex w-full items-center justify-between">
          <input
            {...props}
            ref={ref}
            id={internalId}
            placeholder=" "
            data-slot="input"
            className={cn(
              "peer text-label! text-text-100 grow font-medium placeholder-transparent outline-none",
              "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
              className,
            )}
          />

          <div className="hidden shrink-0 peer-focus:block peer-[:not(:placeholder-shown)]:block">
            {endAdornment}
          </div>
        </div>

        <label
          htmlFor={internalId}
          className={cn(
            "text-text-200! text-label absolute inset-0 left-3 order-1 flex w-full items-center font-medium transition-all duration-200 ease-in-out",
            "group-focus-within:text-p-xs group-focus-within:static group-focus-within:font-normal",
            "group-has-[input:not(:placeholder-shown)]:text-p-xs group-has-[input:not(:placeholder-shown)]:static group-has-[input:not(:placeholder-shown)]:font-normal",
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);

Input.displayName = "Input";

export { InputGroup, Input };
