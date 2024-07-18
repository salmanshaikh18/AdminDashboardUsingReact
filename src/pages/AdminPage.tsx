import Cards from "@/components/Cards";
import Charts from "@/components/Charts";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";


const AdminPage = () => {
  return (
    <div className="h-screen w-full flex bg-slate-950 text-white">
      <SideBar />
      <Header />
      <div className="__container h-[calc[100vw-70px]] w-[calc(100vw-100px)] sm:w-[calc(100vw-180px)] md:w-[calc(100vw-200px)] lg:w-[calc(100vw-250px)]">
        <Cards />
        <Charts />
      </div>
    </div>
  );
};

export default AdminPage;
