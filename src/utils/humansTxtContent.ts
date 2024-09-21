import {AUTHOR} from "@/data";

const humansTxtContent = `/* TEAM */
Chef: ${AUTHOR.name}
Contact: ${AUTHOR.email}
Telegram: ${AUTHOR.telegram}
Website: ${AUTHOR.website}
From: ${AUTHOR.from}

/* THANKS */
Name: EasyPanel

/* SITE */
Last update: ${new Date().toISOString().split('T')[0]}
Standards: HTML5, CSS3, TypeScript
Components: Next.js, React
Software: Docker
`

export default humansTxtContent