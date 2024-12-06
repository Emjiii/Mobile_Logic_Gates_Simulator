import { StyleSheet, Image, Platform, Button, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const sendFile = () => {
    // Implement file upload logic
    console.log('File upload initiated');
  };

  const receiveFiles = () => {
    // Implement file download logic
    console.log('File download initiated');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
        size={310}
        color="#808080"
        name="icloud.fill"  // Use a valid SF Symbol name here
        style={styles.headerImage}
      />

      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">File Sharing</ThemedText>
      </ThemedView>
      <ThemedText>
        Easily upload, download, and share files with others. Manage your files
        in a secure and organized way.
      </ThemedText>

      <Collapsible title="Send a File">
        <ThemedText>
          To upload a file, click the button below to select and upload your file.
        </ThemedText>
        <Button title="Send File" onPress={sendFile} />
      </Collapsible>

      <Collapsible title="Receive a File">
        <ThemedText>
          To download a file, select from the available files and click download.
        </ThemedText>
        <Button title="Received File" onPress={receiveFiles} />
      </Collapsible>

      <Collapsible title="File Management">
        <ThemedText>
          Manage your files, view uploaded content, and access shared files with
          ease.
        </ThemedText>
        <ExternalLink href="https://example.com/file-management">
          <ThemedText type="link">Learn more about file management</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="File Sharing Platforms">
        <ThemedText>
          This app allows you to share files with popular platforms like Google Drive, Dropbox, etc.
        </ThemedText>
        <ExternalLink href="https://www.google.com/drive/">
          <ThemedText type="link">Google Drive</ThemedText>
        </ExternalLink>
        <ExternalLink href="https://www.dropbox.com/">
          <ThemedText type="link">Dropbox</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Security & Privacy">
        <ThemedText>
          We prioritize the security of your files. All files are encrypted and
          only shared with your permission.
        </ThemedText>
        <ExternalLink href="https://example.com/security">
          <ThemedText type="link">Learn more about security</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
