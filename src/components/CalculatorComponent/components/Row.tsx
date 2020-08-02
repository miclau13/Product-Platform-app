import React from 'react';
import { View } from 'react-native';

interface RowProps {};

const Row: React.ComponentType<RowProps> = (props) => {
	const { children, ...rowProps } = props;
	return (
		<View style={{ flexDirection: "row"}}>{children}</View>
	)
}; 

export default Row;