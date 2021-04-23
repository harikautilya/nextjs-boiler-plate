import React from 'react';
import Image from 'next/image';
import { IToolbarComponent } from '@Interfaces';

import { Row, Column } from '@Components';
import styles from '@Styles/views/Toolbar.module.css';

export const Toolbar:React.FC<IToolbarComponent.IProps> = ({
	icon = '/sample.png'
}) => {
	const imageUrl = icon;
	return (
		<Row>
			<Column>
				<Image src={imageUrl} alt="Icon" width={64} height={64} />
			</Column>
			<Column expanded>
				
			</Column>
		</Row>
	);
}