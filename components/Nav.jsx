"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../assest/images/logo.svg";
// import Profile from "../assest/images/";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = false;
  const [providers, setProviders] = useState();
  const [toggleDropdown ,setToggleDropdown] = useState(false)
  console.log(providers);
  useEffect(() => {
    const setAProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setAProviders();
  }, []);

  return (
     /* Desktop Navigation */
    <nav className="flex-between w-full mb-16 pt-3 ml-2">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={Logo}
          alt="clogo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Share Prompt</p>
      </Link>
      <div className="sm:flex hidden mr-4">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            {/* <Link href="/profile">
              <Image
                src={Profile}
                alt="Profile"
                width={30}
                height={30}

              />
            </Link> */}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
      {/* Second  */}
      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {/* {providers  && session?.user ? ( */}
          <div className='flex'>
            <Image
              src={Logo}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        {/* ) : ( */}
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Nav;
