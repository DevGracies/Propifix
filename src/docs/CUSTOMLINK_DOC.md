  ## 📁 Folder/Module: `CustomLink`  
## 📁 File Path: `src/components/CustomLink.jsx`

### 🧩 Component: `CustomLink`
- **Author:** @kayzi  
- **Description:** A reusable wrapper around Next.js `Link` component that allows custom styling, consistent behavior, and easier use across the application.  

- **Props:**
  - `url: string` – Destination URL.
  - `children: React.ReactNode` – Content to be rendered inside the link.
  - `className?: string` – Optional additional class names for styling.

- **Usage Example:**
  ```tsx
  <CustomLink url="/about" className="text-purple-600 underline">
    About Us
  </CustomLink>
