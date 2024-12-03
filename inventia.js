// Timeline steps data
const timelineSteps = [
    {
        title: "Registration Opens",
        content: "Register your team (2-4 members) through the Google Form.",
        date: "February 15, 2024",
        icon: "how_to_reg"
    },
    {
        title: "Ideation Workshop",
        content: "Learn about UN SDGs and brainstorm project ideas with mentors.",
        date: "February 20, 2024",
        icon: "lightbulb"
    },
    {
        title: "Technical Workshop",
        content: "Hands-on session on Google technologies and Generative AI.",
        date: "February 25, 2024",
        icon: "code"
    },
    {
        title: "Project Development",
        content: "Work on your solutions with mentor support.",
        date: "March 1-10, 2024",
        icon: "engineering"
    },
    {
        title: "Final Presentation",
        content: "Present your solution to the panel during Vintra.",
        date: "March 15, 2024",
        icon: "present_to_all"
    }
];
let goals = [
    {
        title: 'No Poverty',
        description: 'End poverty in all its forms everywhere.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal01-nopoverty.webp',
        projects: [
            {
                title: 'Donation Match',
                link: 'https://www.donationmatch.com/'
            },
            {
                title: 'OKO Finance',
                link: 'https://www.oko.finance/'
            }
        ]
    },
    {
        title: 'Zero Hunger',
        description: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal02-zerohunger.webp',
        projects: [
            {
                title: 'IndigoDrones',
                link: 'https://indigodrones.com/'
            },
            {
                title: 'SkillLab',
                link: 'https://skilllab.io/en-us'
            }
        ]
    },
    {
        title: 'Good Health and Well-being',
        description: 'Ensure healthy lives and promote well-being for all at all ages.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal03-goodhealth.webp',
        projects: [
            {
                title: 'Kindara',
                link: 'https://www.kindara.com/'
            },
            {
                title: 'WonderTree',
                link: 'https://wondertree.co'
            }
        ]
    },
    {
        title: 'Quality Education',
        description: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal04-qualityedu.webp',
        projects: [
            {
                title: 'Donation Match',
                link: 'https://www.donationmatch.com/'
            },
            {
                title: 'Femunity',
                link: 'https://www.youtube.com/watch?v=1H82iFD0pHM'
            }
        ]
    },
    {
        title: 'Gender Equality',
        description: 'Achieve gender equality and empower all women and girls',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal05-genderequality.webp',
        projects: [
            {
                title: 'SkillLab',
                link: 'https://skilllab.io/en-us'
            },
            {
                title: 'Kindara',
                link: 'https://www.kindara.com/'
            }
        ]
    },
    {
        title: 'Clean Water and Sanitation',
        description: 'Ensure availability and sustainable management of water and sanitation for all.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal06-cleanwater.webp',
        projects: [
            {
                title: 'Flow',
                link: 'https://www.youtube.com/watch?v=3Km_tquLuc0&list=PLOU2XLYxmsIK3Mq1itovZMQkKEkBYamG0&index=10'
            },
            {
                title: 'Remora',
                link: 'https://youtu.be/QS6e_ifG0cY'
            }
        ]
    },
    {
        title: 'Affordable and Clean Energy',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal07-cleanenergy.webp',
    },
    {
        title: 'Decent Work and Economic Growth',
        description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal08-decentwork.webp',
        projects: [
            {
                'title': 'SkillLab',
                'link': 'https://skilllab.io/en-us'
            },
            {
                'title': 'DonationMatch',
                'link': 'https://www.donationmatch.com/'
            }
        ]
    },
    {
        title: 'Industry, Innovation, and Infrastructure',
        description: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal09-industry.webp',
        projects: [
            {
                'title': 'ReVita',
                'link': 'https://youtu.be/4BKX3NsUYUs'
            },
            {
                'title': 'DonationMatch',
                'link': 'https://www.donationmatch.com/'
            }
        ]
    },
    {
        title: 'Reduced Inequality',
        description: 'Reduce inequality within and among countries.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal10-reduceinequalities.webp',
        projects: [
            {
                'title': 'Wonder Reader',
                'link': 'https://www.youtube.com/watch?v=JViAbPYdxp4'
            },
            {
                'title': 'HearSitter',
                'link': 'https://www.youtube.com/watch?v=pZBiAt61sQo'
            }
        ]
    },
    {
        title: 'Sustainable Cities and Communities',
        description: 'Make cities and human settlements inclusive, safe, resilient and sustainable.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal11-cities.webp',
        projects: [
            {
                'title': 'OKO Finance',
                'link': 'https://www.oko.finance/'
            },
            {
                'title': 'HeadHome',
                'link': 'https://youtu.be/peDNWLrffIQ'
            }
        ]
    },
    {
        title: 'Responsible Consumption and Production',
        description: 'Ensure sustainable consumption and production patterns.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal12-consumption.webp',
        projects: [
            {
                'title': 'DeCarbonUs',
                'link': 'https://decarbonapp.com/'
            },
            {
                'title': 'FarmX',
                'link': 'https://youtu.be/jZAhNR95f-M'
            }
        ]
    },
    {
        title: 'Climate Action',
        description: 'Take urgent action to combat climate change and its impacts.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal13-climate.webp',
        projects: [
            {
                'title': 'FarmX',
                'link': 'https://youtu.be/jZAhNR95f-M'
            },
            {
                'title': 'SlugLoop',
                'link': 'https://youtu.be/DlAGp-IjtJM'
            }
        ]
    },
    {
        title: 'Life Below Water',
        description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal14-marinelife.webp'
    },
    {
        title: 'Life on Land',
        description: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal15-landlife.webp'
    },
    {
        title: 'Peace, Justice, and Strong Institutions',
        description: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal16-peace.webp'
    },
    {
        title: 'Partnerships for the Goals',
        description: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.',
        icon: 'https://developers.google.com/static/community/images/gdsc-solution-challenge/goal17-partnerships.webp',
        projects: [
            {
                'title': 'SkillLab',
                'link': 'https://skilllab.io/en-us'
            },
            {
                'title': 'DonationMatch',
                'link': 'https://www.donationmatch.com/'
            }
        ]
    }
];

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTimeline();
    initializeAnimations();
    const goalsGrid = document.querySelector('.goalsGrid');

    goals.forEach(goal => {
        const goalElement = document.createElement('div');
        goalElement.classList.add('card-hover', 'p-6', 'rounded-xl', 'bg-white', 'border', 'border-gray-100', 'shadow-sm');

        const goalIcon = document.createElement('div');
        goalIcon.classList.add('flex', 'items-center', 'space-x-4', 'mb-4');

        const goalIconImage = document.createElement('img');
        goalIconImage.src = goal.icon;
        goalIconImage.alt = `${goal.title} Icon`;
        goalIconImage.classList.add('w-12', 'h-12', 'rounded-full');

        goalIcon.appendChild(goalIconImage);

        const goalText = document.createElement('div');
        goalText.classList.add('flex-grow');

        const goalTitle = document.createElement('h3');
        goalTitle.classList.add('text-xl', 'font-bold', 'text-gray-900');
        goalTitle.innerText = goal.title;

        const goalDescription = document.createElement('p');
        goalDescription.classList.add('text-gray-600', 'mt-2');
        goalDescription.innerText = goal.description;

        const goalProjects = document.createElement('div');
        goalProjects.classList.add('mt-4', 'flex', 'flex-col', 'gap-2');

        if (goal.projects) {
            goal.projects.forEach(project => {
                const projectLink = document.createElement('a');
                projectLink.href = project.link;
                projectLink.classList.add('text-google-blue', 'hover:underline');
                projectLink.innerText = project.title;
                goalProjects.appendChild(projectLink);
            });
        } else {
            const noProjects = document.createElement('div');
            noProjects.classList.add('text-gray-500');
            noProjects.innerText = 'No projects listed.';
            goalProjects.appendChild(noProjects);
        }

        goalText.appendChild(goalTitle);
        goalText.appendChild(goalDescription);
        goalText.appendChild(goalProjects);

        goalElement.appendChild(goalIcon);
        goalElement.appendChild(goalText);

        goalsGrid.appendChild(goalElement);
    });
});

