import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useScreenDimensions } from '@/hooks/use-screen-dimensions';
import { useTheme } from '@/hooks/use-theme';

export default function AboutScreen() {
  const styles = useAboutStyles();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">About</ThemedText>
      <ThemedText>This is a demo Expo Router app with TV support.</ThemedText>
      <Pressable
        onPress={() => {
          if (router.canDismiss()) {
            console.log('Dismiss');
            router.dismiss();
          } else if (router.canGoBack()) {
            console.log('Back');
            router.back();
          } else {
            console.log('Navigate');
            router.navigate('/');
          }
        }}
      >
        {({ focused, hovered, pressed }) => (
          <ThemedView
            style={[
              styles.dismissButton,
              pressed || focused || hovered ? styles.pressed : null,
            ]}
          >
            <ThemedText
              type="link"
              style={
                (focused || pressed || hovered) && styles.dismissTextFocused
              }
            >
              Dismiss
            </ThemedText>
          </ThemedView>
        )}
      </Pressable>
    </ThemedView>
  );
}

const useAboutStyles = () => {
  const { spacing } = useScreenDimensions();
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      padding: 24,
      gap: 16,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    pressed: {
      backgroundColor: theme.tint,
    },
    dismissButton: {
      flexDirection: 'row',
      paddingHorizontal: spacing.four,
      paddingVertical: spacing.two,
      borderRadius: spacing.five,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dismissTextFocused: {
      color: theme.background,
    },
  });
};
