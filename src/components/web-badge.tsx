import { Image } from 'expo-image';
import { version } from 'expo/package.json';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { useScreenDimensions } from '@/hooks/use-screen-dimensions';

export function WebBadge() {
  const scheme = useColorScheme();
  const styles = useBadgeStyles();
  return (
    <ThemedView style={styles.container}>
      <ThemedText
        type="code"
        themeColor="textSecondary"
        style={styles.versionText}
      >
        v{version}
      </ThemedText>
      <Image
        source={
          scheme === 'dark'
            ? require('@/assets/images/expo-badge-white.png')
            : require('@/assets/images/expo-badge.png')
        }
        style={styles.badgeImage}
      />
    </ThemedView>
  );
}

const useBadgeStyles = () => {
  const { spacing, scale } = useScreenDimensions();
  return StyleSheet.create({
    container: {
      padding: spacing.five,
      alignItems: 'center',
      gap: spacing.two,
    },
    versionText: {
      textAlign: 'center',
    },
    badgeImage: {
      width: 123 * scale,
      aspectRatio: 123 / 24,
    },
  });
};
