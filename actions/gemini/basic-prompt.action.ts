import geminiApi from "../gemini.api";

export const getBasicPrompt = async (prompt: string): Promise<string> => {
  try {
    const response = await geminiApi.post(
      `/basic-prompt`,
      { prompt },
      { responseType: "text" }
    );

    console.log({ data: response.data });

    return response.data.trim();
  } catch (error) {
    console.error("Error with endpoint /basic-prompt", error);
    return "Error with endpoint /basic-prompt";
  }
};
