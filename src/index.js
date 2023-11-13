const messages = [
  "Initial commit: Setting up project structure and basic files.",
  "Add README.md: Create project documentation for better understanding.",
  "Implement user authentication: Integrate user authentication system using OAuth.",
  "Update styling for homepage: Improve the visual design and layout of the project's main page.",
  "Fix bug in user registration: Resolve an issue preventing users from registering successfully.",
  "Integrate database schema changes: Modify the database schema to accommodate new features.",
  "Add unit tests for API endpoints: Implement testing suite for increased code reliability.",
  "Optimize image loading performance: Improve image loading times for a better user experience.",
  "Implement feature: user profile editing: Allow users to edit their profile information.",
  "Refactor code for better maintainability: Reorganize code structure and improve code readability.",
  "Resolve security vulnerability: Patch security vulnerability identified in a dependency.",
  "Update third-party libraries: Keep dependencies up-to-date for security and feature enhancements."
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};