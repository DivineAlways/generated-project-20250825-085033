document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('main-nav');
    const contentContainer = document.getElementById('content-area');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const DATA_URL = 'assets/dummy-data.json';

    let reportData = [];

    async function loadContent() {
        try {
            const response = await fetch(DATA_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            reportData = await response.json();
            populateNav();
            renderContent(reportData[0].id);
            setupEventListeners();
        } catch (error) {
            contentContainer.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            navContainer.innerHTML = '';
        }
    }

    function populateNav() {
        navContainer.innerHTML = reportData.map(section => 
            `<a href="#${section.id}" data-id="${section.id}">${section.title}</a>`
        ).join('');
    }

    function renderContent(sectionId) {
        const section = reportData.find(s => s.id === sectionId);
        if (!section) {
            contentContainer.innerHTML = `<p>Content not found.</p>`;
            return;
        }

        const subsectionsHTML = section.subsections.map(sub => `
            <div class="content-subsection">
                <h3>${sub.title}</h3>
                <p>${sub.content.replace(/\n/g, '</p><p>')}</p>
            </div>
        `).join('');

        contentContainer.innerHTML = `
            <div class="content-section">
                <h2>${section.title}</h2>
                ${section.summary ? `<p>${section.summary}</p>` : ''}
                ${subsectionsHTML}
            </div>
        `;
        
        updateActiveNavLink(sectionId);
        contentContainer.scrollTop = 0; // Scroll to top on content change
    }

    function updateActiveNavLink(activeId) {
        const navLinks = navContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            if (link.dataset.id === activeId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function setupEventListeners() {
        navContainer.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.tagName === 'A') {
                const sectionId = e.target.dataset.id;
                renderContent(sectionId);
                if (window.innerWidth <= 900) {
                    sidebar.classList.remove('open');
                }
            }
        });

        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
        
        // Close sidebar if user clicks outside of it on mobile
        contentContainer.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                 sidebar.classList.remove('open');
            }
        })
    }

    loadContent();
});