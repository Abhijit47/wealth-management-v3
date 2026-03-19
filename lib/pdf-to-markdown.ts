'use server';

import { readdir, readFile, stat, writeFile } from 'fs/promises';
import { join } from 'path';

import { extractLinks, extractText, getDocumentProxy } from 'unpdf';

export async function getLastAddedFile(folderPath: string): Promise<string> {
  const files = await readdir(folderPath);
  const fileStats = await Promise.all(
    files.map(async (file) => {
      const stats = await stat(join(folderPath, file));
      return { file, mtime: stats.mtime };
    }),
  );
  fileStats.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
  return fileStats[0].file;
}

export async function extractTextFromPDF() {
  const folderPath = join(process.cwd(), 'data', 'pdfs');
  const lastAddedFile = await getLastAddedFile(folderPath);
  console.log(`Last added file: ${lastAddedFile}`);

  const filePath = join(folderPath, lastAddedFile);

  console.log(`filepath: ${filePath}`);

  const buffer = await readFile(filePath);
  const pdf = await getDocumentProxy(new Uint8Array(buffer));

  // Extract all links from the PDF
  const { totalPages, links } = await extractLinks(pdf);

  // Extract text content from the PDF
  const textContent = await extractText(pdf);

  console.log(`Total pages: ${totalPages}`);
  console.log(`Found ${links.length} links:`);

  // console.log(textContent); // Print the first 200 characters of the extracted text

  // const loadingTask = getDocument(filePath);
  // const pdf = await loadingTask.promise;

  // console.log(`Pages: ${pdf.numPages}`);
  // console.log('Metadata:', await pdf.getMetadata());

  // const { stdout } = await exec(`git log -1 --format=%ai -- ${filePath}`);
  // if (stdout) {
  //   return new Date(stdout.trim()).toISOString();
  // }
  // return new Date().toISOString();
  // for (let pageNo = 1; pageNo <= pdf.numPages; pageNo += 1) {
  //   const page = await pdf.getPage(pageNo);
  //   const content = await page.getTextContent();

  //   const text = content.items
  //     .filter((item) => item.str && item.transform) // ignore images
  //     .map((item) => item.str)
  //     .join(' ');
  //   console.log(`Page ${pageNo}: ${text.slice(0, 80)}…`);
  // }
}

// import { groq, type GroqLanguageModelOptions } from '@ai-sdk/google';
// import { google, type GoogleGenerativeAIProviderOptions } from '@ai-sdk/google';
// import { generateText } from 'ai';

// const result = await generateText({
//   model: google('gemini-2.5-flash'),
//   providerOptions: {
//     gemini: {
//       responseModalities:["TEXT"],
//       // temperature: 0.7,
//       // maxTokens: 100,
//     } satisfies GoogleGenerativeAIProviderOptions,
//   },
//   prompt: 'How many "r"s are in the word "strawberry"?',
// });

// import { postSchema } from '@/content-collections';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';
import { generateText, Output } from 'ai';
import { readFileSync } from 'fs';
import { postSchema } from './ai';

// import { createOpenAI } from '@ai-sdk/openai';

// const openAI = createOpenAI({
//   // custom settings, e.g.
//   // headers: {
//   //   Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//   // },

//   apiKey: process.env.OPENAI_API_KEY!,
// });

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function extractTextWithAI() {
  const folderPath = join(process.cwd(), 'data', 'pdfs');
  const lastAddedFile = await getLastAddedFile(folderPath);

  const filePath = join(folderPath, lastAddedFile);

  const model = google('gemini-2.5-flash');

  const { text: extractedText } = await generateText({
    model,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Read the pdf and return me as a markdown format.',
          },
          {
            type: 'file',
            mediaType: 'application/pdf',
            data: readFileSync(filePath),
            filename: lastAddedFile,
          },
        ],
      },
    ],

    // output: Output.object({
    //   schema: postSchema,
    // }),
  });
  console.log({ extractedText });

  const schema = postSchema;

  // const markdownFilePath = join(
  //   process.cwd(),
  //   'data',
  //   'markdowns',
  //   `${lastAddedFile}.md`,
  // );
  // await writeFile(markdownFilePath, text);

  const { text } = await generateText({
    model: openai('gpt-4o'),
    output: Output.object({
      schema: postSchema,
    }),
    prompt: `Extract the following text into a markdown format that matches this schema: ${schema}\n\n${extractedText}`,
  });
  // write the text to a markdown file with zod schema validation
  // console.log({ text });
  await writeFile(join(process.cwd(), 'data', `${lastAddedFile}.md`), text);
}
