import React from 'react';
import styles from '@Styles/components/Text.module.css';
import { ITextComponent } from '@Interface';

export const Text: React.FC<ITextComponent.IProps> = ({
  text = '',
  type = 'c1',
  className = '',
  bold = false,
  ...props
}) => {
  const claxx = [];
  claxx.push(styles[`text_${type}`]);
  claxx.push(bold ? styles.text_bold : '');
  claxx.push(className);

  return (
    <div className={claxx.join(' ')} {...props}>
      <p className={type}>{text}</p>
    </div>
  );
};
