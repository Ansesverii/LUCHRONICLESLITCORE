import { Author, Article, Category, AdminUser } from "@/types";

// Categories
export const categories: Category[] = [
  { id: "1", name: "Faculty", slug: "faculty", description: "Articles from faculty members" },
  { id: "2", name: "Editorial", slug: "editorial", description: "Editorial content" },
  { id: "3", name: "International", slug: "international", description: "International news" },
  { id: "4", name: "National", slug: "national", description: "National news" },
  { id: "5", name: "City", slug: "city", description: "City news" },
  { id: "6", name: "University", slug: "university", description: "University news" },
  { id: "7", name: "Arts & Culture", slug: "arts-culture", description: "Arts and culture content" },
  { id: "8", name: "Sports", slug: "sports", description: "Sports news" },
  { id: "9", name: "Business", slug: "business", description: "Business news" },
  { id: "10", name: "Sci-tech", slug: "sci-tech", description: "Science and technology news" },
  { id: "11", name: "Features", slug: "features", description: "Featured content" },
  { id: "12", name: "Guest Columns", slug: "guest-columns", description: "Guest columns" },
  { id: "13", name: "Op-ed", slug: "op-ed", description: "Opinion and editorial" },
  { id: "14", name: "Blogs", slug: "blogs", description: "Blog posts" },
  { id: "15", name: "Magazine", slug: "magazine", description: "Magazine content" },
  { id: "16", name: "Podcasts", slug: "podcasts", description: "Podcast episodes" },
  { id: "17", name: "Crosswords", slug: "crosswords", description: "Crossword puzzles" },
];

