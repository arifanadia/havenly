import Navbar from "@/components/shared/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto p-6 xl:p-20 ">
      <Navbar />
      {children}
    </main>
  );
}
