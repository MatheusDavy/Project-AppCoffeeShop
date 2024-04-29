import { View, Text, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStore } from '../../../../utils/store/store';
import { TouchableOpacity } from 'react-native';
import CustomIcon from '../../../Materials/icons/CustomIcon';
import { COLORS, FONTSIZE } from '../../../../utils/theme/theme';
import { CategoriesProps, InputSearchProps, ProductsProps } from './Products.types';
import { categoriesStyles, productsStyles, inputSearchStyles } from './Products.style';
import CoffeeCard from '../../../Materials/cards/CoffeeCard';
import { useLogic } from './Products.logic';

export default function Products({ navigation }: any) {
  const {methods} = useLogic();

  const CoffeeList = useStore((state: any) => state.CoffeeList)
  const BeansList = useStore((state: any) => state.BeansList)
  const categories = methods.getCategoriesFromData(CoffeeList);
  const [category, setCategory] = useState(categories[0])
  const [search, setSearch] = useState('')
  const filteredCoffee = methods.getCoffeeList(category, CoffeeList, search);

  const handleSearchByCategory = (category: string) => {
    setCategory(category);
    setSearch('')
  }

  const handleSearchByInputText = (search: string) => {
    setCategory(categories[0]);
    setSearch(search);
  }

  return (
    <View>
      <InputSearch
        search={handleSearchByInputText}
      />
      <Categories
        category={category}
        categories={categories}
        setCategory={handleSearchByCategory}
      />
      <Product navigation={navigation} coffees={filteredCoffee} beans={BeansList} />
    </View>
  )
}

const InputSearch = ({ search }: InputSearchProps) => {
  const [searchText, setSearchText] = useState('')

  return (
    <View style={inputSearchStyles.container}>
      <CustomIcon
        style={inputSearchStyles.icon}
        name='search'
        size={FONTSIZE.size_18}
        color={searchText.length > 0
          ? COLORS.primaryOrangeHex
          : COLORS.primaryLightGreyHex
        }
      />
      <TextInput
        style={inputSearchStyles.input}
        placeholder='Find your Coffee...'
        placeholderTextColor={COLORS.primaryLightGreyHex}
        value={searchText}
        onChangeText={(text: string) => {
          setSearchText(text)
        }}
        onSubmitEditing={() => {
          search(searchText)
        }}
      />
    </View>
  )
}

const Categories = ({ category, categories, setCategory }: CategoriesProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={categoriesStyles.horizontal}
    >
      {categories.map((cat => (
        <View
          key={cat}
          style={[
            category === cat ? {
              backgroundColor: COLORS.primaryLigthOrangeRGBA
            } : {},
            categoriesStyles.wrapper
          ]}
        >
          <TouchableOpacity onPress={() => setCategory(cat)}>
            <Text style={[
              categoriesStyles.text,
              category === cat ? {
                color: COLORS.primaryOrangeHex
              } : {
                color: COLORS.primaryLightGreyHex
              }
            ]}>{cat}</Text>
          </TouchableOpacity>
        </View>
      )))}
    </ScrollView>
  )
}

const Product = ({ coffees, beans, navigation }: ProductsProps) => {
  const addToCart = useStore((state: any) => state.addToCart)

  return (
    <View style={{ display: 'flex', flexDirection: 'column' }}>
      {coffees.length > 0 ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={coffees}
          contentContainerStyle={productsStyles.flatList}
          renderItem={({ item }: any) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {
                  data: item
                })
              }}
            >
              <CoffeeCard
                name={item.name}
                average_rating={item.average_rating}
                imagelink_square={item.imagelink_square}
                buttonPressHandler={() => addToCart(item, 0)}
                price={item.prices}
                special_ingredient={item.special_ingredient}
                key={item.id}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={productsStyles.notFound}>No coffee available</Text>
      )}
      <View>
        <Text style={productsStyles.title}>Coffe Beans</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={beans}
          contentContainerStyle={productsStyles.flatList}
          renderItem={({ item }: any) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {
                  data: item
                })
              }}
            >
              <CoffeeCard
                name={item.name}
                average_rating={item.average_rating}
                imagelink_square={item.imagelink_square}
                buttonPressHandler={() => addToCart(item, 0)}
                price={item.prices}
                special_ingredient={item.special_ingredient}
                key={item.id}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
