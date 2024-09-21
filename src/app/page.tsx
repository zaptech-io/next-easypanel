import ThemeSwitch from "@/components/ThemeSwitch";
import {GITHUB_URL} from "@/data";
import {cookies} from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CodeWrap = ({children} : React.PropsWithChildren) => (
  <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    {children}
  </code>
);

export default function Home() {

  // Get the middleware-url cookie value
  const middlewareUrl = cookies().get('middleware-url')?.value ?? 'undefined';

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/avatar.jpeg"
          alt="author's logo"
          width={84}
          height={84}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2">
          <li>
            Get started by editing <CodeWrap>src/app/page.tsx</CodeWrap>.
          </li>
          <li>Save and see your changes instantly.</li>
          <li>Test public dir: <Link className={'text-blue-600 underline'} href={'/robots.txt'}>/robots.txt</Link></li>
          <li>Test sitemaps: <Link className={'text-blue-600 underline'} href={'/sitemap.xml'}>/sitemap.xml</Link></li>
          <li>Test redirects: <Link className={'text-blue-600 underline'} href={'/api/humans'}>/api/humans</Link> &rarr; /humans.txt</li>
          <li>Test rewrites: <Link className={'text-blue-600 underline'} href={'/humans.txt'}>/humans.txt</Link> &larr; /api/humans</li>
          <li>Test API: <Link className={'text-blue-600 underline'} href={'/api'}>/api</Link></li>
          <li>Test image route: <Link className={'text-blue-600 underline'} href={'/image.png'}>/image.png</Link></li>
          <li>Test middleware: <CodeWrap>middleware-url</CodeWrap> cookie value is set to <CodeWrap>{middlewareUrl}</CodeWrap></li>
        </ol>

        <article className={'w-full relative border-t-2 border-gray-50 border-solid border-b-2 pb-6'}>
          <figure>
            <Image src={'/image.png'} alt={'Image route'} width={0} height={0} sizes="100vw" className="w-full h-auto"/>
            <figcaption className={'text-xs mt-1'}>Displaying image from <CodeWrap>/image.png</CodeWrap></figcaption>
          </figure>
        </article>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/github.svg"
              alt="GitHub icon"
              width={20}
              height={20}
            />
            GitHub repository
          </a>
          <ThemeSwitch/>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
