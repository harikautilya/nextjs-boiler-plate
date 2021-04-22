declare namespace ElementProps {
  export interface BaseProps {
    id?: string;
    className?: string;
    style?: any;
  }

  export interface GroupLayoutProps extends BaseProps {
    children?: React.ReactNode;
    expanded?: boolean;
  }
}
