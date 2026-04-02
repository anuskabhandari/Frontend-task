#  Frontend Task

## Project Overview
This project is submitted for the **Frontend Trainee Task**.  
It demonstrates my skills in **React, Next.js, and TypeScript** through both **UI replication** and a **functional dashboard**.

The project includes two main parts:

1. **Task 1: UI Development**
   - Header section with highlighted text
   - Card components with titles, subtitles, descriptions, and images
   - Stats section (replicated from Figma)
   - Layout visually aligned with Figma designs

2. **Task 2: Functional Dashboard**
   - User list fetched from the public API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
   - Search users by name or email (client-side filtering)
   - View posts for each user on a separate page
   - Simple and clean card-style layout for both users and posts

---

## Tech Stack
- **Frontend Framework:** Next.js (App Router)  
- **Language:** TypeScript  
- **Styling:** Inline CSS for layout and basic styling  
- **API:** JSONPlaceholder (`https://jsonplaceholder.typicode.com`)  

---

## Features

### Task 1: UI
- Header with highlighted keywords
- Four cards with images, titles, subtitles, and descriptions
- Stats section with big card and two smaller cards
- Layout matches Figma design (icons, colors, spacing)

### Task 2: Functional Dashboard
- `/dashboard` route: displays a list of users
- Search bar filters users instantly by name or email
- “View Posts” button navigates to `/dashboard/users/[id]`
- Posts page shows all posts for the selected user
- Cards for users and posts with clean, simple design

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/anuskabhandari/Frontend-task
cd vrit-task

2. Install dependencies:

npm install

3. Run the development server:
npm run dev

4. Open in your browser:
Task 1 UI: http://localhost:3000/
Task 2 Dashboard: http://localhost:3000/dashboard

----

## Author
Anuska Bhandari

