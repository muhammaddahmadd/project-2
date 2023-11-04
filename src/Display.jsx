function Display({ user }) {
  //   const [display, setDisplay] = useState("");
  // const { name, email, description } = user;
  if (!user) return;
  return (
    <div className="flex-col justify-center w-72 items-center ml-24 ">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.description}</p>
    </div>
  );
}
export default Display;
