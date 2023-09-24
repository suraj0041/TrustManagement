export default function Users() {
  // const UserData=()={

  // }
  const CurrentUsers = () => {
    return (
      <>
        <div></div>
      </>
    );
  };
  return (
    <>
      Users{process.env.SERVER_URL}
      <CurrentUsers />
    </>
  );
}
