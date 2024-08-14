import OpenAI from "openai";

const openai = new OpenAI();

export async function GET() {
  try {
    const suggestion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "Suggest 6 items for my bucket list no sublist",
        },
      ],
      model: "gpt-4o-mini",
    });

    console.log("Suggestions", suggestion);
    return Response.json({
      data: suggestion,
      message: "Here are some suggestions",
    });
  } catch (error) {
    console.log("ERror", error);
    return Response.json({ data: null, message: error });
  }
}
