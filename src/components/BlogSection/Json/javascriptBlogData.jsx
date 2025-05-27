export const javaScriptPosts = [
  {
    title: "Top 5 Tips for Building Scalable Web Apps",
    date: "April 20, 2025",
    excerpt: "A guide to creating web applications that can handle growth and maintain performance.",
    category: "JavaScript",
    codeSnippet: `// Example of a scalable API call
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}`,
  },
  {
    title: "JavaScript ES6+ Features You Should Know",
    date: "December 15, 2024",
    excerpt: "An overview of the most useful ES6+ features for modern JavaScript development.",
    category: "JavaScript",
    codeSnippet: `// ES6 Arrow Functions and Destructuring
const greet = ({ name, age }) => {
  return \`Hello, \${name}! You are \${age} years old.\`;
};

console.log(greet({ name: 'Alice', age: 25 }));`,
  },
];