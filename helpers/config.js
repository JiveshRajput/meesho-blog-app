import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const navMenu = [
    { nav: '/', title: 'Home' },
    { nav: '/', title: 'Tech at Meesho' },
    { nav: '/', title: 'Life at Meesho' },
    { nav: '/', title: 'Blog' },
    { nav: '/', title: 'News' },
]

export const sectionList = [
    { nav: 'product', title: 'Product', hoverColor: 'hover:bg-[#007aff]' },
    { nav: 'design', title: 'Design & UR', hoverColor: '#df2s5d' },
    { nav: 'engineering', title: 'Engineering', hoverColor: '#df2s5d' },
    { nav: 'culture', title: 'Culture', hoverColor: '#df2s5d' },
    { nav: 'blog-home', title: 'All', hoverColor: '#df2s5d' },
]

export const footerList = [
    { Icon: FaTwitter, link: 'https://twitter.com/', name: 'Twitter' },
    { Icon: FaInstagram, link: 'https://www.instagram.com/', name: 'Instagram' },
    { Icon: FaLinkedinIn, link: 'https://in.linkedin.com/', name: 'LinkedIn' },
    { Icon: FaYoutube, link: 'https://youtube.com/', name: 'YouTube' },
]



export const blogList = [
    {
        title: `Catalogue Uploading Just Got Dramatically Easy for Meesho Sellers. Here’s How We Did It!`,
        img: `https://admin.meesho.io/content/images/2023/01/c1M.png`,
        desc: `We unfurled one of the industry's simplest, most straightforward cataloguing processes via automation and data-science-led models.`,
        author: `Mangala Dilip`,
        publishedOn: `JAN 27TH, 23 | 3 MIN READ`,
        category: 'product',
        featured: false,
        slug: `catalogue-uploading-just-got-dramatically-easy-for-meesho-sellers-heres-how-we-did-it`
    },
    {
        title: `Meesho Mantras Reloaded: Some Improvements, A Few Alterations. All With An Eye On The Future.`,
        img: `https://admin.meesho.io/content/images/2023/02/11-Meesho-Mantras--1-.png`,
        desc: `Meesho Mantras, which codify our values and ways of working, needed some modifications to be in lockstep with our growing size and scale. Here’s what we changed.`,
        author: `Meesho`,
        publishedOn: `FEB 24TH, 23 | 4 MIN READ`,
        category: 'product',
        featured: true,
        slug: `meesho-mantras-reloaded-some-improvements-a-few-alterations-all-with-an-eye-on-the-future`
    },
    {
        title: `How We Reduced Drop-off on our Homepage and Helped First-Time Users Explore the App Better`,
        img: `https://admin.meesho.io/content/images/2023/02/new3.png`,
        desc: `What the user sees on the home page in the first few seconds determines whether they will stay or leave. This article chalks out the changes we made to ensure our users stay longer and see relevant products.`,
        author: `Aaryan Singh`,
        publishedOn: `FEB 3RD, 23 | 5 MIN READ`,
        category: 'product',
        featured: false,
        slug: `how-we-reduced-drop-off-on-our-homepage-and-helped-first-time-users-explore-the-app-better`
    },
    {
        title: `Product Management 101: Meesho PMs on the Must-Have Skills to Succeed`,
        img: `https://admin.meesho.io/content/images/2022/09/Good-vs-Great-manager.png`,
        desc: `Three Meesho PMs give a masterclass on what it takes to be great at Product Management.`,
        author: `V D Raman Namboodiripad`,
        publishedOn: `SEP 16TH, 22 | 4 MIN READ`,
        category: 'product',
        featured: false,
        slug: `product-management-101-meesho-pm-skills`
    },
    {
        title: `How Our Tactical Design Tweaks Created A Massive Impact for Sellers`,
        img: `https://admin.meesho.io/content/images/2023/03/dashboard-blog-c.png`,
        desc: `Here’s how we solved a two-pronged problem through smart design changes, elevating the seller dashboard’s efficiency as well as user experience`,
        author: `usman zafar`,
        publishedOn: `MAR 3RD, 23 | 5 MIN READ`,
        category: 'design',
        featured: false,
        slug: `how-our-tactical-design-tweaks-created-a-massive-impact-for-sellers`
    },
    {
        title: `How We Reduced Drop-off on our Homepage and Helped First-Time Users Explore the App Better`,
        img: `https://admin.meesho.io/content/images/2023/02/new3.png`,
        desc: `What the user sees on the home page in the first few seconds determines whether they will stay or leave. This article chalks out the changes we made to ensure our users stay longer and see relevant products.`,
        author: `Aaryan Singh`,
        publishedOn: `FEB 3RD, 23 | 5 MIN READ`,
        category: 'design',
        featured: false,
        slug: `how-we-reduced-drop-off-on-our-homepage-and-helped-first-time-users-explore-the-app-better`
    },
    {
        title: `How a conversational design led to an 8% increase in our Advertising revenue`,
        img: `https://admin.meesho.io/content/images/2022/11/RBF5.png`,
        desc: `Here’s how a couple of simple design tweaks made a sizable difference in our ad revenue.`,
        author: `Arun K P`,
        publishedOn: `NOV 10TH, 22 | 3 MIN READ`,
        category: 'design',
        featured: false,
        slug: `how-a-conversational-design-led-to-an-8-increase-in-ad-revenue`
    },
    {
        title: `Redesigning Product "Checkout" for the Next Billion Users`,
        img: `https://admin.meesho.io/content/images/2022/08/Checkout_Blog.png`,
        desc: `Using design to increase our "Order per App Visitor" by nearly 10%!`,
        author: `Pravalhika Injarapu`,
        publishedOn: `AUG 23RD, 22 | 6 MIN READ`,
        category: 'design',
        featured: true,
        slug: `redesigning-product-checkout-meesho`
    },
    {
        title: `A Deep Dive Into Platform Engineering with Indroneel Das`,
        img: `https://admin.meesho.io/content/images/2022/08/Checkout_Blog.png`,
        desc: `Indroneel Das, Meesho's Principal Architect, explains how we use Platform Engineering to drive consistency and accelerate software delivery.`,
        author: `Shivam Raj`,
        publishedOn: `DEC 2ND, 22 | 6 MIN READ`,
        category: 'engineering',
        featured: false,
        slug: `tech-deep-dive-platform-engineering-indroneel-das`
    },
    {
        title: `#GrowWithMeesho – How Darshan Naik Landed His Dream Job of SDE Without a CS Degree`,
        img: `https://admin.meesho.io/content/images/2022/11/growth.png`,
        desc: `IA candid conversation with Darshan Naik, who followed the route less travelled and realised his dream of becoming a software engineer.`,
        author: `Shivam Raj`,
        publishedOn: `NOV 25TH, 22 | 6 MIN READ`,
        category: 'engineering',
        featured: false,
        slug: `tech-grow-with-meesho-software-engineer-without-cs-degree`
    },
    {
        title: `How Micro-frontend Architecture Reduced Meesho's Dependencies and Accelerated Code Delivery`,
        img: `https://admin.meesho.io/content/images/2022/10/MicrofrontEND.png`,
        desc: `Let's take a deep dive into how to create a solid codebase architecture around which to construct our apps and website at Meesho.`,
        author: `Ayush Koshta`,
        publishedOn: `OCT 21ST, 22 | 5 MIN READ`,
        category: 'engineering',
        featured: false,
        slug: `tech-micro-frontend-architecture-reduced-meeshos-dependencies-accelerated-code-delivery`
    },
    {
        title: `#GrowWithMeesho - From Support Engineer to Tech Lead: Karthik K's Growth Story`,
        img: `https://admin.meesho.io/content/images/2022/10/MicrofrontEND.png`,
        desc: `A candid and heartfelt conversation with Karthik K about his growth as a Software Engineer.`,
        author: `Shivam Raj`,
        publishedOn: `SEP 26TH, 22 | 6 MIN READ`,
        category: 'engineering',
        featured: true,
        slug: `tech-grow-with-meesho-engineer-techlead-karthik`
    },
    {
        title: `Meesho Mantras Reloaded: Some Improvements, A Few Alterations. All With An Eye On The Future.`,
        img: `https://admin.meesho.io/content/images/2023/02/11-Meesho-Mantras--1-.png`,
        desc: `Meesho Mantras, which codify our values and ways of working, needed some modifications to be in lockstep with our growing size and scale.`,
        author: `Meesho`,
        publishedOn: `FEB 24TH, 23 | 4 MIN READ`,
        category: 'culture',
        featured: false,
        slug: `meesho-mantras-reloaded-some-improvements-a-few-alterations-all-with-an-eye-on-the-future`
    },
    {
        title: `Digital Revolution 2.0: Transforming Rural Women Into Online Entrepreneurs`,
        img: `https://admin.meesho.io/content/images/2023/02/bamboo2.png`,
        desc: `Here’s how we work with state governments to unlock economic opportunity for women from India’s rural pockets.`,
        author: `Mangala Dilip`,
        publishedOn: `FEB 13TH, 23 | 5 MIN READ`,
        category: 'culture',
        featured: true,
        slug: `digital-revolution-rural-women-online-entrepreneurs`
    },
    {
        title: `#GrowWithMeesho – How Darshan Naik Landed His Dream Job of SDE Without a CS Degree`,
        img: `https://admin.meesho.io/content/images/2022/11/growth.png`,
        desc: `A candid conversation with Darshan Naik, who followed the route less travelled and realised his dream of becoming a software engineer.`,
        author: `Shivam Raj`,
        publishedOn: `NOV 25TH, 22 | 6 MIN READ`,
        category: 'culture',
        featured: true,
        slug: `tech-grow-with-meesho-software-engineer-without-cs-degree`
    },
    {
        title: `Our VP of Engineering, Divyesh Shah, Wants to Positively Impact Billions with Tech`,
        img: `https://admin.meesho.io/content/images/2022/11/senior-Hfinal-5.png`,
        desc: `Tech that touches billions of lives positively is what inspires Divyesh Shah, our newest VP of Engineering.`,
        author: `Hadley Shemaiah`,
        publishedOn: `NOV 24TH, 22 | 2 MIN READ`,
        category: 'culture',
        featured: false,
        slug: `our-vp-of-engineering-divyesh-shah-wants-to-positively-impact-billions-with-tech-v2-2`
    },
]