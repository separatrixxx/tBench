import { useRouter } from "next/router";
import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { useEffect } from "react";

function Profile(): JSX.Element {
  const router = useRouter();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('logged_in');

    if (!loggedIn) {
      router.push('/');
    }
  });
  
  return (
    <ProfilePage />
  );
}

export default Profile;