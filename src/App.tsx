import * as React from 'react';
import {Blurhash} from 'react-blurhash';
import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {encodeImageToBlurhash} from './encoder';
import './style.css';

export default function App() {
  const [hashUrl, setHashUrl] = useState('U27UC_Tg00D$.AW?E1nN00EA%4~7ISMw%2-p');
  const [imageLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getHashUrl() {
      console.log('getHashUrl');
      const hash = await encodeImageToBlurhash('https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format');
      // const hash = await encodeImageToBlurhash(mountain);
      setHashUrl(hash);
    }
    getHashUrl();
  }, []);
  

  const onLoaded = () => {
    setLoading(false);
  };

  console.log('hashUrl', hashUrl);

  return (
    <div className="blurhash-wrapper">
      <Blurhash hash={hashUrl} width={300} height={200} />
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
        src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format"
        
        // src={mountain}
        width={300}
        height={200}
      />
    </div>
  );

}
