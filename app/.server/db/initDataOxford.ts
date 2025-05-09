import { eq } from "drizzle-orm";
import * as fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { wordsTranslation } from "./oxfordTranslation";
import { Word } from "./schema";
import { db } from ".";

// Create __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// here to run some db task
const runTask = async () => {
  // total words count
  const wordsCount = await db.$count(Word);
  console.log(`total words count: ${wordsCount}`);

  // Read data from oxford5000Words.json file
  const fullWordPath = join(__dirname, "oxford5000Words.json");
  const oxfordDataArray = JSON.parse(fs.readFileSync(fullWordPath, "utf8"));

  console.log(`Read ${oxfordDataArray.length} words from oxford5000Words.json`);

  let importedCount = 0;
  let updatedCount = 0;

  // Process each word in the array
  for (const oxfordData of oxfordDataArray) {
    try {
      const wordData = {
        id: oxfordData.id,
        bookSlug: "Oxford-5000-words",
        slug: `Oxford-5000-words_${String(oxfordData.value.word).replace(/\s+/g, "-")}_${String(oxfordData.value.type).replace(/\s+/g, "-")}`,
        word: oxfordData.value.word,
        href: oxfordData.value.href,
        type: oxfordData.value.type,
        level: oxfordData.value.level,
        usPronounce: oxfordData.value.phonetics?.us || "",
        ukPronounce: oxfordData.value.phonetics?.uk || "",
        usAudioMp3: oxfordData.value.us?.mp3 || "",
        usAudioOgg: oxfordData.value.us?.ogg || "",
        ukAudioMp3: oxfordData.value.uk?.mp3 || "",
        ukAudioOgg: oxfordData.value.uk?.ogg || "",
        translation:
          wordsTranslation[String(oxfordData.id)] || oxfordData.value.word,
        remember: JSON.stringify(oxfordData.value.examples || ""),
      };

      // Check if word already exists
      const existingWordId = await db.query.Word.findFirst({
        where: (word, { eq, or }) => or(eq(word.id, wordData.id)),
      });
      const existingWordSlug = await db.query.Word.findFirst({
        where: (word, { eq, or }) => or(eq(word.slug, wordData.slug)),
      });

      if (existingWordId) {
        // Only update if the book slug is "Oxford-5000-words"
        if (existingWordId.bookSlug === "Oxford-5000-words") {
          continue;
        }

        await db.update(Word).set(wordData).where(eq(Word.id, wordData.id));
        updatedCount++;

        if (updatedCount % 100 === 0) {
          console.log(`Updated ${updatedCount} words so far...`);
        }
      } else if (existingWordSlug) {
        continue;
      } else {
        await db.insert(Word).values(wordData);
        importedCount++;

        if (importedCount % 100 === 0) {
          console.log(`Imported ${importedCount} new words so far...`);
        }
      }
    } catch (error) {
      console.error(
        `Error processing word ${oxfordData.value?.word || "unknown"}:`,
        error,
      );
    }
  }

  console.log(
    `Task completed successfully. Imported ${importedCount} new words and updated ${updatedCount} existing words.`,
  );
  return;
};

runTask();
