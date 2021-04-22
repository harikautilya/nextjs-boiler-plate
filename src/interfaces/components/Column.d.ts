import { ElementProps } from '@Interfaces';

declare namespace IColumnComponent {
  export interface IProps extends ElementProps.GroupLayoutProps {
    center?: boolean;
    wrap?: boolean;
  }
}
