import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/Home.screen';
import FavoritesScreen from '../../../screens/Favorites.screen';
import CartScreen from '../../../screens/Cart.screen';
import OrderHistoryScreen from '../../../screens/OrderHistory.screen';
import { styles } from './TabNavigator.style';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../../Materials/icons/CustomIcon';
import { COLORS } from '../../../utils/theme/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {


    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarBackground: () => (
                    <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyle} />
                ),
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    header: () => null,
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name={'home'}
                            size={25}
                            color={focused
                                ? COLORS.primaryOrangeHex
                                : COLORS.primaryLightGreyHex
                            }
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    header: () => null,
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name={'cart'}
                            size={25}
                            color={focused
                                ? COLORS.primaryOrangeHex
                                : COLORS.primaryLightGreyHex
                            }
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name={'like'}
                            size={25}
                            color={focused
                                ? COLORS.primaryOrangeHex
                                : COLORS.primaryLightGreyHex
                            }
                        />
                    )
                }}
            />
           <Tab.Screen
                name="OrderHistory"
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <CustomIcon
                            name={'bell'}
                            size={25}
                            color={focused
                                ? COLORS.primaryOrangeHex
                                : COLORS.primaryLightGreyHex
                            }
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;