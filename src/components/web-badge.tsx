import { Image } from 'expo-image';
import { router } from 'expo-router';
import { version } from 'expo/package.json';
import React from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { useScreenDimensions } from '@/hooks/use-screen-dimensions';
import { useTheme } from '@/hooks/use-theme';

export function WebBadge() {
  const scheme = useColorScheme();
  const theme = useTheme();
  const styles = useBadgeStyles();
  return (
    <Pressable
      onPress={() => router.push('/about')}
      style={({ focused, pressed, hovered }) => [
        styles.pressable,
        (focused || pressed || hovered) && { backgroundColor: theme.backgroundElement },
      ]}
    >
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
    </Pressable>
  );
}

const useBadgeStyles = () => {
  const { spacing, scale } = useScreenDimensions();
  return StyleSheet.create({
    pressable: {
      paddingHorizontal: spacing.four,
      paddingVertical: spacing.two,
      borderRadius: spacing.five,
    },
    container: {
      padding: spacing.three,
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
