Contributing to `node-music-microservices`

Any contributions are welcome.


Quick Start

Fork the repository and clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/node-music-microservice.git
cd node-music-microservice
```

Create a feature branch:

```
git checkout -b feature/your-feature-name
```

Make your changes and commit using conventional format, pull requests with incorrect commit format will be invalidated.

For validation run our setup script which setups pre-commit checks:

```
chmod +x scripts/setup-dev.sh
./scripts/setup-dev.sh
This script will:
```

✅ Set up pre-commit checks


Alternative manual setup:
bash# If you prefer to install hooks manually
./scripts/install-hooks.sh
📝 Commit Message Format
This project follows the Conventional Commits specification. All commits must follow this format:
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
Commit Types
TypeDescriptionExamplefeatNew featurefeat: add user authenticationfixBug fixfix: resolve login validation issuedocsDocumentationdocs: update installation guidestyleCode style/formattingstyle: format code with prettierrefactorCode refactoringrefactor: simplify error handlingperfPerformance improvementperf: optimize database queriestestTeststest: add unit tests for user servicebuildBuild systembuild: update webpack configciCI/CD changesci: add automated testingchoreMaintenancechore: update dependenciesrevertRevert commitrevert: undo feature X
Examples
✅ Good commit messages:
bashfeat: add dark mode toggle
fix(auth): resolve JWT token expiration
docs: add API documentation for /users endpoint
style: format files with prettier
refactor(database): optimize user queries
test: add integration tests for payment flow
❌ Bad commit messages:
bashfixed bug          # Missing type, too vague
Update readme      # Missing type, not descriptive
WIP               # Not descriptive
asdfasdf          # Not meaningful
🔍 Validation
Local Validation
Our Git hooks will automatically validate your commits:
bash$ git commit -m "fixed something"
❌ Commit message does not follow conventional commit format!

Required format: <type>[optional scope]: <description>
Your message: 'fixed something'
Server Validation
Even if you bypass local hooks with --no-verify, our CI pipeline will validate all commits before allowing merges.
🛠️ Development Workflow

Create an issue (optional but recommended for large changes)
Fork and clone the repository
Set up development environment:

bash   ./scripts/setup-dev.sh

Create a feature branch:

bash   git checkout -b feature/issue-number-short-description
   # or
   git checkout -b fix/issue-number-short-description

Make your changes following our coding standards
Test your changes:

bash   # Run tests (if applicable)
   npm test
   # or
   make test

Commit with conventional format:

bash   git add .
   git commit -m "feat: add new feature"

Push to your fork:

bash   git push origin feature/your-feature-name

Create a Pull Request from your fork to our main branch

📖 Pull Request Guidelines
Before Submitting

✅ Ensure all commits follow conventional commit format
✅ All tests pass
✅ Code follows project style guidelines
✅ Documentation is updated (if needed)
✅ No merge conflicts with main branch

PR Title Format
Use the same conventional commit format for PR titles:
feat: add user profile management
fix: resolve memory leak in data processing
docs: update contributing guidelines
PR Description Template
When creating a PR, please include:
markdown## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
🚫 Common Issues & Solutions
Hook Installation Failed
bash# Try manual installation
chmod +x scripts/install-hooks.sh
./scripts/install-hooks.sh

# Or check permissions
ls -la .git/hooks/
Commit Message Rejected
bash# Check your message format
git log --oneline -1

# Amend your last commit message
git commit --amend -m "feat: proper conventional commit message"
Can't Push to Main Branch
This project uses branch protection. Please:

Create a feature branch
Push to your feature branch
Create a Pull Request

Bypassing Validation
bash# For emergencies only (will be caught by CI)
git commit --no-verify -m "emergency: hotfix for production"
🎯 Code Style Guidelines
[Add your specific coding standards here, e.g.:]

Use 2 spaces for indentation
Line length: 80 characters max
Use meaningful variable names
Add comments for complex logic
Follow [language-specific style guide]

🧪 Testing
[Add testing guidelines specific to your project:]
bash# Run all tests
npm test

# Run specific test file
npm test -- user.test.js

# Run tests with coverage
npm run test:coverage
📚 Additional Resources

Conventional Commits Specification
How to Write Good Commit Messages
Git Best Practices
Project Documentation

🤝 Code of Conduct
This project follows our Code of Conduct. By participating, you agree to uphold this code.
📧 Getting Help

💬 GitHub Discussions - General questions
🐛 GitHub Issues - Bug reports and feature requests
📧 Email: maintainers@project.com

🏆 Recognition
Contributors are recognized in our Contributors file and project documentation.

Thank you for contributing! 🙏