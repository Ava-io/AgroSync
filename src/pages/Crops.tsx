import ACrops from "../components/Admin/ACrops";
import FCrops from "../components/Farmer/FCrops";
import VCrops from "../components/Veterinarian/VCrops";
import Button from "../shared/Button";
import PageHeader from "../shared/PageHeader";
import { FiPlus } from "react-icons/fi";

const Crops = () => {
  const role = localStorage.getItem("role");

  const renderCrops = () => {
    if (role === "Admin") {
      return <ACrops />;
    } else if (role === "Farmer") {
      return <FCrops />;
    } else {
      return <VCrops />;
    }
  };

  return (
    <div className="bg-green-50">
      <div className="pt-7 flex justify-between">
        <div className=" px-8 ">
          <PageHeader
            title="Crops Management"
            description="Monitor and manage all your crops"
          />
        </div>
        <div>
          <Button
            icon={<FiPlus className="text-2xl" />}
            text="Add New Crop"
            color="text-white"
            borderRadius="rounded-lg"
            padding="p-3"
            bgColor="bg-green-700"
            width=""
            // onClick={() => setOpenModal(true)}
          />
        </div>
      </div>
      <div className="pt-4 ">
        <ACrops />
      </div>
    </div>
  );
};

export default Crops;
