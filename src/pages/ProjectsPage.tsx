import { CustomProjectsView } from "../components/custom/CustomProjectsView";
import { CustomTitle } from "@/components/custom/CustomTitle";

export const ProjectsPage = () => {
  return (

    <div className="relative z-10 w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center px-4 md:px-12 pt-20 md:pt-20">

      <CustomTitle
      titleWhite="SELECTED"
      titleColors="WORKS"
      subtitle="// SCROLL TO EXPLORE "
      className="w-full max-w-7xl mb-8 flex items-end justify-between border-b border-white/10 pb-4"
      />

      <div className="w-full max-w-315"> 
         <CustomProjectsView />
      </div>

    </div>
  );
};

export default ProjectsPage;