// Initialize timeline section
function initializeTimeline() {
    const timelineSection = document.querySelector('.space-y-8');
    if (!timelineSection) return;

    timelineSection.innerHTML = timelineSteps.map((step, index) => `
        <div class="flex items-start space-x-6 card-hover p-6 rounded-xl bg-white border border-gray-100">
            <div class="flex-shrink-0 bg-google-${['blue', 'red', 'yellow', 'green'][index % 4]} 
                        rounded-full p-3 shadow-lg">
                <span class="text-white material-icons">${step.icon}</span>
            </div>
            <div class="flex-grow">
                <div class="flex justify-between items-start">
                    <h3 class="text-xl font-bold text-gray-900">${step.title}</h3>
                    <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        ${step.date}
                    </span>
                </div>
                <p class="mt-2 text-gray-600">${step.content}</p>
            </div>
        </div>
    `).join('');
}

// Initialize animations and interactions
function initializeAnimations() {
    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all card elements
    document.querySelectorAll('.card-hover').forEach(card => {
        card.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
        observer.observe(card);
    });

    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add mobile menu toggle functionality
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Helper function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll-based animations
window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animated');
        }
    });
});

// Optional: Add dark mode toggle
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', 
        document.documentElement.classList.contains('dark') ? 'enabled' : 'disabled'
    );
}

// Optional: Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.classList.add('dark');
} 