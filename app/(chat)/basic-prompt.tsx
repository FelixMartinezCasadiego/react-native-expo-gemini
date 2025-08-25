import { ChatMessages } from "@/components/chat/ChatMessages";
import CustomInputBox from "@/components/chat/CustomInputBox";
import { useBasicPrompt } from "@/store/basic-prompt/basicPrompt.store";

import { Layout } from "@ui-kitten/components";

const BasicPromptScreen = () => {
  const messages = useBasicPrompt((state) => state.messages);
  const addMessage = useBasicPrompt((state) => state.addMessage);

  return (
    <Layout style={{ flex: 1 }}>
      <ChatMessages messages={messages} />

      <CustomInputBox onSendMessage={(message) => addMessage(message)} />
    </Layout>
  );
};

export default BasicPromptScreen;
