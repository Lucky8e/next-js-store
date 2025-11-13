import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";

function dashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl pl-4 mb-2 ">Dashboard</h2>
      <Separator />
      <section className="grid lg:grid-cols-12 gap-12 mt-6">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 px-4">{children}</div>
      </section>
    </>
  );
}
export default dashboardLayout;
