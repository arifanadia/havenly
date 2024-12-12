import Navbar from "@/components/shared/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-full mx-auto ">
      <Navbar />
      {children}
    </main>
  );
}
