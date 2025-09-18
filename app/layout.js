import './globals.css';

export const metadata = {
  title: 'Philosophia',
  description: 'Philosophia sample site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
