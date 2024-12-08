import "./globals.css";


export const metadata = {
  title: 'Form Builder App',
  description: 'A responsive form builder built with Next.js and TailwindCSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
