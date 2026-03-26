import { form } from "framer-motion/client";

export const en = {
	//navbar
	sobre: "About",
	habilidades: "Skills",
	experiencia: "Experience",
	projetos: "Projects",
	certificados: "Certificates",
	contato: "Contact",
	download: "Download Resume",

	// theme labels
	theme_light: "Light theme",
	theme_dark: "Dark theme",
	activate_light: "Activate light theme",
	activate_dark: "Activate dark theme",

	//section me
	me_paragrafo_1: "Developer of responsive and functional systems and websites.",
	me_paragrafo_2:
		"Focused on building digital solutions with quality, usability, and best practices.",

	// title
	title_part1: "Full-Stack",
	title_part2: "Developer",

	// which part to highlight: 'first' or 'second'
	title_highlight: "second",

	//about me
	sobre_titulo: "About me",
	sobre_paragrafo_1:
		'Hello! I\'m <strong class="text-yellow-500">Mateus Nunes Maranhão</strong>, I\'m a <strong class="text-yellow-500">Full-Stack Developer </strong>, graduated in <strong class="text-yellow-500">Computer Science</strong> from <strong class="text-yellow-500">Universidade Tiradentes</strong> in Aracaju - SE, in Brazil. Driven by challenges and passionate about web development, I work with technologies like React.js, Next.js, Vue.js, Node.js, TypeScript, and PHP.',

	//academic background
	formacao_titulo: "Academic Background",
	formacao_curso_1: "Computer Science",
	formacao_universidade_1: "Universidade Tiradentes",
	formacao_formacao_1: "Bachelor's Degree",
	formacao_data_1: "2021.1 - 2025.1",
	formacao_local_1: "Aracaju - SE, Brazil",
	formacao_curso_2: "Software Architecture",
	formacao_universidade_2: "Facuminas",
	formacao_formacao_2: "Postgraduate",
	formacao_data_2: "2025.2 - 2026.1",
	formacao_local_2: "Remote",

	//languages
	idiomas_titulo: "Languages",
	idioma_1: "Portuguese",
	idioma_2: "English",
	idioma_3: "Spanish",
	nivel_nativo: "Native",
	nivel_intermediario: "Intermediate",
	nivel_basico: "Basic",
	detalhe_leitura_tecnica: "Technical reading",

	//skills
	habilidades_titulo: "Skills",
	banco_de_dados: "Databases",
	ferramentas: "Tools",

	//Experience
	experiencia_titulo: "Experience",
	experiencia_cargo_1: "Junior Developer",
	experiencia_empresa_1: "Líder Mão de Obra LTDA",
	experiencia_periodo_1: "Jan 2026 - Present",
	experiencia_descricao_1:
		'Allocated in the secretariat of the Aracaju City Hall through Líder Locação de Mão de Obra Ltda, I work as a Full-Stack Developer using technologies such as Vue.js, Tailwind CSS, PHP, and MySQL. One of my roles includes participating in the development of a complete password/ticket management system for the municipal event "Tamo Junto", including password generation, service panels, real-time queues, and integrations for over 80 services.',
	experiencia_cargo_2: "Freelance Developer",
	experiencia_empresa_2: "Workana",
	experiencia_periodo_2: "Aug 2024 - Dec 2025",
	experiencia_descricao_2:
		"As a freelance developer on the Workana platform, I created various landing pages using HTML5, CSS3, and Bootstrap, as well as more complex and functional systems using VueJS, PHP, and MySQL. I also developed modern and componentized websites using ReactJS, NextJS, and Tailwind CSS.",
	experiencia_cargo_3: "IT Intern",
	experiencia_empresa_3: "Imprensa Oficial de Sergipe",
	experiencia_periodo_3: "May 2023 - May 2024",
	experiencia_descricao_3:
		"Performed activities related to the field, such as digitizing the Official Gazette and binarizing the archive. Developed software to convert scanned images of the gazettes into text, enabling searches within these gazettes through the software itself.",

	//Projects
	projetos_titulo: "Projects",
	projetos_categoria_profissional: "Projects I worked on",
	projetos_categoria_academico: "Academic projects",
	projetos_categoria_pessoal: "Personal projects",
	projeto_saude_mais_texto:
		"The Saude+ system was developed as the practical part of my Computer Science final project at Universidade Tiradentes. Built with Vue.js, Tailwind CSS, TypeScript, PHP, and MySQL, it allows patients to schedule appointments simply and efficiently, while offering features for doctors and patients to reschedule or cancel appointments in seconds.",
	projeto_spotify_clone_texto:
		"Personal project developed with Vue.js and PHP to practice user authentication and playlist management, focused on CRUD operations and front-end/back-end integration.",
	projeto_github_profile_texto:
		"A system developed during a React.js and Next.js course, integrated with the GitHub API, allowing users to search GitHub profiles and view some of their projects.",
	projeto_ecommerce_texto:
		"A system developed during a React.js and Next.js course, allowing users to add and remove products from the cart, calculate the total amount, and simulate checkout.",
	projeto_bioohub_texto:
		"A robust system built with Vue.js, PHP, and MySQL that lets users build a complete biography with social links, titles, text, images, and YouTube videos.",
	projeto_inova_option_texto:
		"The Inova Option website, built with Vue.js, SCSS, and Bootstrap, where users can trade stocks, forex, and cryptocurrencies. The system includes smooth transition animations and well-structured componentization.",
	projeto_maragogi_texto:
		"A personal project built with Vue.js that showcases details about Maragogi - AL.",
	projeto_pluug_ai_texto:
		"Static front-end of the Pluug-ai system, built with HTML5, CSS3, Bootstrap, and JavaScript, which later contributed to a complete and functional system.",
	projeto_turbo_digital_texto:
		"Turbo Digital website, built with React, Next.js, and Tailwind, teaching how to position yourself, create content, and sell strategically.",
	projeto_italia_tour_texto:
		"Personal project developed with Vue.js and Node.js using TypeScript, focused on practicing routes, forms, and back-end integration to simulate tour bookings.",
	projeto_umuarama_texto:
		"Project built with HTML5, CSS3, Bootstrap, and JavaScript, showcasing details about Umuarama.",
	projeto_eder_noticias_texto:
		"A news portal built with HTML5, CSS3, Bootstrap, and JavaScript.",
	projeto_notifish_texto:
		"A system built with HTML5, CSS3, Bootstrap, and JavaScript that streamlines communication by acting as a mediator between you and WhatsApp.",
	projeto_atmos_texto:
		"Atmos Powered website implemented with HTML, CSS, Bootstrap, and JavaScript.",
	// project buttons
	projeto_btn_ver_github: "View on GitHub",
	projeto_btn_ver_github_backend: "View on GitHub (Back-end)",
	projeto_btn_demo: "Demo",
	projeto_btn_backend_privado: "Private back-end",
	projeto_btn_codigo_privado: "Private code",

	//certificates
	certificados_titulo: "Certificates",
	certificado_dw_completo: "Complete Web Development",
	certificado_vue: "Advanced Web Development 2022 with Vue and Vuex",
	certificado_wise_up: "Wise Up Online - 50 hours",
	certificado_react_nextjs:
		"React and NextJS from basic to advanced: Real applications",
	certificado_git_github: "Git and GitHub, from basic to advanced",
	certificado_dw_completo_desc:
		"My first Full-Stack development course taken in 2021, to learn and deepen my knowledge in technologies like HTML5, CSS3, JavaScript, MySQL, PHP, Bootstrap, etc.",
	certificado_vue_desc:
		"Course taken in 2022, with the goal of learning and deepening knowledge in VueJS and its technologies like Vuex, vue-router, componentization, and animations.",
	certificado_wise_up_desc:
		"Course taken in 2023 to develop my English skills.",
	certificado_react_nextjs_desc:
		"Course taken to improve my knowledge in React and NextJS.",
	certificado_git_github_desc:
		"Course taken to deepen knowledge already applied in previous projects.",

	//contacts
	contato_titulo: "Contact",
	contato_texto: "Feel free to get in touch with me through the form or the links below!",
	contato_email: "E-mail",
	contato_whatsapp: "WhatsApp",
	contato_linkedin: "LinkedIn",
	contato_github: "GitHub",
	contato_email_texto: "mateusnm2003@gmail.com",
	contato_whatsapp_texto: "Get in touch with me directly via WhatsApp",
	contato_linkedin_texto: "Connect with me on LinkedIn now!",
	contato_github_texto: "Check out my projects and contributions on GitHub!",
	form_contato_nome: "First Name",
	form_contato_sobrenome: "Last Name",
	form_contato_mensagem: "Your Message",
	form_placeholder_nome: "Enter your first name",
	form_placeholder_sobrenome: "Enter your last name",
	form_placeholder_mensagem: "Write your message here...",

	form_contato_enviar: "Send Message",

	//footer
	footer_direitos_reservados: "All rights reserved.",

	//toast
	toast_sucesso_titulo: "Success",
	toast_erro_titulo: "Error",
	toast_mensagem_sucesso: "Message sent successfully!",
	toast_mensagem_erro: "Error sending message. Please try again.",


} as const;
