import Image from 'next/image';
// import { getMembersList } from '@/app/_libs/microcms';
// import { MEMBERS_LIST_LIMIT } from '@/app/_constants';
import styles from './page.module.css';

export default async function Page() {
  const data = {
    contents: [
      {
        id: '1',
        name: 'John Doe',
        position: 'Software Engineer',
        profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: { url: '/vercel.svg', width: 100, height: 100 },
      },
      {
        id: '2',
        name: 'Jane Smith',
        position: 'Product Manager',
        profile: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: { url: '/vercel.svg', width: 100, height: 100 },
      },
    ],
  };
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dd className={styles.position}>{member.position}</dd>
                <dd className={styles.profile}>{member.profile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
