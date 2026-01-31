import { Platform, StyleSheet, TVFocusGuideView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { EventHandlingDemo } from '@/components/tv-event-demo';
import { Collapsible } from '@/components/ui/collapsible';
import { useScreenDimensions } from '@/hooks/use-screen-dimensions';
import { useTheme } from '@/hooks/use-theme';

const WrappedTVFocusGuideView = (props: any) => {
  if (Platform.OS === 'web') {
    return <ThemedView {...props} />;
  }
  return <TVFocusGuideView {...props} />;
};

export default function FocusDemoScreen() {
  const styles = useFocusDemoScreenStyles();
  const theme = useTheme();
  const { spacing } = useScreenDimensions();
  const contentPlatformStyle = {
    paddingTop: spacing.six + spacing.four,
    paddingBottom: spacing.four,
  };

  return (
    <ThemedView
      style={[
        styles.contentContainer,
        contentPlatformStyle,
        { backgroundColor: theme.background },
      ]}
    >
      <WrappedTVFocusGuideView autoFocus>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">TV event handling demo</ThemedText>
        </ThemedView>
        <ThemedText>
          Demo of focus handling and TV remote event handling in{' '}
          <ThemedText type="code">Pressable</ThemedText> and{' '}
          <ThemedText type="code">Touchable</ThemedText> components.
        </ThemedText>
        <Collapsible title="How it works">
          <ThemedText>
            • On TV platforms, these components have "onFocus()" and "onBlur()"
            props, in addition to the usual "onPress()". These can be used to
            modify the style of the component when it is navigated to or
            navigated away from by the TV focus engine.
          </ThemedText>
          <ThemedText>
            • On web, Pressable has the above handlers, and also has
            "onHoverIn()", and "onHoverOut()" props.
          </ThemedText>
          <ThemedText>
            • In addition, the functional forms of the Pressable style prop and
            the Pressable content, which in React Native core take a "pressed"
            boolean parameter, can also take "focused" as a parameter on TV
            platforms, and "hovered" as a parameter on web.
          </ThemedText>
          <ThemedText>
            • As you use the arrow keys to navigate around the screen, the demo
            uses the above props to update lists of recent events.
          </ThemedText>
          <ThemedText>
            In RNTV 0.76 and above, `Pressable` and `Touchable` components
            receive "focus", "blur", "pressIn", and "pressOut" events directly
            from native code, for improved performance when navigating around
            the screen.
          </ThemedText>
        </Collapsible>
      </WrappedTVFocusGuideView>
      <EventHandlingDemo />
    </ThemedView>
  );
}

const useFocusDemoScreenStyles = function () {
  const { scale, width, spacing } = useScreenDimensions();
  const theme = useTheme();
  return StyleSheet.create({
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
      paddingHorizontal: spacing.four,
      paddingTop: spacing.three,
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8 * scale,
      justifyContent: 'center',
    },
    sectionsWrapper: {},
  });
};
