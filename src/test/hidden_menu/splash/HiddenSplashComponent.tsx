import { View, Image, StyleSheet, Text } from 'react-native';
import { Images } from '../../../utils/theme';

const SPLASH_MESSAGE = 'Entering Test Hidden Mode';

/**
 * component ui that is used in container.
 * @return {JSX.Element}
 */
export default function HiddenSplashComponent(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* background image */}
      <View style={styles.splashImageContainer}>
        <Image
          resizeMode="contain"
          style={styles.splashImage}
          source={Images.icBtDevice}
        />
      </View>

      {/* Title */}
      <View style={styles.splashTextView}>
        <Text style={styles.splashText}>{SPLASH_MESSAGE}</Text>
      </View>

      {/* hidden test mode logo */}
      <View style={styles.splashLogoContainer}>
        <Image
          resizeMode="contain"
          style={styles.splashLogo}
          source={Images.icBluetoothLogo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff7271',
    flex: 1,
  },
  splashImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 135,
    height: 102,
  },
  splashTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 160,
  },
  splashText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 23,
  },
  splashLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  splashLogo: {
    width: 68,
    height: 32,
  },
});
