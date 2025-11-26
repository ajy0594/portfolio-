# 3D Interactive Portfolio

An immersive, multi-page portfolio website featuring a 3D interactive character and a sleek, modern interface. This project combines standard web technologies with 3D rendering to create a unique user experience.

## 🌟 Features

-   **3D Integration:**
    -   **Spline Viewer:** Embeds a real-time interactive 3D scene (Robot character) using `Spline`.
    -   **Loading State:** Custom loader animation that waits for the 3D scene to fully load.
-   **Multi-Page Layout:**
    -   **Home:** Split-screen layout with hero content and 3D scene.
    -   **Projects:** Grid-based gallery of selected works with hover effects.
    -   **Services:** Detailed list of technical services offered.
    -   **Contact:** Contact information and message form.
-   **Modern UI/UX:**
    -   **Dark Mode Aesthetic:** Sleek dark theme with high contrast text and accent colors.
    -   **Entrance Animations:** Smooth fade-in and slide-up animations for page elements.
    -   **Responsive Design:** Adapts from a split-screen desktop view to a stacked mobile layout.

## 🛠️ Tech Stack

-   **HTML5:** Semantic structure with multi-page architecture.
-   **CSS3:**
    -   **CSS Grid & Flexbox:** Advanced layout techniques for the project grid and split-screen design.
    -   **CSS Variables:** For easy theme management.
    -   **Transitions:** Smooth hover states and entrance animations.
-   **JavaScript (Vanilla):**
    -   **Event Handling:** Manages the loading state of the Spline viewer.
    -   **DOM Manipulation:** Triggers entrance animations on page load.
-   **Spline:** Used for creating and embedding the 3D web experience.

## 📦 Libraries Used

-   **[Spline Viewer](https://spline.design/):** Web component for rendering Spline scenes.
-   **[Boxicons](https://boxicons.com/):** For UI icons.
-   **Google Fonts:** 'Inter' font family for a clean, modern look.

## 🚀 How to Run

1.  Navigate to the `portfolio-3d` directory.
2.  Open `index.html` in a web browser.
    -   *Note:* For the best experience with 3D assets, it is recommended to run this via a local server (e.g., Live Server in VS Code) to avoid CORS issues, although the Spline viewer typically handles remote assets well.
3.  Ensure you have an active internet connection to load the 3D scene from Spline's servers.

## 📂 Project Structure

```
portfolio-3d/
├── index.html          # Home page with 3D scene
├── projects.html       # Projects gallery page
├── services.html       # Services information page
├── contact.html        # Contact form page
├── styles.css          # Global styles and layout definitions
└── script.js           # Loading logic and animations
```
