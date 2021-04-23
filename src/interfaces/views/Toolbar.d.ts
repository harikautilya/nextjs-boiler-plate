import { ElementProps } from '@Interfaces';

declare namespace IToolbarComponent{
	export interface IProps extends ElementProps.GroupLayoutProps{
		icon:string;
	}
}