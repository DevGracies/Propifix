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

## 🔐 Environment Variables

We use a central environment validation system in `lib/env.ts`.  
This ensures all required variables are defined at runtime and prevents unexpected errors during development or deployment.

### How to set up your `.env` file:

**Copy the template:**
```bash
cp .sapmle.env .env
```
Fill in your actual values inside the .env file using the keys listed in .sapmle.env.
⚠️ Never commit your .env file!
Only .sapmle.env should be tracked in git.

### How to use `lib/env.ts` in your code:

Instead of directly accessing `process.env.VARIABLE_NAME`, import validated variables from `lib/env.ts` like this:

```ts
import { NEXTAUTH_SECRET, CLOUDINARY_CLOUD_NAME } from '@/lib/env';
```
This helps:
- ✅ Catch missing or undefined environment variables early.
- ✅ Avoid repeating `process.env` checks in multiple files.
- ✅ Keep your config organized in one place.

## 🔐 Adding New Environment Variables

When adding new environment variables, follow these steps:

### 1. Declare the new variable in `lib/env.ts`:
Add the new variable by calling `getEnvVar()` for the variable you wish to validate and export. For example:

```ts
export const NEW_ENV_VAR = getEnvVar("NEW_ENV_VAR");
```

### 2. Validate the new variable:
The `getEnvVar` function automatically validates that the variable exists. If not, it throws an error with a clear message.

### 3. Add the new variable to .sapmle.env:
Add a placeholder for the new variable in the .sapmle.env file to remind developers to set it in their local .env file:

local .env file:

```bash
NEW_ENV_VAR=your_value_here
```

### 4. Use the new variable in your code:
You can now import and use the new variable as shown earlier:

```ts
import { NEW_ENV_VAR } from '@/lib/env';
```

By following these steps, we ensure that all environment variables are properly validated, documented, and consistently used across the project.

## 📚 Documenting Components

To keep track of reusable UI components, we maintain a component registry in `COMPONENTS.md`.

### When you create a component:

Add an entry to `COMPONENTS.md` and include the following:

- **Name**
- **Description**
- **Props**
- **Usage Example**
- **File Path**
- **Author and Date**
- **Any Extra Notes**

✅ This ensures the whole team knows what’s available and prevents duplication.



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

