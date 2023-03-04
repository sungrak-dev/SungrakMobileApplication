import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Menu } from '@mui/material';

import HomePage from '@/app/home/page';
import WorshipPage from '@/app/worship/page';
import BiblePage from '@/app/bible/page';
import ContentsPage from '@/app/contents/page';
import MenuPage from '@/app/menu/page';

const FIRST_BOTTOM_TAB = 'RootPage.FIRST_BOTTOM_TAB';
const SECOND_BOTTOM_TAB = 'RootPage.SECOND_BOTTOM_TAB';
const THIRD_BOTTOM_TAB = 'RootPage.THIRD_BOTTOM_TAB';
const FOURTH_BOTTOM_TAB = 'RootPage.FOURTH_BOTTOM_TAB';
const FIFTH_BOTTOM_TAB = 'RootPage.FIFTH_BOTTOM_TAB';

export default function RootPage() {
  const [value, setValue] = useState(FIRST_BOTTOM_TAB);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log('MOVE TO', newValue);
  };

  return (
    <>
      {value == FIRST_BOTTOM_TAB && <HomePage />}
      {value == SECOND_BOTTOM_TAB && <WorshipPage />}
      {value == THIRD_BOTTOM_TAB && <BiblePage />}
      {value == FOURTH_BOTTOM_TAB && <ContentsPage />}
      {value == FIFTH_BOTTOM_TAB && <MenuPage />}

      <BottomNavigation
        showLabels
        className='fixed bottom-0 w-full border-t border-[#cccccc]'
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label='홈' value={FIRST_BOTTOM_TAB} />
        <BottomNavigationAction label='예배' value={SECOND_BOTTOM_TAB} />
        <BottomNavigationAction label='성경' value={THIRD_BOTTOM_TAB} />
        <BottomNavigationAction label='콘텐츠' value={FOURTH_BOTTOM_TAB} />
        <BottomNavigationAction label='전체보기' value={FIFTH_BOTTOM_TAB} />
      </BottomNavigation>
    </>
  );
}
