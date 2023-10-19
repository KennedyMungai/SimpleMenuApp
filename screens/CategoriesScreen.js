import { FlatList } from 'react-native'
import { CATEGORIES } from '../extra-files/dummy-data'

const renderCategoryItem = (item) => {
	return
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
