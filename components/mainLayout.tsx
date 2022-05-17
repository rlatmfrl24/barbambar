import NavBar from "./navbar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <main className="flex-1"> {children}</main>
    </div>
  );
}
