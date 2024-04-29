import { useStore } from "../../../../utils/store/store";
import { HeaderProps } from "./Header.types";

export const useLogic = ({ id }: HeaderProps) => {
    const favorite = useStore((state: any) => state.addOrRemoveToFavotiteList)
    const isFavourite = useStore((state: any) => state.FavoriteList.includes(id));

    const addOrRemoveToFavotiteList = () => favorite(id);

    return {
        data: {
            isFavourite
        },
        methods: {
            addOrRemoveToFavotiteList
        },
    }
}