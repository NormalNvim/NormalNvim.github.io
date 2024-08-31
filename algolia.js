/* ALGOLIA SCRAPER
 * This script searches for relevant content to index in docsDir.
 * Before running it make sure you have the file algolia-apikey.js
 * containing your ALGOLIA_API_KEY and make sure you have it on gitignore.
 *
 * example: node algolia.js
 *
 * IMPORTANT NOTE:
 * We have been accepted into the algolia program for FOSS projects.
 * So this scraper is not really necessary anymore unless that changes.
 * */

const fs = require('fs');
const path = require('path');
const algoliasearch = require('algoliasearch');
const cheerio = require('cheerio');
const { ALGOLIA_API_KEY } = require('./.algolia-apikey');

// MAKE SURE YOUR TOKEN IS CORRECT
// Initialize Algolia client with your credentials
const appId = 'S1DLXCNPKJ'; // Your Algolia Application ID
const apiKey = ALGOLIA_API_KEY; // Get API key from apikey.js
const client = algoliasearch(appId, apiKey);
const index = client.initIndex('normalnvim');

// Directory containing your Docusaurus build content
const docsDir = path.join(__dirname, 'build', 'docs');

// Toggle DEBUG_MODE to true or false
const DEBUG_MODE = false;

// Debug print function
function debugPrint(message, ...optionalParams) {
  if (DEBUG_MODE) {
    console.log(message, ...optionalParams);
  }
}

// Function to calculate relevancy score
function calculateRelevancyScore(content) {
  // Basic example: higher scores for longer content
  // You can enhance this function with more complex logic
  const lengthScore = content.length / 1000; // Normalize length
  return Math.min(lengthScore, 1); // Ensure score is between 0 and 1
}

// Recursively traverse directories and process files
function extractDocsFromDir(dir) {
  const records = [];

  function readDirRecursive(currentDir) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // Recursively process subdirectories
        readDirRecursive(filePath);
      } else if (stats.isFile() && file.endsWith('.html')) {
        // Process HTML files
        debugPrint(`Processing file: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf8');
        debugPrint(`Content of ${file}:`, content.slice(0, 100)); // Show first 100 characters

        // Parse and create records using cheerio
        const $ = cheerio.load(content);
        const title = $('h1').first().text() || $('title').text() || '';
        const bodyContent = $('main').text() || $('body').text() || '';

        const relevancyScore = calculateRelevancyScore(bodyContent);

        const record = {
          objectID: path.relative(docsDir, filePath),
          title: title,
          content: bodyContent,
          url: `https://normalnvim.github.io/docs/${path.relative(docsDir, filePath).replace(/\index.html$/, '')}`,
          relevancy: relevancyScore,
          hierarchy: {
            lvl0: title || '',
            lvl1: '', // Adjust if your content has specific sub-levels
            lvl2: '', // Adjust if needed
            lvl3: '', // Adjust if needed
            lvl4: '', // Adjust if needed
            lvl5: '', // Adjust if needed
          },
        };

        debugPrint('Generated record:', record);
        records.push(record);
      }
    });
  }

  readDirRecursive(dir);
  return records;
}

async function uploadRecords() {
  const records = extractDocsFromDir(docsDir);
  try {
    const { objectIDs } = await index.saveObjects(records);
    console.log('Algolia - Index updated successfully:', objectIDs);
  } catch (error) {
    console.error('Error uploading documents:', error);
  }
}

uploadRecords();

