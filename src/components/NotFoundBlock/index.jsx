import React from 'react';
import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.descr}>данной страницы нет на сайте</p>
    </div>
  );
}
