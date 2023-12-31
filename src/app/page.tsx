'use client';

import { usePrivy } from '@privy-io/react-auth';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const { login } = usePrivy();
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-slate-500'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <Logo className='w-16' />
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky{' '}
          </p>
          <p className='mt-2 text-sm text-gray-700'>
            <Link href='https://github.com/0xMazout/ts-nextjs-tailwind-starter-fullpack-approuter'>
              See the repository
            </Link>
          </p>

          <Link
            href='https://vercel.com/new/git/external?repository-url=https://github.com/0xMazout/ts-nextjs-tailwind-starter-fullpack-approuter'
            className='mt-4'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width='92'
              height='32'
              src='https://vercel.com/button'
              alt='Deploy with Vercel'
            />
          </Link>
          <Link href='wagmi'>
            <button className='mt-4 rounded border-4'>Wagmi</button>
          </Link>
          <button
            className='rounded-lg bg-violet-600 px-6 py-3 text-white hover:bg-violet-700'
            onClick={login}
          >
            Log in
          </button>
          <Link href='dashboard'>
            <button className='mt-4 rounded-xl bg-cyan-700 p-4 hover:bg-cyan-600'>
              Dashboard
            </button>
          </Link>
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <Link href='https://github.com/0xMazout/ts-nextjs-tailwind-starter-fullpack-approuter'>
              0xMazout
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
