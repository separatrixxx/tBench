import { en } from "locales/en.locale";
import { ru } from "locales/ru.locale";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;
  return (
    <>
      {t.title + 'tBench'}
    </>
  );
}
