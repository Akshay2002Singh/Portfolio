import { educationData, workData } from '../../data/education.js';
import { projectsData } from '../../data/projects.js';
import { publicationsData } from '../../data/publications.js';
import { acquirementsData } from '../../data/acquirements.js';
import { skillsData } from '../../data/skills.js';
import { commonData } from '../../data/common.js';

document.addEventListener('DOMContentLoaded', () => {
    renderEducation();
    renderWork();
    renderProjects();
    renderPublications();
    renderAcquirements();
    renderSkills();
    renderCommon();

    // Re-initialize all swipers after rendering dynamic content
    if (typeof Swiper !== 'undefined') {
        document.querySelectorAll('.mySwiper').forEach(el => {
            new Swiper(el, {
                cssMode: true,
                loop: true,
                navigation: {
                    nextEl: el.querySelector('.swiper-button-next'),
                    prevEl: el.querySelector('.swiper-button-prev'),
                },
                pagination: {
                    el: el.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                mousewheel: true,
                keyboard: true,
            });
        });
    }
});

function renderEducation() {
    const educationContainer = document.getElementById('education');
    if (!educationContainer) return;

    educationContainer.innerHTML = educationData.map((edu, index) => {
        const isEven = index % 2 !== 0;
        const line = index === educationData.length - 1 ? '' : '<span class="qualification_line"></span>';

        if (isEven) {
            return `
                <div class="qualification_data">
                    <div></div>
                    <div>
                        <span class="qualification_circle"></span>
                        ${line}
                    </div>
                    <div>
                        <h3 class="qualification_title">${edu.title}</h3>
                        <span class="qualification_subtitle">${edu.institution}<div style="margin-top: 6px;">${edu.details}</div></span>
                        <div class="qualification_calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${edu.period}
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="qualification_data">
                    <div>
                        <h3 class="qualification_title">${edu.title}</h3>
                        <span class="qualification_subtitle">${edu.institution}<div style="margin-top: 6px;">${edu.details}</div></span>
                        <div class="qualification_calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${edu.period}
                        </div>
                    </div>
                    <div>
                        <span class="qualification_circle"></span>
                        ${line}
                    </div>
                </div>
            `;
        }
    }).join('');
}

function renderWork() {
    const workContainer = document.getElementById('work');
    if (!workContainer) return;

    workContainer.innerHTML = workData.map((work, index) => {
        const isEven = index % 2 !== 0;
        const line = index === workData.length - 1 ? '' : '<span class="qualification_line"></span>';
        const duration = work.duration ? `<div class="qualification_calendar" style="padding-left: 16px;">(${work.duration})</div>` : '';

        if (isEven) {
            return `
                <div class="qualification_data">
                    <div></div>
                    <div>
                        <span class="qualification_circle"></span>
                        ${line}
                    </div>
                    <div>
                        <h3 class="qualification_title">${work.title}</h3>
                        <span class="qualification_subtitle">${work.institution}</span>
                        <div class="qualification_calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${work.period}
                        </div>
                        ${duration}
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="qualification_data">
                    <div>
                        <h3 class="qualification_title">${work.title}</h3>
                        <span class="qualification_subtitle">${work.institution}</span>
                        <div class="qualification_calendar">
                            <i class="uil uil-calendar-alt"></i>
                            ${work.period}
                        </div>
                        ${duration}
                    </div>
                    <div>
                        <span class="qualification_circle"></span>
                        ${line}
                    </div>
                </div>
            `;
        }
    }).join('');
}

function renderProjects() {
    // Frontend Projects
    const frontendContainer = document.getElementById('frontend-projects');
    if (frontendContainer) {
        frontendContainer.innerHTML = projectsData.frontend.map(project => getProjectHTML(project)).join('');
    }

    // Backend Projects
    const backendContainer = document.getElementById('backend-projects');
    if (backendContainer) {
        backendContainer.innerHTML = projectsData.backend.map(project => getProjectHTML(project)).join('');
    }

    // Python Projects
    const pythonContainer = document.getElementById('python-projects');
    if (pythonContainer) {
        pythonContainer.innerHTML = projectsData.python.map(project => getProjectHTML(project)).join('');
    }
}

function getProjectHTML(project) {
    return `
        <div class="portfolio_content grid swiper-slide">
            <img src="${project.img}" alt="" class="portfolio_img">
            <div class="portfolio_data">
                <h3 class="portfolio_title">${project.title}</h3>
                <p class="portfolio_description">${project.description}</p>
                <a href="${project.link}" class="button button-flex button-small portfolio_button" target="_blank">
                    Check out
                    <i class="uil uil-arrow-right button_icon"></i>
                </a>
            </div>
        </div>
    `;
}

function renderPublications() {
    const publicationsSection = document.getElementById('publications');
    if (!publicationsSection) return;

    const wrapper = publicationsSection.querySelector('.publications_container');
    if (!wrapper) return;

    wrapper.innerHTML = publicationsData.map(pub => `
        <div class="publication_content">
            <div class="publication_header">
                <i class="uil ${pub.icon || 'uil-external-link-alt'} publication_icon"></i>
                <span class="publication_type">${pub.type}</span>
            </div>
            <h3 class="publication_title">${pub.title}</h3>
            <p class="publication_description">${pub.description}</p>
            <div class="publication_footer">
                <a href="${pub.link}" class="button button-flex button-small " target="_blank">
                    View <i class="uil uil-arrow-right button_icon"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function renderAcquirements() {
    const acquirementsContainer = document.getElementById('acquirements-wrapper');
    if (!acquirementsContainer) return;

    acquirementsContainer.innerHTML = acquirementsData.map(item => `
        <div class="portfolio_content swiper-slide">
            <img src="${item.img}" alt="" style="width: 100%;" class="portfolio_img">
            <div class="portfolio_data" style="text-align: center;">
                <h3 class="portfolio_title">${item.title}</h3>
                <div class="portfolio_description">${item.description}</div>
                <a href="${item.link}" class="button button-flex button-small portfolio_button" target="_blank" style="margin-top: 9px;">
                    Check out
                    <i class="uil uil-arrow-right button_icon"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const skillsContainer = document.querySelector('.skills_container');
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skillsData.map((category, index) => `
        <div class="skill skills_content skills_close">
            <div class="skills_header">
                <i class="${category.icon} skills_icon"></i>
                <div>
                    <h1 class="skills_title">${category.title}</h1>
                    <span class="skills_subtitle">${category.subtitle}</span>
                </div>
                <i class="uil uil-angle-down skills_arrow"></i>
            </div>
            <div class="skills_list grid">
                ${category.skills.map(skill => `
                    <div class="skills_data">
                        <div class="skills_titles">
                            <span class="single_skill_icon ${skill.type === 'image' ? 'external-logo' : ''}" ${skill.style ? `style="${skill.style}"` : ''}>
                                ${skill.type === 'icon' ? `<i class="${skill.icon}"></i>` : ''}
                                ${skill.type === 'image' ? `<img src="${skill.icon}" alt="${skill.name}">` : ''}
                                ${skill.type === 'svg' ? skill.icon : ''}
                            </span>
                            <h3 class="skills_name">${skill.name}</h3>
                        </div>
                        <div class="skills_bar"></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Re-attach accordion logic
    const skillsContent = document.getElementsByClassName('skills_content');
    const skillsHeader = document.querySelectorAll('.skills_header');

    function toggleSkills() {
        let itemClass = this.parentNode.className;
        for (let i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skill skills_content skills_close';
        }
        if (itemClass === 'skill skills_content skills_close') {
            this.parentNode.className = 'skill skills_content skills_open';
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills);
    });
}

function renderCommon() {
    // Expose commonData to window for main.js to pick up
    window.commonData = commonData;

    // Re-initialize typing animation in main.js with new data
    if (typeof window.initTyping === 'function') {
        window.initTyping();
    }

    // Update Resume Link
    const resumeBtn = document.getElementById('resume-button');
    if (resumeBtn && commonData.resumeLink) {
        resumeBtn.href = commonData.resumeLink;
    }
}
