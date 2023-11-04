import Image from "next/image";
import React from "react";
import styles from '@/styles/spinner.module.css'

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className={styles.spinnerContainer}>
        {/* <Image src="/loading/etud-baku.jpg" width={200} height={200} layout="responsive" alt="loading" className={styles.spinner} /> */}
        <Image src="/loading/ZKZg.gif" width={200} height={200} layout="responsive" alt="loading"  />

      
      </div>
    </div>
  );
};

export default Loading;
