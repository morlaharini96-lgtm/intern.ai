const DATA = {
  "Web Development": {
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    roles: ["Frontend Intern", "Full Stack Intern"],
    links: [
      { name: "Internshala", url: "https://internshala.com/internships/web-development-internship", stipend: "₹5k-15k" },
      { name: "LinkedIn", url: "https://www.linkedin.com/jobs/web-developer-intern", stipend: "Varies" },
      { name: "Unstop", url: "https://unstop.com/internships/web-development", stipend: "Varies" },
      { name: "Google", url: "https://careers.google.com/students/", stipend: "Paid" }
    ]
  },
  "Data Science": {
    skills: ["Python", "Pandas", "SQL", "ML", "Tableau"],
    roles: ["Data Analyst Intern", "Data Science Intern"],
    links: [
      { name: "Internshala", url: "https://internshala.com/internships/data-science-internship", stipend: "₹8k-20k" },
      { name: "IBM", url: "https://www.ibm.com/careers/internship", stipend: "Paid" },
      { name: "Unstop", url: "https://unstop.com/internships/data-science", stipend: "Varies" },
      { name: "Analytics Vidhya", url: "https://jobs.analyticsvidhya.com", stipend: "Varies" }
    ]
  },
  "AI/ML": {
    skills: ["Python", "TensorFlow", "Deep Learning", "NLP"],
    roles: ["ML Intern", "AI Research Intern"],
    links: [
      { name: "Internshala", url: "https://internshala.com/internships/machine-learning-internship", stipend: "₹10k-25k" },
      { name: "Microsoft", url: "https://careers.microsoft.com/students/", stipend: "Paid" },
      { name: "NVIDIA", url: "https://nvidia.wd5.myworkdayjobs.com/UniversityJobs", stipend: "Paid" },
      { name: "Unstop", url: "https://unstop.com/internships/artificial-intelligence", stipend: "Varies" }
    ]
  },
  "Android Dev": {
    skills: ["Java", "Kotlin", "Firebase", "Android Studio"],
    roles: ["Android Intern", "Mobile App Intern"],
    links: [
      { name: "Internshala", url: "https://internshala.com/internships/android-app-development-internship", stipend: "₹5k-15k" },
      { name: "LinkedIn", url: "https://www.linkedin.com/jobs/android-developer-intern", stipend: "Varies" },
      { name: "Unstop", url: "https://unstop.com/internships/android-development", stipend: "Varies" },
      { name: "Google", url: "https://careers.google.com/students/", stipend: "Paid" }
    ]
  },
  "UI/UX Design": {
    skills: ["Figma", "Adobe XD", "Wireframing", "Canva"],
    roles: ["UI Designer Intern", "Product Design Intern"],
    links: [
      { name: "Internshala", url: "https://internshala.com/internships/ui-ux-design-internship", stipend: "₹5k-12k" },
      { name: "Dribbble", url: "https://dribbble.com/jobs", stipend: "Varies" },
      { name: "Behance", url: "https://www.behance.net/joblist", stipend: "Varies" },
      { name: "Unstop", url: "https://unstop.com/internships/ui-ux-design", stipend: "Varies" }
    ]
  },
  "Cybersecurity": {
    skills: ["Linux", "Networking", "Python", "Kali Linux"],
    roles: ["Security Analyst Intern", "SOC Analyst Intern"],
    links: [
      { name: "Internshala", url: "https://internshala.com/internships/cyber-security-internship", stipend: "₹8k-20k" },
      { name: "ISRO", url: "https://www.isro.gov.in/Internship.html", stipend: "Stipend" },
      { name: "LinkedIn", url: "https://www.linkedin.com/jobs/cybersecurity-intern", stipend: "Varies" },
      { name: "Unstop", url: "https://unstop.com/internships/cyber-security", stipend: "Varies" }
    ]
  }
};

let selectedInterest = null;

window.onload = function() {
  const container = document.getElementById("interests");
  Object.keys(DATA).forEach(interest => {
    const btn = document.createElement("button");
    btn.className = "interest-btn";
    btn.textContent = interest;
    btn.onclick = () => {
      document.querySelectorAll(".interest-btn")
        .forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedInterest = interest;
    };
    container.appendChild(btn);
  });
};

function goToStep2() {
  const name = document.getElementById("nameInput").value;
  if (!name) return;
  document.getElementById("greeting").textContent = "Hi " + name + "! 👋";
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function findInternships() {
  if (!selectedInterest) return;
  const data = DATA[selectedInterest];
  let html = `
    <div class="section-title">📚 Skills to Learn</div>
    <div>${data.skills.map(s => `<span class="skill-tag">${s}</span>`).join("")}</div>
    <div class="section-title">💼 Roles You Can Apply For</div>
    ${data.roles.map(r => `<div style="padding:8px;background:rgba(255,255,255,0.04);border-radius:8px;margin-bottom:6px;font-size:13px;">→ ${r}</div>`).join("")}
    <div class="section-title">🔗 Apply Now</div>
    ${data.links.map(l => `
      <a href="${l.url}" target="_blank" class="intern-link">
        🏢 ${l.name}
        <span class="stipend">${l.stipend}</span>
      </a>`).join("")}
  `;
  document.getElementById("results").innerHTML = html;
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
}

function goBack() {
  selectedInterest = null;
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
  document.querySelectorAll(".interest-btn")
    .forEach(b => b.classList.remove("selected"));
}