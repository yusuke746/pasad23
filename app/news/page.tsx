import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';

export default async function Page() {
  const news = [
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
  ];
  const totalCount = news.length;

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