// Authors
export const authors: Author[] = [
  {
    id: "1",
    name: "Shumaila Khan",
    username: "shumaila-khan",
    image: "/Shumilaprofile.jpeg",
    bio: "I've always believed that stories are how civilizations speak—and universities, in particular, are teeming with voices that deserve a headline. That belief gave rise to LU.Chronicles, the student-run daily I founded not simply to report what happens, but to reflect what matters. I'm Shumaila—a student at Lucknow University and IGNOU—studying English Literature, Psychology, Ancient Indian History, and Public Administration. Yes, all at once. And no, sleep is not overrated—it's just scheduled. Before founding LU.Chronicles, I spent my school years juggling grades, gathering trophies, captaining literary events, and finding my voice in auditoriums packed with applause and adjudicators. That same hunger for challenge has since found a home in multiple arenas: inter-university debates, writing rooms, and as the President of LU.LITCORE, the official literary society of Lucknow University. But Chronicles is something different. It's not about just adding another title to the résumé. It's about building a newsroom run by students, for students—one that blends editorial rigor with youthful defiance. As the founder and editor of LU.Chronicles, I wear a lot of hats—curate content, mentor writers, map out editorial strategy, and occasionally jump in with a byline or two (or ten). Every piece we publish aims to balance curiosity with credibility. When I'm not chasing stories—fictional or otherwise—I'm probably chasing a dozen other interests: public speaking, film criticism, poetry, Pilates, languages, art, aesthetics, or the perfect chord on one of my instruments. My life is stitched together by a simple rule—if you can learn it, try it. What I bring to the paper is not just a résumé of accolades but an ethic: of inquiry, imagination, and intention. Because if you're going to write history—be it personal or institutional—you may as well make sure it's worth reading.",
    email: "shumaila@luchronicles.edu",
    designation: "Editor",
    semester: "4th",
    course: "B.A.",
    categories: ["Arts & Culture", "Op-ed", "Blogs", "Magazine", "Podcasts"],
    articlesCount: 24,
    isFounder: true,
  },
  {
    id: "2",
    name: "Shiva Mishra",
    username: "shiva-mishra",
    image: "/Shiva Mishra.jpeg",
    bio: "I'm Shiva Mishra — the Vice President of Lu.LitCore, Research Head of Chronocore, and the ideator behind Indicore, our cultural and historical soul.\n\nI am literature and ancient Indian history major with a thing for headlines, heated debates, and hidden truths and here in chronocore, I'll uncover those hidden truths and serve you hot.\n\nChronocore isn't just another news and current affairs club, we're here to write our own story, our own chronicles. And my job? To dig, decode, and deliver.\n\nWhat's happening in our world, talking about it. Loudly, clearly, and critically.\n\nI enjoy engaging in thought-provoking discussions that challenge perspectives and deepen understanding. I've strong opinions-sometimes too strong- but that only makes the conversation interesting and fiery.\n\nI believe in the power of understanding, empathy, and a strong sense of purpose. These strengths guide me as I work to create spaces where ideas flourish and knowledge is shared. Whether it's diving into history, embracing our rich culture, or just having meaningful conversations, I'm here to bring people together.\n\nI take pride in blending tradition and culture with progress, and I always approach my work with vision and a bit of that Desi flair—where intellect meets heart.",
    email: "shiva@luchronicles.edu",
    designation: "Research Head",
    semester: "4th",
    course: "B.A.",
    categories: ["International", "City", "Arts & Culture", "Blogs", "Podcasts"],
    articlesCount: 18,
  },
  {
    id: "3",
    name: "Dorcas Tembo Sambo",
    username: "dorcas-tembo",
    image: "/Dorcas Tembo Sambo.jpg",
    bio: "My name is Dorcas Tembo Sambo, I am a 2nd-year BBA student and a passionate advocate for meaningful discourse, I bring a unique blend of analytical thinking, creative expression, and unwavering commitment to truth. As the Head of the Writing Department at Lu.LitCore and Proofreading & Quality Control Head at LU Chronicles, I am dedicated to crafting compelling narratives and fostering critical thinking.\n\nWith a love for debating that extends beyond argumentation to building minds and critical thinking, I thrive in environments that encourage intellectual exploration and respectful dialogue. As a writer, I believe in the transformative power of words, shaping life's worth narratives that inspire and provoke.\n\nGuided by an unwavering commitment to truth and a passion for innovative storytelling, I bring boldness, wisdom, and clarity to every project. Through quality assurance and impactful writing, I aim to make a lasting impact, ensuring that truth is heard without boundaries.\n\nSincerely,\nHead, Writing Department\nHead, Proofreading and Quality Control",
    email: "dorcas@luchronicles.edu",
    designation: "Quality Control Head",
    semester: "4th",
    course: "BBA",
    categories: ["Business", "Crosswords"],
    articlesCount: 12,
  },
  {
    id: "5",
    name: "Atulit Pandey",
    username: "atulit-pandey",
    image: "/Atlut.jpeg",
    bio: "Hi! I'm Atulit Pandey, a first year Geology major and a hardcore enthusiast of Geopolitics, debates, brainstorming and rocks, of course.\n\nI bring, along with me, a mindset that is open to new thoughts, new ideas, while remaining unbiased and always stationed at a neutral ground, which gives me my clarity of thought and ideation.\n\nIn my free time, I can be found debating any and every motion that is introduced, playing tabla, writing a poem or two, reading a book or more often than not, reading my newspaper. Debating gives a lot of space to me to think in a way which is not haphazard and spiraled, hence, crystal clear. I'm a seeker of not just argumentation, but also the multi dimensional thought that tags along and the facts the are part and parcel of the argument. My constant thirst for knowledge and unshakable want for truth bestows upon me the straight forward and unorthodox approach to circumstances that I come across.\n\nFor me, knowledge is a journey, and not just an obligation that needs to be fulfilled. Also, I'm a keen learner of the what happens in our country and the world and analyze the changing power dynamics of our world. Here, at LU.Chronicles, we aim to express our thought, not as impositions but as reasons always available for scrutiny as we, ourselves, are seekers of truth and learners of life, presenting our thoughts with unwavering courage and unshakable beliefs, from our pens to your hearts, with attempts to embody our motto- \"Lucem sequimir\".\n\nPeace,\nVice head, Chronocore\nHead, Design and Layout, LU.Chronicles",
    email: "atulit@luchronicles.edu",
    designation: "Vice Head of Chronicles",
    semester: "2nd",
    course: "B.Sc.",
    categories: ["International", "National", "City", "Sci-tech", "Magazine"],
    articlesCount: 15,
  },
  {
    id: "6",
    name: "Prerna Srivastava",
    username: "prerna-srivastava",
    image: "/Perna.jpeg",
    bio: "I'm Prerna Srivastava — a first-year B.Sc student, an unapologetic question-asker, a passionate debater, and a story collector in Lu.LitCore.\n\nDriven by curiosity, I'm always asking why— whether it's exploring geopolitical events, questioning societal norms, or delving into feminist ideas. I thrive in conversations that dig deeper, seeking connection and learning from the world around me.\n\nI don't just enjoy stories; I collect them. From hostel corridors to chance encounters, I believe everyone has a narrative worth hearing. These meaningful exchanges broaden my perspective and deepen my understanding of the world.\n\nDebating excites me—not for the sake of disagreement, but for the depth it brings. I enjoy expressing my thoughts and hearing others do the same. While I have strong opinions, I value openness, empathy, and respectful conversation.\n\nI bring a lightness to life—laughing easily, enjoying the little moments, and balancing seriousness with a warm, happy-go-lucky spirit.\n\nLU Chronicles, to me, is more than a platform; it's a bridge between campus and the world, where stories, opinions, and reflections on everything from college life to global issues can find a home. I'm here to help shape that space—thoughtfully, honestly, and always with curiosity.\n\nI'll be here, ready to ask the next why and learn from every conversation",
    email: "prerna@luchronicles.edu",
    designation: "PR Head",
    semester: "2nd",
    course: "B.Sc NEP",
    categories: ["International", "National", "Arts & Culture", "Sci-tech", "Magazine", "Podcasts"],
    articlesCount: 14,
  },
  {
    id: "7",
    name: "Abhinav Kumar Upadhyay",
    username: "abhinav-upadhyay",
    image: "/Abhinav Kumar Upadhyay .jpeg",
    bio: "I am Abhinav Kumar Upadhyay — an equal blend of strategist and storyteller. Believing in balanced minds and measured words, I take my steps through life entranced with diplomacy, steady logic, and an unceasing curiosity for the workings of life.\n\nI find the joy in combining precision and creativity—whether it be coding or composing poetry. I perform well in the chessboard of ideas — arenas ranging from heated debates to mellow essays, from stirring monologues to articles grounded in reality. Words, for me, are not weapons; they are tools used to build bridges, not walls.\n\nI read to understand, write to express, cook to counsel, and debate to unlock truths. Never much for extremes, I am biased toward nuance over noise — the kind of thinking that produces dialogue instead of division. I bring that mindset wherever I go: thoughtful, calm, and clear.\n\nTo me, expression is not simply an art — it is a responsibility. Whether refining a sentence, directing a conversation, or constructing a framework, I do so with intention and awareness, with the searing, quiet passion that propels worthy ideas into being.",
    email: "abhinav@luchronicles.edu",
    designation: "Proofreading Head",
    semester: "2nd",
    course: "B.Sc NEP",
    categories: ["International", "National", "Business", "Sci-tech", "Magazine"],
    articlesCount: 11,
  },
  {
    id: "8",
    name: "Ansesveri Laxmi",
    username: "ansesveri-laxmi",
    image: "/Ansesveri Laxmi.jpeg",
    bio: "I'm Ansesveri Laxmi — a student, storyteller, and seeker of meaning. With a mind tuned to history and a heart pulled toward poetry, I exist at the intersection of intellect and emotion. As a YouTuber who dives deep into Indian political narratives, I don't just present facts — I resurrect forgotten stories, ask uncomfortable questions, and challenge surface-level thinking. I believe the past isn't dead; it's a dialogue, waiting to be reawakened. Writing, for me, is both introspection and activism. Whether it's scripting a documentary, drafting a heartfelt poem, or narrating a political episode, I let every word carry the weight of intention. A thinker by habit and a learner by heart, I often oscillate between coding an idea into an app and decoding the soul of a movement. I thrive in quiet reflection as much as in dynamic conversation — from late-night philosophical musings to sharp debates on what the future holds. My lens is one of curiosity and compassion. I create not just to inform, but to connect, to provoke thought, and most of all — to leave something behind that might just make someone pause, question, and feel.",
    email: "ansesveri@luchronicles.edu",
    designation: "Tech Head",
    semester: "2nd",
    course: "B.A.",
    categories: ["International", "National", "Sci-tech"],
    articlesCount: 8,
  },
  {
    id: "9",
    name: "Mani Kant Soni",
    username: "mani-kant-soni",
    image: "/Mani Kant.jpeg",
    bio: "B.A. student with expertise in national politics and university affairs.",
    email: "mani@luchronicles.edu",
    designation: "Head of Chronicles branch",
    semester: "4th",
    course: "B.A.",
    categories: ["International", "National", "City", "University", "Business"],
    articlesCount: 13,
  },
];

