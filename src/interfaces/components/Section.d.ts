import { ElementProps } from '@Interfaces';


declare namespace ISectionComponent{
	export interface IProps extends ElementProps.GroupLayoutProps{
		wrap: boolean;
	}
}