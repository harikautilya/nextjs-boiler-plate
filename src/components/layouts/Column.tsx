import React from 'react';
import styles from '@Styles/components/Column.module.css';
import { IColumnComponent } from '@Interfaces';

export const Column: React.FC<IColumnComponent.IProps> = ({
  center = false,
  wrap = false,
  expanded = false,
  className = '',
  children,
  ...props
}) => {
  const claxx = [];
  claxx.push(styles.column_container);
  claxx.push(expanded ? styles.expanded : '');
  claxx.push(wrap ? styles.wrap : '');
  claxx.push(center ? styles.column_center : '');
  claxx.push(className);
  return (
    <div className={claxx.join(' ')} {...props}>
      {children}
    </div>
  );
};