// Sample Articles
export const articles: Article[] = [
  {
    id: "1",
    title: "University to Host International Academic Conference Next Month",
    slug: "university-international-academic-conference",
    excerpt: "Lucknow University prepares to welcome scholars from around the world for the Annual International Academic Conference.",
    content: `<p>Lucknow University is set to host its prestigious Annual International Academic Conference next month, bringing together renowned scholars, researchers, and academics from across the globe. The three-day event will feature keynote speeches, panel discussions, and presentations on cutting-edge research in various disciplines.</p>
    <p>The conference, now in its 15th year, has become a cornerstone event in the academic calendar, providing a platform for intellectual exchange and collaboration. This year's theme, "Innovation and Sustainability in Higher Education," aims to address the evolving landscape of academic institutions in the face of global challenges.</p>
    <h2>Distinguished Speakers</h2>
    <p>Among the distinguished speakers will be Professor Emily Zhao from Stanford University, whose groundbreaking research on educational technology has revolutionized learning methodologies worldwide. Professor Raj Patel from Oxford University will present his latest findings on sustainable campus initiatives, offering valuable insights for institutions looking to reduce their environmental footprint.</p>
    <p>Vice-Chancellor Dr. Alok Kumar expressed his enthusiasm for the upcoming event: "This conference represents our commitment to fostering global academic partnerships and advancing knowledge across disciplines. We are honored to host such distinguished guests and look forward to the innovative ideas that will emerge from these discussions."</p>
    <h2>Student Involvement</h2>
    <p>A notable aspect of this year's conference is the increased involvement of student researchers. A dedicated session will showcase outstanding research projects by undergraduate and postgraduate students, highlighting the university's emphasis on nurturing young talent.</p>
    <p>Preparations are in full swing across the campus, with various departments collaborating to ensure the success of this flagship event. The conference will be held in the newly renovated Tagore Hall, which has been equipped with state-of-the-art facilities to accommodate the international gathering.</p>
    <p>Registration for the conference is now open, with special rates available for students and faculty members. The event promises to be a milestone in the university's ongoing efforts to position itself as a hub of academic excellence and innovation.</p>`,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    category: "University",
    author: {
      id: "9",
      name: "Mani Kant Soni",
      username: "mani-kant-soni",
      image: "/Mani Kant.jpeg",
    },
    date: "May 10, 2025",
    views: 1243,
    featured: true,
  },
  {
    id: "2",
    title: "The Rise of Artificial Intelligence in Modern Research Methodologies",
    slug: "rise-of-ai-in-research",
    excerpt: "How artificial intelligence is transforming research methodologies across academic disciplines.",
    content: `<p>The integration of Artificial Intelligence (AI) into research methodologies is revolutionizing the way academics approach complex problems across disciplines. From data analysis to literature reviews, AI tools are enhancing efficiency and uncovering patterns that might otherwise remain hidden to human researchers.</p>
    <p>In the field of medicine, machine learning algorithms are now capable of analyzing thousands of medical images to identify patterns indicative of diseases, often with accuracy exceeding that of experienced practitioners. Similarly, in the humanities, natural language processing technologies are enabling researchers to analyze vast corpora of texts, revealing linguistic patterns and cultural insights.</p>
    <h2>Transforming Data Analysis</h2>
    <p>The ability of AI to process and analyze large datasets has transformed research methodologies in fields ranging from climate science to economics. "The computational power of AI allows us to process data at a scale that was unimaginable just a decade ago," explains Dr. Prerna Srivastava, who leads the university's AI in Research initiative. "This has opened up entirely new avenues of inquiry and has accelerated the pace of discovery."</p>
    <p>However, the integration of AI into research is not without challenges. Questions regarding data privacy, algorithmic bias, and the interpretability of AI-generated results remain significant concerns in the academic community. "While AI provides powerful tools, it's essential that we maintain critical thinking and ethical oversight in their application," cautions Dr. Srivastava.</p>
    <h2>Future Prospects</h2>
    <p>Despite these challenges, the future of AI in research appears promising. Collaborative efforts between computer scientists and domain experts are leading to the development of more sophisticated and specialized AI tools tailored to specific research needs. Moreover, the democratization of AI technologies is making these tools increasingly accessible to researchers at institutions worldwide.</p>
    <p>As we navigate this evolving landscape, the role of educational institutions in preparing the next generation of researchers to effectively and responsibly utilize AI technologies becomes increasingly important. Lucknow University has responded to this need by introducing interdisciplinary courses that combine traditional research methodologies with AI applications, ensuring that students are equipped for the research environment of the future.</p>`,
    image: "https://images.unsplash.com/photo-1677442135637-6f71e70139a9?q=80&w=800&auto=format&fit=crop",
    category: "Sci-tech",
    author: {
      id: "6",
      name: "Prerna Srivastava",
      username: "prerna-srivastava",
      image: "/Shiva Mishra.jpeg",
    },
    date: "May 8, 2025",
    views: 956,
    featured: true,
  },
  {
    id: "3",
    title: "Op-Ed: The Evolving Role of University Journalism in the Digital Age",
    slug: "role-of-university-journalism",
    excerpt: "As digital media transforms how we consume news, university journalism faces both challenges and opportunities.",
    content: `<p>In an age dominated by digital media and instant information, university journalism stands at a critical crossroads. Traditional print publications are giving way to digital platforms, changing not only how news is delivered but also how it is produced, consumed, and understood within academic communities.</p>
    <p>University journalism has historically played a vital role in campus life, serving as a training ground for aspiring journalists, a forum for diverse perspectives, and a chronicle of institutional history. Today, as digital technologies reshape the media landscape, these foundational aspects remain important, but their expression and impact are evolving in significant ways.</p>
    <h2>Digital Transformation</h2>
    <p>The shift to digital platforms offers university publications unprecedented reach and creative possibilities. Stories can incorporate multimedia elements, reach audiences beyond campus boundaries, and engage readers through interactive features. Real-time analytics provide immediate feedback on what resonates with readers, allowing editorial teams to be more responsive to audience interests.</p>
    <p>However, this digital transformation also presents challenges. The pressure for quick content production can potentially compromise the depth and quality of reporting. The echo chambers of social media can reinforce polarization rather than foster constructive dialogue. And the technical skills required for digital journalism may create barriers to entry for students without access to certain resources or training.</p>
    <h2>Maintaining Journalistic Integrity</h2>
    <p>As university journalism navigates these changes, maintaining core journalistic values becomes increasingly important. Accuracy, fairness, and ethical reporting practices must remain central, even as formats and delivery methods evolve. Student journalists must be equipped not only with technical skills but also with a strong ethical foundation and critical thinking abilities.</p>
    <p>University administrations play a crucial role in this ecosystem. By supporting journalistic independence while providing necessary resources and guidance, they can help student publications thrive in the digital landscape without compromising integrity. This balance is delicate but essential for the continued relevance and impact of university journalism.</p>
    <h2>Looking Forward</h2>
    <p>The future of university journalism will likely be characterized by continued innovation and adaptation. Publications that can leverage digital tools while maintaining journalistic standards will be best positioned to serve their communities and prepare students for careers in an evolving media landscape.</p>
    <p>As we navigate these changes, it's worth remembering that the fundamental purpose of journalism—to inform, engage, and sometimes challenge readers—remains constant. The platforms and methods may change, but the commitment to seeking and sharing truth should continue to guide university journalism into the future.</p>`,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    category: "Op-ed",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg",
    },
    date: "May 7, 2025",
    views: 784,
  },
  {
    id: "4",
    title: "Local Business Leaders Partner with University for Internship Program",
    slug: "business-leaders-internship-program",
    excerpt: "New internship initiative aims to bridge the gap between academic learning and professional experience.",
    content: `<p>A groundbreaking partnership between Lucknow University and leading local businesses is set to create unprecedented internship opportunities for students across multiple disciplines. The initiative, formally launched last week, aims to bridge the often-cited gap between academic learning and professional experience.</p>
    <p>The program will initially offer 50 paid internship positions across various industries, including technology, finance, healthcare, and media. What sets this initiative apart is its integrated approach, with businesses collaborating directly with faculty members to develop internship experiences that complement academic coursework and provide meaningful professional development.</p>
    <h2>Industry-Academia Collaboration</h2>
    <p>"This isn't just about placing students in offices for a few weeks," explains Abhinav Kumar Upadhyay, who has been instrumental in developing the program. "We're creating structured experiences that allow students to apply theoretical knowledge in real-world settings while gaining insights that they can bring back to the classroom."</p>
    <p>Participating businesses see multiple benefits from the arrangement. "We gain access to fresh perspectives and talent while contributing to the development of our future workforce," says Ravi Kapoor, CEO of TechSolutions Inc., one of the partner companies. "Many of these students might become our employees after graduation, so the internship serves as an extended recruitment process as well."</p>
    <h2>Student Benefits</h2>
    <p>For students, the advantages extend beyond resume building. Interns will receive mentorship from industry professionals, exposure to current business practices, and opportunities to build professional networks. The paid nature of the internships also addresses concerns about accessibility, ensuring that financial constraints don't prevent qualified students from participating.</p>
    <p>"We're particularly focused on creating equitable access to these opportunities," notes Dean of Students Dr. Mehra. "The selection process emphasizes potential and enthusiasm alongside academic performance, and we've implemented support systems to help students from all backgrounds succeed in these professional environments."</p>
    <h2>Future Expansion</h2>
    <p>Looking ahead, the university plans to expand the program to include more businesses and create longer-term placements, including semester-long cooperative education experiences. There are also discussions about incorporating international businesses to provide students with global exposure.</p>
    <p>Applications for the first cohort of interns will open next month, with placements beginning in the fall semester. Information sessions are scheduled across campus in the coming weeks to introduce students to the program and provide guidance on the application process.</p>`,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    category: "Business",
    author: {
      id: "7",
      name: "Abhinav Kumar Upadhyay",
      username: "abhinav-upadhyay",
      image: "/Shiva Mishra.jpeg",
    },
    date: "May 5, 2025",
    views: 612,
  },
  {
    id: "5",
    title: "Climate Change Activism Grows on University Campuses Worldwide",
    slug: "climate-change-activism-universities",
    excerpt: "Student-led initiatives are pushing universities to adopt sustainable practices and divest from fossil fuels.",
    content: `<p>A wave of environmental activism is sweeping across university campuses globally, with students leading the charge for institutional changes to address climate change. From divestment campaigns to sustainable campus initiatives, young activists are leveraging their collective voice to drive meaningful environmental action.</p>
    <p>At Lucknow University, the recently formed Climate Action Coalition has gained significant momentum, advocating for the university to commit to carbon neutrality by 2030 and to divest its endowment from fossil fuel companies. Similar movements have emerged at universities worldwide, creating a global network of student environmental activists.</p>
    <h2>Divestment Campaigns</h2>
    <p>"Universities have both a moral responsibility and a unique opportunity to lead on climate action," explains Atulit Pandey, a founding member of the Climate Action Coalition. "By divesting from fossil fuels, institutions send a powerful message about the need for a just transition to renewable energy."</p>
    <p>The divestment movement has already seen significant success, with hundreds of educational institutions globally committing to phase out fossil fuel investments. These decisions represent not only a financial shift but also an acknowledgment of the scientific consensus on climate change and the need for immediate action.</p>
    <h2>Campus Sustainability Initiatives</h2>
    <p>Beyond divestment, student activists are also focused on transforming campus operations. Initiatives range from reducing food waste in dining halls to implementing comprehensive recycling programs and advocating for green building standards for new campus construction.</p>
    <p>"We're approaching this holistically," says Pandey. "Every aspect of campus life has an environmental impact, and we're working to address these systematically while raising awareness among the student body."</p>
    <h2>Administrative Response</h2>
    <p>University administrations have responded to this activism with varying levels of engagement. Some have embraced student-led initiatives, establishing sustainability offices and incorporating environmental goals into strategic plans. Others have been more hesitant, citing concerns about financial implications or questioning the practical feasibility of certain demands.</p>
    <p>At Lucknow University, the administration recently announced the formation of a Sustainability Task Force that includes student representatives, faculty with relevant expertise, and administrative staff. "This is a positive step, though we continue to push for more ambitious goals and timelines," notes Pandey.</p>
    <h2>The Road Ahead</h2>
    <p>As the climate crisis intensifies, student activism is likely to continue growing in scope and influence. The movement represents not only a push for specific policy changes but also a generational shift in priorities and values.</p>
    <p>"Today's students understand that climate change will define our future," Pandey reflects. "Our activism is about ensuring that our educational institutions are part of the solution rather than contributing to the problem."</p>`,
    image: "https://images.unsplash.com/photo-1621274403997-37aace184f49?q=80&w=800&auto=format&fit=crop",
    category: "International",
    author: {
      id: "5",
      name: "Atulit Pandey",
      username: "atulit-pandey",
      image: "/Shiva Mishra.jpeg",
    },
    date: "May 3, 2025",
    views: 845,
    featured: true,
  },
  {
    id: "6",
    title: "Traditional Arts Find New Audience Among University Students",
    slug: "traditional-arts-university-students",
    excerpt: "Cultural revival on campus as traditional art forms experience renewed interest from younger generation.",
    content: `<p>A cultural renaissance is unfolding on university campuses as traditional art forms experience a surprising resurgence among young adults. From classical music to folk dance, ancient crafts to indigenous storytelling, students are embracing cultural traditions with newfound enthusiasm, challenging the notion that younger generations are disconnected from their heritage.</p>
    <p>At Lucknow University, the Traditional Arts Society has seen its membership triple in the past year, with waiting lists for workshops on Kathak dance, classical vocal training, and traditional textile arts. This phenomenon extends beyond mere appreciation—students are actively practicing and innovating within these art forms, creating a dynamic bridge between tradition and contemporary expression.</p>
    <h2>Seeking Meaning and Connection</h2>
    <p>"There's a genuine hunger for authentic experiences and meaningful connection," observes Shiva Mishra, faculty advisor to the Traditional Arts Society. "In a digital world characterized by fleeting interactions and constant novelty, these art forms offer depth, history, and a sense of belonging."</p>
    <p>Students cite various motivations for their interest. Some are reconnecting with cultural traditions from their own heritage, while others are exploring art forms from cultures different from their own. Many mention the meditative quality of traditional practices and the satisfaction of mastering skills that have been refined over centuries.</p>
    <h2>Innovation Within Tradition</h2>
    <p>What makes this revival particularly interesting is how students are innovating within traditional frameworks. At a recent campus exhibition, classical dance performances incorporated contemporary social themes, and traditional musical compositions were performed with subtle modern influences.</p>
    <p>"We're not simply preserving these art forms like museum pieces," explains Shumaila Khan, president of the Traditional Arts Society. "We're engaging with them as living traditions that continue to evolve and speak to contemporary experiences."</p>
    <h2>Cultural Exchange and Dialogue</h2>
    <p>The interest in traditional arts has also fostered meaningful cultural exchange among students from diverse backgrounds. Regular events showcase traditions from various regions and communities, creating opportunities for cross-cultural appreciation and dialogue.</p>
    <p>"It's beautiful to see students sharing their cultural heritage with pride and others approaching these traditions with genuine respect and curiosity," notes Dr. Rashmi Verma, who teaches cultural studies. "These interactions help build empathy and understanding across cultural differences."</p>
    <h2>Support from the University</h2>
    <p>Recognizing the educational and community-building value of these activities, the university has increased support for traditional arts programming. Recent initiatives include dedicated practice spaces, funding for visiting master artists, and the integration of traditional arts into relevant academic courses.</p>
    <p>"Traditional arts offer valuable pedagogical opportunities," explains Dean of Arts Dr. Prakash. "They engage multiple intelligences, connect abstract concepts to embodied knowledge, and provide historical context for contemporary issues."</p>
    <p>As this cultural revival continues to gain momentum, it suggests that traditional arts remain relevant and meaningful in contemporary life, especially when young practitioners are empowered to engage with them authentically and creatively.</p>`,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    category: "Arts & Culture",
    author: {
      id: "1",
      name: "Shumaila Khan",
      username: "shumaila-khan",
      image: "/Shumilaprofile.jpeg",
    },
    date: "May 1, 2025",
    views: 723,
  },
  {
    id: "7",
    title: "New Study Reveals Impact of Sleep Quality on Academic Performance",
    slug: "sleep-quality-academic-performance",
    excerpt: "Research conducted at the university highlights the critical relationship between sleep habits and student success.",
    content: `<p>A comprehensive study conducted by researchers at Lucknow University has revealed significant correlations between sleep quality and academic performance among undergraduate students. The findings highlight sleep as a critical but often overlooked factor in educational outcomes and student wellbeing.</p>
    <p>The year-long study tracked sleep patterns, study habits, and academic results of over 500 students across different disciplines. Using wearable technology, sleep journals, and academic records, researchers were able to establish clear patterns connecting sleep behaviors to performance metrics.</p>
    <h2>Key Findings</h2>
    <p>"Our data shows that students who maintained regular sleep schedules with 7-9 hours of quality sleep consistently performed better across all academic measures," explains Dr. Ansesveri Laxmi, the lead researcher. "This held true regardless of study time, suggesting that it's not just about how much you study, but how well-rested you are when you study and take exams."</p>
    <p>Particularly striking was the impact of sleep consistency. Students with regular sleep schedules—going to bed and waking up at similar times each day—showed better information retention and test performance than those with highly variable sleep patterns, even when total sleep time was similar.</p>
    <h2>Sleep Deprivation Culture</h2>
    <p>The study also highlighted concerning trends in campus culture around sleep. Many students reported viewing sleep deprivation as a normal or even necessary part of university life, with all-nighters and caffeine dependency normalized as "part of the experience."</p>
    <p>"There's a pervasive myth that sacrificing sleep for study time is effective," notes Dr. Laxmi. "Our research definitively contradicts this, showing that the cognitive impairment from sleep deprivation outweighs any benefit from extra study hours."</p>
    <h2>Institutional Response</h2>
    <p>In response to these findings, university administrators are considering several initiatives, including workshops on sleep hygiene, adjustments to class scheduling to avoid very early morning sessions, and outreach campaigns to change campus culture around sleep.</p>
    <p>"This research has implications beyond academic performance," says Dr. Joshi, Dean of Student Wellness. "Chronic sleep issues are linked to mental health problems, which are already a significant concern among university students. Addressing sleep could be a powerful intervention for overall wellbeing."</p>
    <h2>Practical Applications</h2>
    <p>The researchers have developed a set of evidence-based recommendations for students, including maintaining consistent sleep and wake times, creating pre-sleep routines that avoid screens, limiting caffeine after noon, and prioritizing sleep as non-negotiable rather than as time that can be sacrificed.</p>
    <p>"Small changes to sleep habits can yield substantial benefits," Dr. Laxmi emphasizes. "We hope this research helps students understand that good sleep is not a luxury—it's a fundamental requirement for learning and wellbeing."</p>
    <p>The full study will be published next month in the Journal of Educational Psychology, with plans for a follow-up study examining interventions that might help students improve sleep quality.</p>`,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
    category: "Sci-tech",
    author: {
      id: "8",
      name: "Ansesveri Laxmi",
      username: "ansesveri-laxmi",
      image: "/Ansesveri Laxmi.jpeg",
    },
    date: "April 28, 2025",
    views: 934,
  },
  {
    id: "8",
    title: "University Orchestra Prepares for International Tour",
    slug: "university-orchestra-international-tour",
    excerpt: "Award-winning university orchestra to represent the institution on prestigious international stages.",
    content: `<p>After months of rigorous rehearsals, the Lucknow University Symphony Orchestra is making final preparations for its first international tour, set to begin next month. The 60-member ensemble will perform in five countries, showcasing a repertoire that blends Western classical music with traditional Indian compositions.</p>
    <p>The tour represents a significant milestone for the university's music program, which has gained national recognition in recent years for its innovative approach to musical education and performance. Selected through a competitive process, the orchestra will represent the university at prestigious venues and festivals across Europe and Asia.</p>
    <h2>Diverse Repertoire</h2>
    <p>"We've developed a program that showcases both our technical proficiency with classical masterworks and our unique cultural identity," explains Dr. Meera Sharma, the orchestra's conductor. "Our goal is to create musical conversations across traditions, demonstrating how different musical languages can complement and enhance one another."</p>
    <p>The tour repertoire includes Beethoven's Symphony No. 7, Tchaikovsky's Violin Concerto, and specially commissioned works by Indian composers that incorporate classical ragas into Western orchestral frameworks. Special guest soloists from each host country will join the orchestra for selected performances, further emphasizing the collaborative spirit of the tour.</p>
    <h2>Student Experience</h2>
    <p>For the student musicians, many of whom have never performed internationally, the tour offers invaluable professional experience. "This is a transformative opportunity for our students," notes Professor Rajiv Kumar, Chair of the Music Department. "They'll gain exposure to international audiences and diverse performance traditions while serving as cultural ambassadors for the university."</p>
    <p>The orchestra members have been preparing intensively, with extended rehearsals, master classes with visiting conductors, and cultural briefings about the countries they'll visit. Many have expressed excitement about the opportunity to perform in historic venues and experience different musical traditions firsthand.</p>
    <h2>Logistical Challenges</h2>
    <p>Organizing an international tour for a large ensemble presents significant logistical challenges. The tour management team has been working for months to coordinate transportation for both people and instruments, arrange appropriate accommodations, and navigate the complexities of international travel regulations.</p>
    <p>"Traveling with valuable musical instruments adds another layer of complexity," explains tour manager Priya Verma. "Each instrument requires special consideration for safe transport, and some—like our historical percussion instruments—need specific documentation for customs clearance."</p>
    <h2>Community Support</h2>
    <p>The tour has garnered substantial support from university alumni and the local community. A fundraising campaign earlier this year exceeded its target, allowing the orchestra to offer partial scholarships to student musicians who would otherwise be unable to participate for financial reasons.</p>
    <p>Before departing, the orchestra will perform a special send-off concert at the university auditorium, featuring highlights from the tour repertoire. The event has already sold out, reflecting the community's pride in and support for this cultural initiative.</p>
    <p>"Music has a unique power to transcend linguistic and cultural barriers," reflects Dr. Sharma. "Through these performances, we hope to build meaningful connections and represent our university's commitment to artistic excellence and cultural exchange."</p>`,
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
    category: "Arts & Culture",
    author: {
      id: "2",
      name: "Shiva Mishra",
      username: "shiva-mishra",
      image: "/Shiva Mishra.jpeg",
    },
    date: "April 25, 2025",
    views: 578,
  },
];

// Admin users
export const adminUsers: AdminUser[] = [
  {
    username: "admin",
    password: "admin123",
    role: "admin",
  },
];

// Helper function to filter articles by category
export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(
    (article) => article.category.toLowerCase().replace(' ', '-') === categorySlug
  );
};

// Helper function to get articles by author
export const getArticlesByAuthor = (authorUsername: string): Article[] => {
  return articles.filter(
    (article) => article.author.username === authorUsername
  );
};

// Helper function to get author by username
export const getAuthorByUsername = (username: string): Author | undefined => {
  return authors.find((author) => author.username === username);
};

// Helper function to get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

// Helper function to get category by slug
export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

// Helper function to get featured articles
export const getFeaturedArticles = (): Article[] => {
  return articles.filter((article) => article.featured);
};

// Helper function to get latest articles
export const getLatestArticles = (limit: number = 6): Article[] => {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get top articles by views
export const getTopArticles = (limit: number = 4): Article[] => {
  return [...articles]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, limit);
};

// Helper function to get best author
export const getBestAuthor = (): Author => {
  return authors[0]; // For demo, return founder as best author
};
