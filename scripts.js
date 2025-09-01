// ---------------- PROJECTS DATA ----------------
const projects = {
  1: { 
    title: "Responsive Culinary School Website", 
    desc: "Redesigned and developed responsive UI.", 
    highlights: ["Mobile-first", "SEO", "Navigation"], 
    tags: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JS", icon: "fab fa-js" }
    ], 
    demo: "https://salvino222vincent-glitch.github.io/responsive-culinary-school-website/", 
    screenshots: [
      { src: "assets/img/culinary1.png", width: "800px", height: "auto" } 
    ]
  },
  2: { 
    title: "Automated Budget Tracker", 
    desc: "Python tool integrated with Xero for automated reports.", 
    highlights: ["Budget reporting", "Xero API", "Validation"], 
    tags: [
      { name: "Python", icon: "fab fa-python" },
      { name: "Pandas", icon: "fas fa-database" }
    ], 
    demo: "https://automatedbudgettracker-7bdu6drwnq9zjqzj3zczvc.streamlit.app/", 
    screenshots: [
      { src: "assets/img/xero.png", width: "700px", height: "auto" } 
    ]
  },
  3: { 
    title: "Marketing Dashboard", 
    desc: "Interactive Streamlit dashboard for campaigns.", 
    highlights: ["Visualization", "KPIs", "Insights"], 
    tags: [
      { name: "Python", icon: "fab fa-python" },
      { name: "Streamlit", icon: "fas fa-chart-line" }
    ], 
    demo: "https://marketing-dashboard-hwzfrwawiurmjqzpg2yeex.streamlit.app/", 
    screenshots: [
      { src: "assets/img/mark.png", width: "750px", height: "auto" } 
    ]
  },
  4: { 
    title: "CSA Awareness Web App", 
    desc: "Capstone project promoting CSA.", 
    highlights: ["Educational modules", "DB-driven", "Feedback"], 
    tags: [
      { name: "Flask", icon: "fas fa-server" },
      { name: "MySQL", icon: "fas fa-database" }
    ], 
    demo: "https://salvino222vincent-glitch.github.io/csa-crud-vite/", 
    screenshots: [
      { src: "assets/img/csa1.jpeg", width: "800px", height: "auto" }
    ]
  }
};

// ---------------- YEAR FOOTER ----------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------- MODAL FUNCTIONS ----------------
const currentSlides = {};

function openProject(id) {
  const p = projects[id];
  if (!p) return;

  const modalContent = document.getElementById('modal-content');

  // Clear modal content
  modalContent.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <strong>Highlights</strong>
    <ul>
      ${p.highlights.map(h => `<li>${h}</li>`).join('')}
    </ul>
    <strong>Tech stack</strong>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag"><i class="${t.icon}"></i> ${t.name}</span>`).join('')}
    </div>
    <p>
      <a href="${p.demo}" target="_blank" class="cta">
        <i class="fab fa-github"></i> Open GitHub Demo
      </a>
    </p>
  `;

  // Append screenshots with proper spacing
  p.screenshots.forEach(imgObj => {
    const img = document.createElement("img");
    img.src = imgObj.src;
    img.style.width = imgObj.width;
    img.style.height = imgObj.height;
    img.style.display = "block";
    img.style.margin = "20px auto";
    modalContent.appendChild(img);
  });

  openModal();
}

function openModal() {
  document.getElementById('backdrop').style.display = 'flex';
}

function closeModal() {
  document.getElementById('backdrop').style.display = 'none';
  document.getElementById('modal-content').innerHTML = '';
}

// ---------------- CAROUSEL ----------------
function moveSlide(id, direction) {
  const p = projects[id];
  currentSlides[id] = (currentSlides[id] + direction + p.screenshots.length) % p.screenshots.length;
  updateSlide(id);
}

function updateSlide(id) {
  const track = document.getElementById(`track-${id}`);
  if (track) {
    track.style.transform = `translateX(-${currentSlides[id] * 100}%)`;
  }
}

// ---------------- ESC KEY CLOSE ----------------
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
