import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: '123456',
//   dangerouslyAllowBrowser: true

// })

// console.log(openai.apiKey);

async function testAI() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say hello!" }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error details:", error);
  }
}

testAI();