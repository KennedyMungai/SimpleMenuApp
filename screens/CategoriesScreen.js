import { FlatList } from 'react-native'
import { CATEGORIES } from '../extra-files/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const renderCategoryItem = (item) => {
	return <CategoryGridTile title={item.title} color={item.color} />
}

const CategoriesScreen = () => {
	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
		/>
	)
}

export default CategoriesScreen
