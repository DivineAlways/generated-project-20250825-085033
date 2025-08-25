# User Flows

This document describes the primary user flow for interacting with the prototype.

## Main Content Exploration Flow

This flow details how a user navigates and consumes the analysis.

1.  **Entry Point**: User opens `prototype/index.html`.

2.  **Initial View**: The page loads.
    -   The application fetches content from `dummy-data.json`.
    -   A sidebar navigation is populated with the titles of the main sections (e.g., "Introduction", "Theological Perspectives", etc.).
    -   The main content area displays the content for the first section ("Introduction").
    -   The "Introduction" link in the sidebar is marked as 'active'.

3.  **User Interaction**: User decides to view a different section.
    -   The user clicks on the "Historical Context" link in the sidebar.

4.  **Content Update**: The application responds to the click.
    -   The main content area is cleared.
    -   The content for "Historical Context", including its title, summary, and all subsections, is rendered in the main content area.
    -   The 'active' state in the sidebar moves from "Introduction" to "Historical Context".

5.  **Content Consumption**: User reads the content.
    -   The user scrolls through the main content area to read the entire section.

6.  **Repeat**: The user can repeat steps 3-5 to explore any other section of the analysis.

### Flow Diagram (Text-based)

```
[Start] -> Open `prototype/index.html`
   |
   v
[Page Loads] -> Fetch Data & Render UI (Default View: Introduction)
   |
   v
[User Clicks Nav Link (e.g., 'Theological Perspectives')]
   |
   v
[JS Updates Content Area with Section Data]
   |
   v
[JS Updates Active State in Nav]
   |
   +------------------------------------+
   |                                    |
   v                                    |
[User Reads Content] <-- [User Clicks Another Nav Link]
```