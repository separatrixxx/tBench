import { UserPage } from "page_components/UserPage/UserPage";
import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { pageHelper, userHelper } from 'helpers/pages.helper';
import { useDispatch } from 'react-redux';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { User } from "interfaces/user.interface";
import axios, { AxiosResponse } from 'axios';
import { ParsedUrlQuery } from 'node:querystring';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';


function User({ user }: UserProps): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const userMe = useSelector((state: AppState) => state.user.user);

  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
		pageHelper(router, dispatch, setIsAuth);
        userHelper(dispatch);
	}, [router, dispatch]);

  if (isAuth) {
    return (
      <>
        <Head>
          <title>tBench - {user[0].username}</title>
        </Head>
        {userMe.username === user[0].username ? <ProfilePage user={user[0]} /> : <UserPage user={user[0]} />}
      </>
    );
  } else {
    return (
      <></>
    );
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: users }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/get_all_users');

    const locales = ['de', 'en', 'fr', 'ru', 'zh'];

    const paths: any[] = [];
    users.map(user => {
      return locales.map((locale) => {
        return paths.push({
          params: { user: user.username },
          locale,
        });
      });
    });

	return {
		paths: paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<UserProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	try {
        const { data: user }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_user?type=username&information=' + params.user);

		return {
			props: {
				user
			}
		};
	} catch {
		return {
			notFound: true
		};
	}
};

interface UserProps extends Record<string, unknown> {
	user: User[];
}

export default User;