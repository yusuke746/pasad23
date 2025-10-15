import styles from './page.module.css'
import Image from 'next/image'
import Link from "next/link";

import NewsList from '@/app/_components/NewsList'
import ButtonLink from '@/app/_components/ButtonLink'

export const revalidate = 60

export default async function Home() {
  const data = {
    contents: [
      {
        id: '1',
        title: 'News 1',
        description: 'Description 1',
        content: 'Content 1',
        category: { id: '1', name: 'Category 1', createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z', revisedAt: '2023-01-01T00:00:00.000Z' },
        publishedAt: '2023-01-01T00:00:00.000Z',
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
        revisedAt: '2023-01-01T00:00:00.000Z',
      },
      {
        id: '2',
        title: 'News 2',
        description: 'Description 2',
        content: 'Content 2',
        category: { id: '2', name: 'Category 2', createdAt: '2023-01-02T00:00:00.000Z', updatedAt: '2023-01-02T00:00:00.000Z', revisedAt: '2023-01-02T00:00:00.000Z' },
        publishedAt: '2023-01-02T00:00:00.000Z',
        createdAt: '2023-01-02T00:00:00.000Z',
        updatedAt: '2023-01-02T00:00:00.000Z',
        revisedAt: '2023-01-02T00:00:00.000Z',
      },
    ],
  };
  return (
    <>


      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>長張最高！</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。

<style>{`
.custom-link-list a {
  color: inherit;
  text-decoration: underline;
  transition: color 0.2s;
}
.custom-link-list a:hover {
  color: #0070f3;
}
`}</style>
<ul className="custom-link-list" style={{ display: "flex", gap: "1em", justifyContent: "center", margin: "2em 0" }}>
  <li><Link href="/search">検索画面</Link></li>
  <li><Link href="/contractors">指定工事店の登録</Link></li>
  <li><Link href="/contact">検満対象の登録</Link></li>
</ul>

          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="100vw"
        />
      </section>
    </>
  )
}
