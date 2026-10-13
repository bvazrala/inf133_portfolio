IN4MATX 133 - Assignment 1: Portfolio
Bala Kausik Vazrala (bvazrala@uci.edu)

Open index.html to start. Live copy (GitHub Pages):
https://bvazrala.github.io/inf133_portfolio/


1. POINTS I BELIEVE I HAVE COMPLETED
------------------------------------
10 out of 10.

  Readme is complete ....................... 1
  Basic HTML content ....................... 2
  Basic CSS styling ........................ 1
  Advanced feature ......................... 1
  Responsive layout ........................ 2
  Passes three validation checks ........... 1
  Embracing the spirit of the assignment ... 2

I would also like to be considered for the bonus point (see section 6).


2. SUBMITTING A PORTFOLIO I MADE BEFORE THIS COURSE
---------------------------------------------------
This is based on my existing portfolio, https://bvazrala.vercel.app, which I
built before this course with Next.js, TypeScript, Tailwind, and three.js.
For this assignment I rebuilt it as plain HTML, CSS, and JavaScript with
Bootstrap 5.3, so there is no build step and nothing to install.

What changed:
  - One long scrolling page became four pages (Home, About, Projects,
    Contact) with the same navigation bar on each.
  - The animated three.js background graph became a static image of the
    same graph from my CS 179 project, with alt text, a caption, and a
    color legend written as real text.
  - I removed the resume link and PDF.
  - Each project now has a figure taken from the project itself, and the
    Yield project has two embedded videos and a results table.
  - A contact form replaces the plain list of links.

What I changed to pass the validation checks:
  - All icons use <span> instead of <i>. AChecker reports every <i>
    element as a known problem ("i (italic) element used"), and Font
    Awesome icons work the same on a <span>.
  - Every form field has a <label> tied to it with for/id, and errors are
    linked to their field with aria-describedby.
  - Headings never skip a level (h1, then h2, then h3), with one h1 per
    page. AChecker treats a skipped level as a known problem.
  - Both tables have a <caption>, a <thead>, and <th scope="col"> headers.
  - No trailing slashes on void elements, no type attribute on scripts,
    and every <section> and <article> has a heading, so the W3C checker
    shows no warnings or info messages either.
  - Text colors were chosen to meet WCAG AA contrast (see section 5).


3. FEATURES INCLUDED
--------------------
Basic HTML content (all six):
  - Images with descriptive alt text: the Big Five graph on the home page
    and one figure per project on the Projects page.
  - Headings and paragraph text on every page.
  - Links to external pages: GitHub repositories, demo videos on YouTube,
    the live Streamlit dashboard, LinkedIn.
  - Multiple pages with navigation: index.html, about.html, projects.html,
    contact.html, linked from a Bootstrap navbar on every page. The current
    page is marked with aria-current="page".
  - Semantic HTML: header, nav, main, section, article, aside, figure,
    figcaption, footer, time, dl/dt/dd.
  - Custom icons from Font Awesome 7 (GitHub, LinkedIn, envelope, play,
    paper plane, chart).

Basic CSS styling (all four):
  - Padding and margins for spacing and readable line lengths (body text
    is capped at about 70 characters per line).
  - A custom color palette defined once as CSS variables in css/styles.css.
    The five trait colors from the graph are reused in its legend and the
    favicon.
  - Bootstrap helpers: grid, navbar, buttons, tables (.table,
    .table-responsive, .caption-top), forms (.form-control, .form-select,
    .invalid-feedback), .visually-hidden, .visually-hidden-focusable,
    .text-nowrap.
  - Google Fonts with fallbacks: Schibsted Grotesk for headings and
    interface text ("Helvetica Neue", Arial, sans-serif) and Source Serif 4
    for reading text (Georgia, "Times New Roman", serif).

Advanced features:
  - Tables a screen reader can read: an education table (About page) and
    a Yield results table (Projects page), each with a caption, column
    headers with scope, and a keyboard-focusable scroll region on phones.
  - More complex layouts: a responsive navbar that collapses into a Menu
    button, a CSS grid hero that rearranges between phone and laptop, and
    a sticky sidebar on the About page with in-page links.
  - Embedded HTML5 video with fallbacks: two Yield clips, each with a WebM
    source, an MP4 source, a poster image, and a download link for
    browsers that can't play video. JavaScript replaces the browser's
    controls (which covered most of these short, wide clips) with one
    button that plays or pauses both clips in sync.
  - Nested selectors: descendant, child, and sibling selectors such as
    .site-header .navbar-nav .nav-link.active, .project h3 + ul li,
    .course-list li > span:only-child, and .results-table td:first-child.
  - A contact form built with HTML form elements. js/main.js checks each
    field, shows a message under any field that needs fixing, moves focus
    to the first one, and then opens the visitor's email app with the
    message filled in. Without JavaScript, the form falls back to the
    browser's own validation and a mailto: action.


