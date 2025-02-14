import Link from "next/link";

export default function MainLayout({
  children,
}: //   title,
{
  children: React.ReactNode;

  //   title?: string;
}) {
  return (
    <>
      {/* <div>Header {title}</div> */}

      <div className={` flex flex-col min-h-screen`}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between ">
            <h1 className="text-xl font-bold">Learn Next JS</h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-4">{children}</main>
        {/* <div className="header">Header</div>
        <div>{children}</div> */}
        {/* <div className={styles.footer}>Footer</div> */}
        {/* <div id={styles.footer_baru}>Footer</div> */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Personal Learn Next JS</p>
        </footer>
      </div>
    </>
  );
}
