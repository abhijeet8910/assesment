This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Frontend Assessment - Submission

Hi there! This is my submission for the technical assessment. I've built this using **React**, **Tailwind CSS**.

Below is a breakdown of how I approached both problems and the logic behind my solutions.

---

## Assessment 1: Text Mapping & Sync

**The Goal:** Connect a summary list (Output) to a detailed document (Input) so that clicking a summary item scrolls to the exact spot in the document.

### My Approach
I realized that searching by text (like matching string-to-string) could be buggy if the same sentence appears twice. So, I used an **ID-based system**:

1.  **The Data:** I gave every section a unique ID (like `id: "1"`).
2.  **The Scroll Logic:** When you click an item in the right box, the app looks for the matching ID in the left box.
3.  **The Action:** I used the standard `element.scrollIntoView()` function to smoothly scroll the text into the center of the screen.

**Visual Feedback:**
To make it clear where the user should look, I added a small "Flash Effect." When the scroll finishes, the target text highlights yellow for 2 seconds and then fades out.

---

## Assessment 2: 3D Body Visualization(just logic i didn't found the low poly atanomy 3d model of human body )

**The Goal:** Highlight specific body parts on a 3D model based on a patient's symptoms.

### How I Solved It (The "No Model" Strategy)
I initially looked for a free 3D human model online, but most were either not separated into proper parts (just one big mesh) or required payment.

so, i just write logic of the problem

### The Logic Steps
The core problem was: *How do I turn "Stomach Pain" into a red block on the screen?*

1.  **The Dictionary:** I created a simple lookup object (a map) to translate symptoms into body parts:
    ```javascript
    const SYMPTOM_MAP = {
      "migraine": ["head"],
      "abdominal pain": ["torso", "stomach"],
      // etc...
    };
    ```

2.  **The Process:**
    * When a patient is selected, I grab their symptoms.
    * I run those symptoms through my dictionary to get a list of "Active Parts" (e.g., `['head', 'torso']`).
    * I pass this list to the 3D component.

3.  **The Rendering:**
    * The 3D component checks every part.
    * If `activeParts` includes "head", the Head block turns **Red**.
    * If not, it stays the default color.

This solution is scalable—if we need to add a new disease, we just add it to the dictionary object, and the 3D model updates automatically.

---


