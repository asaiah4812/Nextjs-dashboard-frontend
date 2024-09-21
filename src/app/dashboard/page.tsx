import Stats from "@/components/dashboard/Stats";
import UsersList from "@/components/dashboard/User";
import { AlignVerticalJustifyStart } from "lucide-react";
import React from "react";


const Dashboard = () => {
 
  return (
    <div className="text-white">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 lg:col-span-4">
          <Stats />
          {/* user list  */}
          <UsersList/>
        </div>
        <div className="lg:flex flex-col gap-4 lg:col-span-2 mt-4 hidden">
          <div className="p-2 flex flex-col rounded-md space-y-5 bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-tr ease-in duration-100 transition-all">
            <h2>🔥 Available Now</h2>
            <p>How to Use the new version of the admin dashboard?</p>
            <span>Teams 4 minutes of users</span>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus omnis architecto quidem ea molestiae non amet id,
              illum sed sapiente?
            </p>
            <button className="bg-gradient-to-br flex self-start p-2 rounded-sm from-purple-700 to-purple-400" type="button" title="available">
              <AlignVerticalJustifyStart className="text-sm" />
              Available
            </button>
          </div>
          <div className="p-2 flex flex-col rounded-md space-y-5 bg-gradient-to-r from-slate-500 to-slate-600 hover:bg-gradient-to-tr ease-in duration-100 transition-all">
            <h2>🔥 Available Now</h2>
            <p>How to Use the new version of the admin dashboard?</p>
            <span>Teams 4 minutes of users</span>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus omnis architecto quidem ea molestiae non amet id,
              illum sed sapiente?
            </p>
            <button className="bg-gradient-to-br flex self-start p-2 rounded-sm from-purple-700 to-purple-400" type="button" title="available">
              <AlignVerticalJustifyStart className="text-sm" />
              Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
