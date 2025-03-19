# Contributing to Propifix  

Thank you for contributing to Propifix! This guide explains how to set up your environment, follow our development workflow, and submit changes effectively.  

---

## 🛠️ Setting Up Your Environment  

1. **Clone the repository**  
   Since you are a collaborator, you don’t need to fork the repo. Instead, clone it directly:  
   ```bash
   git clone https://github.com/Propifix/Frontend.git
   cd Frontend
   ```  
2. **Set up the upstream branch** (if you haven’t already):  
   ```bash
   git remote add upstream https://github.com/Propifix/Frontend.git
   ```  
3. **Install dependencies**  
   ```bash
   npm install
   ```  

---

## 🔄 Branching Strategy  

We use the **dev branch workflow**, meaning all development happens on `dev`.  

- `main` → **Stable, production-ready code.**  
- `dev` → **Active development branch.**  
- `feature/your-feature-name` → **Feature or bug fix branches (created from `dev`).**  

### Creating a New Branch  
1. Always pull the latest changes from `dev` before starting:  
   ```bash
   git checkout dev
   git pull origin dev
   ```  
2. Create a new branch on top of `dev`:  
   ```bash
   git checkout -b feature/your-feature-name
   ```  

---

## 💡 Coding Standards  

- Follow our **ESLint and Prettier** configurations.  
- Write **meaningful commit messages** using [Conventional Commits](https://www.conventionalcommits.org/):  
  - `feat: add login form` (New feature)  
  - `fix: resolve button alignment` (Bug fix)  
  - `chore: update dependencies` (Maintenance)  

---

## 🔄 Submitting a Pull Request (PR)  

1. **Push your branch**:  
   ```bash
   git push origin feature/your-feature-name
   ```  
2. **Create a PR** to merge into `dev`.  
3. **Ensure your code is tested** before submitting.  
4. **Use the PR template** and describe your changes clearly.  
5. **Link related issues** (if applicable):  
   ```markdown
   Closes #issue-number
   ```  
6. Wait for **code review** before merging.  

---

## 🐞 Reporting Issues  

- If you find a bug or have a feature request, open an **issue** with:  
  - A clear title and description.  
  - Steps to reproduce (if applicable).  
  - Screenshots or logs (if helpful).  

---

Thank you for helping make Propifix better! 🚀

