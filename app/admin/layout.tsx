"use client";
import AdminProtected from "../hooks/adminProtected";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import DashboardHero from '@/app/components/Admin/DashboardHero'

// import "@app/globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

    <AdminProtected>
      <Heading
        title="Havan Academy - Admin"
        description="Havan Academy is a platform for students to learn and get help from teachers"
        keywords="Programming,Freshman, Exam prep"
      />
      <div className="flex min-h-screen">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        
        </div>
        <div className="w-[85%]">
          {/* <DashboardHero isDashboard={true} /> */}
          {children}
        </div>
      </div>
    </AdminProtected>
  </div>
  );
}
