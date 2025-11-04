import one from "./src/assets/one.png"
import two from "./src/assets/two.png"
import three from "./src/assets/three.png"
import four from "./src/assets/four.png"
import five from "./src/assets/five.png"
import youtube from "./src/assets/youtube.png"
import twitter from "./src/assets/twitter.png"
import linkedin from "./src/assets/linkedin.png"
import instagram from "./src/assets/instagram.png"
import { FaYoutube } from "react-icons/fa";


export const students = [
    {
        companyImage : FaYoutube,
        companyAlt : '',
        profileImage : '',
        profileAlt : '',
        name : 'Mayank Pandey'
    },
    {
        companyImage : FaYoutube,
        companyAlt : '',
        profileImage : '',
        profileAlt : '',
        name : 'Mayank Pandey'
    },
    {
        companyImage : FaYoutube,
        companyAlt : '',
        profileImage : '',
        profileAlt : '',
        name : 'Mayank Pandey'
    },
    {
        companyImage : FaYoutube,
        companyAlt : '',
        profileImage : '',
        profileAlt : '',
        name : 'Mayank Pandey'
    },
    {
        companyImage : FaYoutube,
        companyAlt : '',
        profileImage : '',
        profileAlt : '',
        name : 'Pandey'
    },
]

export const resources = [
    {
        resourceLogo : one,
        heading : "Striver's DSA Sheet",
        desc : 'Boost your DSA skills with our handy cheat sheets',
        color : "#EA8353"
    },
    {
        resourceLogo : five,
        heading : "Technical Blogs",
        desc : 'Explore Tech Innovation with Engaging Blogs',
        color : "#3B9FE8"
    },
    {
        resourceLogo : three,
        heading : "Striver's CP Sheet",
        desc : 'Level Up Your Coding with Practice Resources',
        color : "#2C9089"
    },
    {
        resourceLogo : four,
        heading : "System Design",
        desc : 'Design better systems with a simplified approach',
        color : "#E85A60"
    },
    {
        resourceLogo : two,
        heading : "CS Subjects",
        desc : 'Ace interviews with Expert Insights',
        color : "#9979F7"
    },
    {
        resourceLogo : five,
        heading : "Interview Experience",
        desc : 'Learn from Others Experiences to Ace Interviews',
        color : "#DFAE4F"
    },
]

export const community = [
    {
        logo : youtube,
        value : 800,
        platform : "Youtube"
    },
    {
        logo : twitter,
        value : 160,
        platform : "Twitter"
    },
    {
        logo : instagram,
        value : 210,
        platform : "Instagram"
    },
    {
        logo : linkedin,
        value : 750,
        platform : "Linkedin"
    }
]


export const learnCategories = {
        "Striver's DSA Sheet" : [
            {
                head : "Striver’s DSA Sheet",
                desc : "Your ultimate guide to mastering DSA with curated questions.",
                button : "Get Started"
            },
            {
                head : "Core DSA Topics",
                desc : "Simplify complex concepts with a structured and focused approach.",
                button : "Get Started"
            },
            {
                head : "Problem-Solving Made Easy",
                desc : "Solve a variety of problems to sharpen your skills and prepare for interviews",
                button : "Get Started"
            },
        ],
        "System Design" : [
            {
                head : "Ace System Design",
                desc : "Your ultimate guide to mastering DSA with curated questions.",
                button : "Get Started"
            },
            {
                head : "Core Concepts Simplified",
                desc : "Simplify complex concepts with a structured and focused approach.",
                button : "Get Started"
            },
        ],
        "Core Subjects" : [
            {
                head : "Core Subject Excellence",
                desc : "Build a solid foundation with must-know topics for success.",
                button : "Get Started"
            },
            {
                head : "Focused Learning",
                desc : "Master essential topics to strengthen your knowledge and skills.",
                button : "Get Started"
            },
        ],
        "Interview Experience" : [
            {
                head : "Share Your Story",
                desc : "Help others by sharing your real-world interview journey with top companies.",
                button : "Get Started"
            },
            {
                head : "Explore Top Companies",
                desc : "Browse and explore interview experiences from leading companies to prepare like a pro.",
                button : "Get Started"
            },
            {
                head : "Real Interview Insights",
                desc : "Access and share tips, questions, and strategies for success.",
                button : "Get Started"
            },
        ]
}

export const faqs = [
    {
        ques : 'Is it okay to start interview prep from scratch if I have less experience?',
        ans : 'Absolutely! Everyone starts somewhere. We’ve curated beginner-friendly resources, practice problems, and roadmaps to help you gradually build your skills from basic to advanced.'
    },
    {
        ques : 'How do I balance college academics with interview prep?',
        ans : 'Time management is key. Start with small, daily targets, 30 minutes of DSA or 1 problem a day. Use weekends or breaks to focus more on core subjects or mock interviews. Our flexible content and daily task scheduler helps you prep at your pace.'
    },
    {
        ques : 'What makes takeUforward different from other platforms?',
        ans : 'We’re not just another prep site, we’re your interview buddy. Our platform blends structured sheets, real-world interview experience(soon to be LIVE), and upcoming tuf+ features like premium set of questions for advanced learners, mock sessions, etc.'
    },
    {
        ques : "Are your resources suitable for non-CS background students?",
        ans : "Yes! Our materials are beginner-friendly and break down concepts clearly, even for those without a CS degree. With dedication, you can crack interviews regardless of your background."
    },
    {
        ques : "Can I get a trial or preview of tuf+ before purchasing?",
        ans : "We currently do not offer a trial version for tuf+ as we’ve seen cases where content is misused when provided on a preview basis. However, we assure you that the platform is built with high-quality material and structured guidance that has helped thousands of learners."
    },
    {
        ques : "Should I buy tuf+ or not?",
        ans : "tuf+ has helped thousands of students crack their dream companies and professionals make successful transitions in their careers. If you're serious about interview prep and want structured, proven content , tuf+ is made for you."
    },
    {
        ques : "What are the essential things to cover in core coding subjects?",
        ans : "A strong interview strategy isn't complete without mastering the core computer science subjects. Alongside Data Structures and Algorithms (DSA), make sure to focus on: Database Management Systems (DBMS) Operating Systems (OS) Object-Oriented Programming (OOPs) Computer Networks (CN). These subjects form the backbone of technical interviews. On our platform, you’ll find well-structured questions, video solutions and in-depth articles for each topic to help you understand concepts."
    },
    {
        ques : "How should I approach system design interview questions?",
        ans : "System design interviews are less about finding the perfect solution and more about showcasing your thought process. Focus on building a solid framework, think about scalability, trade-offs, and real-world constraints. Start by understanding the user requirements and the scale of the system. Then, identify which aspects matter most, is it availability, consistency, or performance? Clearly communicate your decisions and reasoning."
    }
]
