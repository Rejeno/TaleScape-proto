'use client";'

import Footer from "../_components/Footer";
import DashboardHeader from "./_components/DashboardHeader";
import UserStoryList from "./_components/UserStoryList";

function page() {
  return (
    <div className=" bg-pink-100">
      <div className="p-10 h-min-screen mb-12">
      <DashboardHeader />
      <UserStoryList/>
      </div>
      <Footer />
    </div>
  );
}

export default page;
