import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchNews } from '../store/news/slice';

import Header from '../components/Pages/Home/Header/Header';
import AboutSection from '../components/Pages/Home/AboutSection/AboutSection';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <Header />
      <AboutSection />
    </>
  );
}
