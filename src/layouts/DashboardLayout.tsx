import NavbarComponent from "../components/Navbar/NavbarComponent";
import Sidebar from "../shared/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const { pathname } = useLocation();

  console.log("Current Pathname:", pathname);

  const routeTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/livestock": "Livestock",
    "/dashboard/crops": "Crops",
    "/dashboard/resources": "Resources",
    "/dashboard/aianalytics": "AI Analytics",
    "/dashboard/diseasedetection": "Disease Detection",
    "/dashboard/notification": "Notifications",
    "/dashboard/aiassistant": "AI Assistant",
    "/dashboard/reports": "Reports",
    "/dashboard/profile": "Profile",
  };

  const pathTitle = routeTitles[pathname];

  return (
    <div className="flex ">
      <div className="md:flex hidden">
        <Sidebar />
      </div>
      <div className="flex-1 ">
        <NavbarComponent />

        <div className="px-6 h-full bg-green-50">
          <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
