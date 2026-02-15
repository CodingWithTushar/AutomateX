import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="h-screen w-screen flex flex-col bg-muted">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
