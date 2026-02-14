import Bio from "./Bio";
import ProfilePicture from "./ProfilePicture";

function SideBar() {
  return (
    <div className="h-full w-1/4 flex flex-col gap-4 ">
      <ProfilePicture />
      <Bio />
    </div>
  );
}

export default SideBar;
