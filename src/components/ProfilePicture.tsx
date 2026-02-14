import profilePicture from "../assets/profile.jpeg";

function ProfilePicture() {
  return (
    <img
      className="rounded-2xl w-full h-96 object-cover"
      src={profilePicture}
    />
  );
}

export default ProfilePicture;