4. RESPONSIVENESS
-----------------
The layout was checked at 320, 390, 768, 1280, and 1600 pixels wide (Chrome
device toolbar sizes). Nothing scrolls sideways at any of those widths.
  - Phones: the navbar collapses into a Menu button. Everything stacks into
    one column. On the home page the order is intro, graph, then "Right
    now". Project figures sit above the text that describes them.
  - Tablets (768px and up): the navbar is a single row, and the home page
    project list puts names beside descriptions.
  - Laptops (992px and up): the headline grows to two large lines, the
    graph sits beside the intro, the About page gets a sticky sidebar, and
    each project shows its figure beside the text.
  - Wide tables scroll inside their own box on small phones instead of
    widening the page, and that box can be scrolled with the keyboard.
  - Type scales from 17px body text on phones to 18px on laptops, with
    larger headings at each breakpoint.


5. VALIDATION
-------------
Screenshots are in the repository root:
  valid-html-index.jpg, valid-html-about.jpg, valid-html-projects.jpg,
  valid-html-contact.jpg, valid-css-styles.jpg,
  valid-accessibility-index.jpg, valid-accessibility-about.jpg,
  valid-accessibility-projects.jpg, valid-accessibility-contact.jpg

W3C HTML (validator.w3.org/nu): all four pages have no errors and no
warnings.

W3C CSS (jigsaw.w3.org/css-validator): css/styles.css has no errors. I
validated the stylesheet itself rather than the page URL, because a page
check also pulls in Bootstrap and Font Awesome from the CDN, which are not
my code. The validator may note that CSS variables are not checked
statically; that is informational.

Accessibility (AChecker, WCAG 2.0 Level AA): [confirm] no known problems on
any page. I also checked each page with WAVE: [confirm] no errors and no
contrast errors.

Contrast of the main text colors (WCAG AA needs 4.5:1):
  ink #18202e on white ...................... 16.3:1
  gray #4b5567 on white ...................... 7.5:1
  gray #4b5567 on figure background #eef1f5 .. 6.6:1
  link blue #1f55b8 on white ................. 6.9:1
  footer text #b7c0ce on #18202e ............. 8.9:1
  form error red #b42318 on white ............ 6.6:1

Potential problems and alerts I reviewed and decided were not problems:
  - "script may use color alone" / "script user interface may not be
    accessible": the scripts don't use color to convey anything, and every
    control they touch is a real button, link, or form field that works
    from the keyboard.
  - "Link text may not be meaningful": link text names its destination.
    Repeated links such as "Code on GitHub" include the project name in
    visually hidden text, so a screen reader hears "Code for Yield on
    GitHub".
  - "img element may require a long description" / "Image may contain text
    that is not in Alt text": each figure has a caption explaining it, and
    the detailed ones link to a full-size copy.
  - "Alt text is not empty and image may be decorative": none of the images
    are decorative; each one shows something from a project.
  - "h1 to h6 may be used for formatting": headings are only used for
    section titles.
  - "Site missing site map": the site has four pages, and every page links
    to all of them from the navbar.
  - "Words or phrases not in the document's primary language": the site is
    entirely in English (lang="en").
  - "Table may require colgroup / thead, tfoot, tbody": both tables are
    small, and already have thead and tbody.
  - WAVE "HTML5 video or audio" alert: the Yield clips have no sound, so
    they don't need captions. The figure caption describes what happens
    in them.


6. EMBRACING THE SPIRIT OF THE ASSIGNMENT
-----------------------------------------
I treated each project like a figure in a report: the evidence comes first
and the claims sit beside it. Every image on the Projects page is a real
artifact from that project (an architecture diagram, a learned weight
matrix, a confusion matrix, simulator recordings), and the home page leads
with the graph my CS 179 model learned. The design keeps one bold element,
the headline and graph, and keeps everything else quiet: a paper-and-ink
palette, one blue for links and focus, and color used only to label the
five personality traits.


7. TIME SPENT
-------------
[Fill in] hours


8. ONLINE RESOURCES CONSULTED
-----------------------------
https://getbootstrap.com/docs/5.3/
https://fontawesome.com/icons
https://fonts.google.com/specimen/Schibsted+Grotesk
https://fonts.google.com/specimen/Source+Serif+4
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
https://www.w3.org/WAI/tutorials/tables/
https://validator.w3.org/nu/
https://jigsaw.w3.org/css-validator/
https://achecks.org/achecker
https://wave.webaim.org/
https://webaim.org/resources/contrastchecker/
https://claude.ai (Claude, an AI assistant, helped me convert my existing
  portfolio into this Bootstrap version)

Images and video come from my own project repositories:
  - Big Five graph: drawn from big-five-graph.json in
    https://github.com/bvazrala/graphical_models_big5
  - Big Five heatmap: figures/adjacency.png in the same repository
  - Briefly architecture diagram: from our CS 147 final report in
    https://github.com/bvazrala/Briefly
  - Yield clips: results/ in https://github.com/bvazrala/Yield
  - Confusion matrix: from notebooks/Final_Model.ipynb in
    https://github.com/bvazrala/uci_datathon_2026_project
  - SignPC demo thumbnail: from our LA Hacks team repository,
    https://github.com/eric-vo/signpc


9. CLASSMATES OR OTHER INDIVIDUALS CONSULTED
--------------------------------------------
None
