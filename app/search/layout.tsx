

export const metadata = {
  title: '検索画面',
};

import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';


type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function SearchLayout({ children }: Props) {
  return (
    <>
      <Hero title="検索画面" sub="Search" />
      <Sheet>{children}</Sheet>
    </>
  );
}
