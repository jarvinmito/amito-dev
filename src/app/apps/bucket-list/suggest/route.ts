import OpenAI from "openai";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey?.trim()) {
    return Response.json(
      {
        data: null,
        message:
          "OpenAI is not configured (set OPENAI_API_KEY to enable suggestions).",
      },
      { status: 503 },
    );
  }

  try {
    const openai = new OpenAI({ apiKey });
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
