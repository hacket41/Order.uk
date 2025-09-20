import demoProfile from "../assets/images/demoProfile.png"; // Replace with the path to your demo profile.png";
export default function Profile() {
  return (
    <>
      <div className="basis-1/2 flex gap-3 items-center bg-[#FC8A06] p-4 ">
        <img
          src={demoProfile}
          alt="Profile"
          className="w-[44px] h-[44px] rounded-full object-cover"
        />
        <p className="text-[14px] font-semibold text-black">Acyan</p>
      </div>
    </>
  );
}
