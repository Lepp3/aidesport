export type UserData = {
  username?: string;
  password?: string;
};

export type UserContextValue = {
  authData: UserData;
  userLoginHandler: (data: UserData) => void;
  userLogoutHandler: () => void;
};
