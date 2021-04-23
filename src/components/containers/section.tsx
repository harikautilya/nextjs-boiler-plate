import React from 'react';
import { ISectionComponent } from '@Interfaces';
import styles from '@Styles/components/Section.module.css';

export const Section: React.FC<ISectionComponent.IProps> = ({
	className = '',
	wrap = false,
	...props
}) => {
	const claxx=[];
	claxx.push(styles.section_container)
	claxx.push(wrap? styles.wrap : '')
	claxx.push(className);
	return (
		<section className={claxx.join(' ')} {...props}>
			
		</section>
	);
}