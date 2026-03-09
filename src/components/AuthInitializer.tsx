import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authListener, getUser } from "../services/Auth";
import { storeUser, clearUser } from "../state/user/userSlice";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getuser = async () => {
      const user = await getUser();
      if (user) {
        dispatch(storeUser({ email: user.email, username: user.username }));
      }
      setisLoading(false);
    };
    getuser();

    const subscription = authListener((session) => {
      if (session?.user && session.user.email) {
        dispatch(
          storeUser({
            email: session.user.email,
            username: session.user.user_metadata.username,
          }),
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }

  return <>{children}</>;
};
