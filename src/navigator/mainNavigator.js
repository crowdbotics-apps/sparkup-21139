import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile128656Navigator from '../features/UserProfile128656/navigator';
import Settings128655Navigator from '../features/Settings128655/navigator';
import Settings128653Navigator from '../features/Settings128653/navigator';
import SignIn2128651Navigator from '../features/SignIn2128651/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile128656: { screen: UserProfile128656Navigator },
Settings128655: { screen: Settings128655Navigator },
Settings128653: { screen: Settings128653Navigator },
SignIn2128651: { screen: SignIn2128651Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
