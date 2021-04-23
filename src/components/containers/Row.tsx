import React from 'react';
import styles from '@Styles/components/Row.module.css';
import { IRowComponent } from '@Interfaces';

export const Row: React.FC<IRowComponent.IProps> = ({
  center = false,
  wrap = false,
  expanded = false,
  className = '',
  children,
  ...props
}) => {
  const claxx = [className];
  claxx.push(styles.row_container);
  claxx.push(expanded ? styles.expanded : '');
  claxx.push(wrap ? styles.wrap : '');
  claxx.push(center ? styles.row_center : '');
  return (
    <div className={claxx.join(' ')} {...props}>
      {children}
    </div>
  );
};
