import * as React from 'react';
import {Blurhash} from 'react-blurhash';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {encodeImageToBlurhash} from './encoder';
import './style.css';

import Image1 from './bg2.jpg';


export default function App() {
  const [hashUrl, setHashUrl] = useState('UdHCAoRPXAxt?wM{t7ofS6ozRPWBM|t6V@j[');
  const [imageLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getHashUrl() {
      console.log('getHashUrl');
      const hash = await encodeImageToBlurhash(Image1);
      // const hash = await encodeImageToBlurhash(mountain);
      setHashUrl(hash);
    }
    getHashUrl();
  }, []);
  

  const onLoaded = () => {
    setLoading(false);
  };

  console.log('hashUrl', hashUrl);
  // let wdt = window.innerWidth / 2;
  // let hgt = window.innerWidth / 4;
  let wdt = 600;
  let hgt = 300;

  return (
    <div className="blurhash-wrapper">
      <Blurhash hash={hashUrl} width={wdt} height={hgt} />
      <motion.img
        initial={{opacity: 0}}
        // style={{ height: imageLoading ? "6rem" : "auto" }}
        animate={{
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{opacity: {delay: 0.5, duration: 0.4}}}
        loading="lazy"
        onLoad={onLoaded}
        className="image"
        src={Image1}
        
        // src={mountain}
        width={wdt}
        height={hgt}
      />
    </div>
  );

}
