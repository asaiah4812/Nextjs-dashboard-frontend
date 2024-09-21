import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <div className="grid grid-cols-6 gap-4">
            <div className="h-[100%] md:col-span-2 lg:col-span-1">
            <Sidebar/>
            </div>
            <div className="col-span-6 md:col-span-4 gap-4 lg:col-span-5 p-2 lg:p-4">
            <Navbar/>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    </main>
  );
}
