import { ChatMessages } from '@/components/chat/ChatMessages';
import CustomInputBox from '@/components/chat/CustomInputBox';
import { useBasicPrompt } from '@/store/basic-prompt/basicPrompt.store';

import { Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const BasicPromptScreen = () => {
  const messages = useBasicPrompt((state) => state.messages);
  const addMessage = useBasicPrompt((state) => state.addMessage);
  const geminiWriting = useBasicPrompt((state) => state.geminiWriting);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1 }}>
        <ChatMessages messages={messages} isGeminiWriting={geminiWriting} />

        <CustomInputBox onSendMessage={(message) => addMessage(message)} />
      </Layout>
    </SafeAreaView>
  );
};

export default BasicPromptScreen;
