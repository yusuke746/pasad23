

import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '検満対象の登録',
};

type Props = {
  children: React.ReactNode;
};

export default function InspectionTargetsLayout({ children }: Props) {
  return (
    <>
      <Hero title="Inspection Targets" sub="検満対象の登録" />
      <Sheet>{children}</Sheet>
    </>
  );
}

