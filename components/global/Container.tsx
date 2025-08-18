import { cn } from "@/lib/utils";

function Container({
  children,
  classname
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl xl:max-w-7xl px-8", classname)}>
      {children}
    </div>
  );
}
export default Container;
