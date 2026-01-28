import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth } from '@/constants/theme';
import { useScreenDimensions } from '@/hooks/use-screen-dimensions';

export default function HomeScreen() {
  const styles = useHomeStyles();
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Welcome to&nbsp;Expo
          </ThemedText>
        </ThemedView>

        <ThemedText type="code" style={styles.code}>
          get started
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <HintRow title="Try editing" hint="src/app/index.tsx" />
          <HintRow title="Dev tools" hint="cmd+d" />
          <HintRow title="Fresh start" hint="npm reset project" />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const useHomeStyles = () => {
  const { spacing, scale } = useScreenDimensions();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    safeArea: {
      flex: 1,
      paddingHorizontal: spacing.four,
      alignItems: 'center',
      gap: spacing.three,
      paddingBottom: BottomTabInset * scale + spacing.three,
      maxWidth: MaxContentWidth,
    },
    heroSection: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingHorizontal: spacing.four,
      gap: spacing.four,
    },
    title: {
      textAlign: 'center',
    },
    code: {
      textTransform: 'uppercase',
    },
    stepContainer: {
      gap: spacing.three,
      alignSelf: 'stretch',
      paddingHorizontal: spacing.three,
      paddingVertical: spacing.four,
      borderRadius: spacing.four,
    },
  });
};
