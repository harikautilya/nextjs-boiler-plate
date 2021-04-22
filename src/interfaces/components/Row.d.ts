import { ElementProps } from '@Interfaces';

declare namespace IRowComponent {
  export interface IProps extends ElementProps.GroupLayoutProps {
    center?: boolean;
    wrap?: boolean;
  }
}
