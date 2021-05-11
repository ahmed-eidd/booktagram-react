import react, { useEffect } from 'react';

import Nav from '../components/Nav/Nav';
import styles from '../styles/Home.module.css';
import { useIntl } from 'react-intl';

import Layout from '../components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchGallery } from '../store/gallery/slice';
import { fetchNews } from '../store/news/slice';
import { useToast } from '@chakra-ui/react';

import Button from '../components/Button/Button';
import Header from '../components/Pages/Home/Header/Header';
import AboutSection from '../components/Pages/Home/AboutSection/AboutSection';

export default function Home() {
  const key = process.env.NEXT_PUBLIC_NY_API_KEY;
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <>
      <Header />
      <AboutSection />
    </>
  );
}
