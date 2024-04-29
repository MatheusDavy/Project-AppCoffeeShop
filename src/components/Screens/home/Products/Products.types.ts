export type InputSearchProps = {
    search: (search: string) => void
}

export type CategoriesProps = {
    category: string
    categories: string[]
    setCategory: (category: string) => void
}

export type ProductsProps = {
    coffees: any[]
    beans: any[]
    navigation: any
}