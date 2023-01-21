import { en } from "locales/en.locale";
import { ru } from "locales/ru.locale";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router)
  const t = router.locale === 'en' ? en : ru;
  return (
    <>
      <Link href={router.asPath} locale="ru"><p>ru</p></Link>
      <Link href={router.asPath} locale="en"><p>en</p></Link>
      {t.title + 'tBench'}
    </>
  );
}
