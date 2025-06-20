import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-background-100)",
          "--normal-text": "var(--color-text-100)",
          "--normal-border": "var(--color-background-300)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
