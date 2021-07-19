import React, { Fragment, useEffect } from "react";
import Snoopy from "../img/snoopy.png";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/actions/users.actions";
import {
  BoxUser,
  ContentUser,
  IdUser,
  ImgUser,
  TitleUser,
} from "./styles/user.styles";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);
  const isLoading = useSelector((state) => state.users.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  console.log(users);
  return (
    <Fragment>
      {isLoading && <h1>...Loading</h1>}
      {error && <h1>{error}</h1>}
      {users &&
        users.length > 0 &&
        users.map((user) => {
          return (
            <BoxUser key={user.id}>
              <ImgUser src={Snoopy}></ImgUser>
              <IdUser>{user.userId}</IdUser>
              <TitleUser>{user.title}</TitleUser>
              <ContentUser>{user.body}</ContentUser>
            </BoxUser>
          );
        })}
      {users && users.length === 0 && !isLoading && <div>No user to view</div>}
    </Fragment>
  );
};

export default Users;
