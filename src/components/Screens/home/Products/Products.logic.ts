export const useLogic = () => {

  const getCategoriesFromData = (data: any) => {
    let temp: any = {};
    for (let i = 0; i < data.length; i++) {
      if (temp[data[i].name] == undefined) {
        temp[data[i].name] = 1;
      } else {
        temp[data[i].name]++;
      }
    }
    let categories = Object.keys(temp);
    categories.unshift("All");
    return categories;
  };

  const getCoffeeList = (category: string, data: any, search: string) => {
    if (search) {
      search = search.toLocaleLowerCase();
      return data.filter((coffee: any) => {
        return (
          coffee.name.toLocaleLowerCase().includes(search) ||
          coffee.special_ingredient.toLocaleLowerCase().includes(search)
        );
      });
    }

    if (category == "All") return data;

    return data.filter((coffee: any) => coffee.name === category);
  };

  return {
    methods: {
        getCategoriesFromData,
        getCoffeeList
    },
  };
};
