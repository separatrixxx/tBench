import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Profile(): JSX.Element {
  const router = useRouter();
  
  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  useEffect(() => {
		const loggedIn = localStorage.getItem('logged_in');

    if (loggedIn) {
      setIsAuth(true);
    } else {
      router.push('/');
      setIsAuth(false);
    }
	}, []);

  if (isAuth) {
    return (
      <ProfilePage />
    );
  } else {
    return (
      <></>
    );
  }
}

export default Profile;