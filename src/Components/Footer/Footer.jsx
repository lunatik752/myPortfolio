import React from 'react';
import s from './Footer.module.css';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTitle}>
          <span>Максим Белый</span>
        </div>
        <div className={s.myLinks}>
          <div className={s.link}>
            <span>f</span>
          </div>
          <div className={s.link}>
            <span>vc</span>
          </div>
          <div className={s.link}>
            <span>in</span>
          </div>
          <div className={s.link}>
            <span>GitHub</span>
          </div>

        </div>
        <div className={s.copyright}>
          <span>© 2020 Все права защищены </span>
        </div>
      </div>

    </div>
  );
}

export default Footer;
