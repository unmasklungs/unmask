import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storiesDir = join(__dirname, 'src/content/post/stories');

// List of all story files
const storyFiles = [
  'christine.mdx',
  'diane.mdx',
  'dr-khoo.mdx',
  'janet.mdx',
  'kelly.mdx',
  'kerri.mdx',
  'luana.mdx',
  'maryann.mdx'
];

// Default template for frontmatter
const defaultFrontmatter = {
  publishDate: '2024-06-01',
  draft: false,
  image: '',
  excerpt: 'A personal story about the journey with lung cancer.'
};

// Update each story file
storyFiles.forEach(filename => {
  const filePath = path.join(storiesDir, filename);
  
  try {
    // Read the file
    let content = readFileSync(filePath, 'utf8');
    
    // Extract the frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (frontmatterMatch) {
      const frontmatterStr = frontmatterMatch[1];
      let frontmatter = {};
      
      // Parse the frontmatter
      frontmatterStr.split('\n').forEach(line => {
        const match = line.match(/^(\w+):\s*(.*)$/);
        if (match) {
          const key = match[1].trim();
          let value = match[2].trim();
          
          // Remove quotes if present
          if ((value.startsWith('"') && value.endsWith('"')) || 
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          
          frontmatter[key] = value;
        }
      });
      
      // Update with default values if not present
      Object.entries(defaultFrontmatter).forEach(([key, value]) => {
        if (!(key in frontmatter)) {
          frontmatter[key] = value;
        } else if (key === 'publishDate' && frontmatter[key].includes(',')) {
          // Convert date format from "Month Day, Year" to "YYYY-MM-DD"
          const date = new Date(frontmatter[key]);
          if (!isNaN(date.getTime())) {
            frontmatter[key] = date.toISOString().split('T')[0];
          }
        }
      });
      
      // Ensure title is properly formatted
      if (!frontmatter.title || frontmatter.title === 'Input Title') {
        // Generate a title from the filename
        const name = filename.split('.')[0].split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        frontmatter.title = `${name}'s Story`;
      }
      
      // Rebuild the frontmatter string
      let newFrontmatter = '---\n';
      Object.entries(frontmatter).forEach(([key, value]) => {
        newFrontmatter += `${key}: ${typeof value === 'string' && value.includes(' ') ? `"${value}"` : value}\n`;
      });
      newFrontmatter += '---';
      
      // Replace the old frontmatter with the new one
      content = content.replace(frontmatterMatch[0], newFrontmatter);
      
      // Write the updated content back to the file
      writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filename}`);
    }
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.message);
  }
});

console.log('All story files have been updated.');
