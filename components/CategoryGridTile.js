import { Pressable, StyleSheet, View } from 'react-native'

const CategoryGridTile = ({ title, color }) => {
	return (
		<View style={[styles.tileStyling, { backgroundColor: color }]}>
			<Pressable>
				<View>
					<Text>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

export default CategoryGridTile

const styles = StyleSheet.create({
	tileStyling: {
		backgroundColor: color
	}
})
