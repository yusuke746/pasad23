
import { GoogleAnalytics } from '@next/third-parties/google';
import Sheet from '@/app/_components/Sheet';
import Hero from '@/app/_components/Hero';

export const metadata = {
  title: '指定工事店登録',
};

type Props = {
  children: React.ReactNode;
};

export default function ContractorsLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contractors" sub="指定工事店登録" />
      <Sheet>{children}</Sheet>
      <GoogleAnalytics gaId="G-XXX" />
    </>
  );
}
