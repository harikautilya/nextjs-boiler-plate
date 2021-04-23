import { ElementProps } from '@Interfaces';

declare namespace ITextComponent {
  interface IProps extends ElementProps.BaseProps {
    text: string;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'c1' | 'c2' | 'c3' | 'c4';
    bold?: boolean;
  }
}
