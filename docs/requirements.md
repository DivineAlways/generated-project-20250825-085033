# Application Requirements

This document specifies the functional and non-functional requirements for the interactive prototype.

## 1. Functional Requirements (FR)

| ID | Requirement Description |
|---|---|
| FR-01 | The application MUST load an initial view displaying the first major topic of the analysis. |
| FR-02 | The user MUST be able to see a navigation menu listing all major sections of the analysis. |
| FR-03 | Clicking a section in the navigation menu MUST display the corresponding content in the main view. |
| FR-04 | The currently active section in the navigation menu MUST be visually highlighted. |
| FR-05 | The main content area MUST be scrollable for longer sections. |
| FR-06 | The layout MUST be responsive and usable on mobile, tablet, and desktop screens. |
| FR-07 | All content MUST be loaded dynamically from a single JSON data source (`dummy-data.json`). |

## 2. Non-Functional Requirements (NFR)

| ID | Requirement Description |
|---|---|
| NFR-01 | The application MUST NOT use any external JavaScript libraries or CSS frameworks (e.g., React, Vue, Bootstrap). |
| NFR-02 | The application should achieve a high performance score (e.g., >90 on Lighthouse) for fast loading. |
| NFR-03 | The code (HTML, CSS, JS) MUST be well-structured and commented for maintainability. |
| NFR-04 | The UI design should be clean, modern, and prioritize readability. |
| NFR-05 | The entire project MUST be self-contained and run without a web server (by opening `prototype/index.html` locally). |