import { EventMapBase, NavigationState, RouteConfig } from '@react-navigation/native';
import { BarCodeScannerStackParamList } from '../../navigator/NavigationStack/BarCodeScannerStack';

import strings from './strings';
import mapping from '../../languages/CN/mapping';

const options: RouteConfig<BarCodeScannerStackParamList, "ProductSearchMultiSelect", NavigationState, object, EventMapBase>['options'] = (props) => {
  const { navigation, route } = props;
  const headerTitle = mapping[strings['title']];
  return {
    headerShown: true,
    headerTitle: headerTitle,
  }
};

export default options;