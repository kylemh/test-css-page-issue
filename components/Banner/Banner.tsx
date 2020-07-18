import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import styles from './Banner.module.css';

interface Props {
  className?: string;
  href: string;
}

const Banner = ({ className, href }: Props) => {
  return (
    <div className={cx(styles.Banner, className)}>
      <h1 style={{ margin: 0, padding: '2rem' }}>This is a test</h1>

      <Link href={href}>
        <a style={{ margin: 0, padding: '2rem' }}>Other Page</a>
      </Link>
    </div>
  );
};

export default Banner;
