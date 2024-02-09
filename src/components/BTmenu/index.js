import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-elements';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import cssGlobal from '../../util/cssGlobal';
import { correctSize } from '../../util/Size';
import { correctFontSizeForScreen } from '../../util/FontSize';
const BTmenu = ({
  icon,
  badgeValue,
  children,
  numberOfLines,
  iconColor,
  onPress,
  sizeIcon,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.BTmenuGeral}>
          <MaterialIcons name={icon} color={iconColor} size={sizeIcon} />
        </TouchableOpacity>
        {badgeValue && (
          <View
            style={{
              position: 'absolute',
              right: correctSize(-8),
              bottom: correctSize(52),
            }}
          >
            <Badge
              value={badgeValue}
              status="error"
              badgeStyle={{ transform: [{ scale: 1.2 }] }}
            />
          </View>
        )}
      </View>
      <View style={{ marginTop: correctSize(10) }}>
        <Text
          style={{
            textAlign: 'center',
            color: cssGlobal.cinza,
            fontSize: correctFontSizeForScreen(7),
            width: correctSize(94),
          }}
          numberOfLines={numberOfLines}
        >
          {children}
        </Text>
      </View>
    </View>
  );
};

export { BTmenu };
