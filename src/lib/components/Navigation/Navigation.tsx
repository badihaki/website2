/*
function Navigation() {
  return (
    <div id='navigation' className='sticky top-10 min-w-full z-50 overscroll-none'>
      <ul className='transition-all ease-in-out duration-700 text-center grid grid-flow-col bg-slate-500 bg-opacity-10 hover:bg-slate-800 hover:bg-opacity-45 mx-3 rounded-full'>
        <Link href={"#*"}
        className='transition-all ease-in-out duration-700 hover:bg-violet-600 hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Welcome
          </li>
        </Link>
        <Link href={"#webdev"}
        className='transition-all ease-in-out duration-700 hover:bg-[#744cce] hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Webdev
          </li>
        </Link>
        <Link href={"#gamedev"}
        className='transition-all ease-in-out duration-700 hover:bg-[#6c60ac] hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Gamedev
          </li>
        </Link>
        <Link href={"#contact"}
        className='transition-all ease-in-out duration-700 hover:bg-[#64748b] hover:bg-opacity-50 rounded-full mx-4 hover:text-[#fcc200] font-semibold max-w-xs hover:tracking-widest'>
          <li>
              Contact
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Navigation
*/
"use client"

import React from 'react';
import {
  Container,
  Tabs,
} from '@mantine/core';
import classes from './NavTabs.module.css';

const tabs = [
  'Welcome',
  'WebDev',
  'GameDev',
  'Contact Me'
];

export default function Navigation() {

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div id='navigation' className='sticky top-10 min-w-[90%] z-50 overscroll-none'>

      <div className={classes.header}>
        <Container size="md">
          <Tabs
            defaultValue="Home"
            variant="outline"
            visibleFrom="sm"
            classNames={{
              root: classes.tabs,
              list: classes.tabsList,
              tab: classes.tab,
            }}
          >
            <Tabs.List>{items}</Tabs.List>
          </Tabs>
        </Container>
      </div>
    </div>
  );
}