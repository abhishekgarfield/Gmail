import { useSelector } from "react-redux";

const Authscreen = () => {
  const user = useSelector((state) => {
    return state.userreducer.user;
  });
  console.log(user);
  return <div>{user}</div>;
};
export default Authscreen;
