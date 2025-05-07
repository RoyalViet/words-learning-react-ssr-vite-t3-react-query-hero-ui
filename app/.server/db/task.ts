// import { sql } from "drizzle-orm";
import { db } from ".";
import { Word } from "./schema";
import { Book } from "./schema";
import { booksData, wordsData } from "./seed";

// here to run some db task
const runTask = async () => {
  // Delete all records from the Book table using SQL, cascade to related tables

  const wordsCount = await db.$count(Word);
  console.log(`total words count: ${wordsCount}`);

  // Insert books into the database
  console.log("Inserting books into the database...");
  for (const bookData of booksData) {
    await db.insert(Book).values(bookData);
  }

  // Generate random words with book associations
  console.log("Inserting words into the database...");

  const bookSlugs = booksData.map((book) => book.slug);

  // Insert words into database
  for (const wordData of wordsData) {
    const randomBookSlug =
      bookSlugs[Math.floor(Math.random() * bookSlugs.length)];
    await db.insert(Word).values({ ...wordData, bookSlug: randomBookSlug });
  }
  console.log(`Successfully inserted ${wordsData.length} words`);
  console.log(`Successfully inserted ${booksData.length} books`);
};

runTask();
