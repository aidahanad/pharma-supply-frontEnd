import { useParams } from "react-router-dom";
import OrdersTable from "../../components/Fournisseurs/Orders";

const SidePanel = () => {
  const { id } = useParams();
  console.log(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      {id === JSON.parse(localStorage.getItem("user"))?._id && (
        <div className="flex flex-col gap-16">
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold mb-[-55px]">
            Mes commandes
          </h3>
          <OrdersTable />
        </div>
      )}
      {/* <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold mb-[-55px]">
        Mes commandes
      </h3> */}
    </div>
  );
};

export default SidePanel;
