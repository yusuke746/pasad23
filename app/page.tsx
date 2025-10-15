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
          </p>
<style>{`
.custom-link-list {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  align-items: center;
  margin: 2em 0;
  list-style: none;
  padding: 0;
}
.custom-link-button {
  display: flex;
  align-items: center;
  background: #fff;
  color: #0070f3;
  border: 2px solid #0070f3;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1.1em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  font-weight: bold;
}
.custom-link-button:hover {
  background: #e6f0fa;
  color: #005bb5;
}
.custom-link-button img {
  margin-right: 0.5em;
}
`}</style>
<ul className="custom-link-list">
  <li>
    <Link href="/search" className="custom-link-button">
      <Image src="/search_icon.jpg" alt="検索アイコン" width={40} height={40} />
      検索
    </Link>
  </li>
  <li>
    <Link href="/contractors" className="custom-link-button">
      <Image src="/registered_contractor_icon.jpg" alt="指定工事店アイコン" width={40} height={40} />
      指定工事店の登録
    </Link>
  </li>
  <li>
    <Link href="/inspection-targets" className="custom-link-button">
      <Image src="/water_meter_replacement_icon.jpg" alt="検満対象アイコン" width={40} height={40} />
      検満対象の登録
    </Link>
  </li>
</ul>

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
