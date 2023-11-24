
export function splitWords(sentence: string, count: number){
        
    if(!sentence)
        return
    let arr = sentence.split(" ", count);
    sentence = "";

    arr.forEach(word => {
        sentence = sentence + " " + word;
    });

    sentence += " ....."

    return sentence
}


export const clrs = [
    {
        border: "border-purple-500",
        bg: "hover:bg-purple-500",
        text: "text-purple-500",
    },
    {
        border: "border-cyan-500",
        bg: "hover:bg-cyan-500",
        text: "text-cyan-500",
    },
    {
        border: "border-green-500",
        bg: "hover:bg-green-500",
        text: "text-green-500",
    },
    {
        border: "border-rose-500",
        bg: "hover:bg-rose-500",
        text: "text-rose-500",
    },
  ]

export const clrsLength = clrs.length


export const logo = "https://img.freepik.com/free-photo/young-woman-abstract-autumn-beauty-nature-generated-by-ai_188544-10645.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated"
export const footerBg = "https://img.freepik.com/free-vector/realistic-polygonal-background_52683-59998.jpg?size=626&ext=jpg&ga=GA1.1.1835354613.1698558582&semt=ais"
export const avatar = "https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg"
export const blogThumbnail = "https://img.freepik.com/free-photo/row-rings-with-word-love-them_1340-38627.jpg"
export const blogCards = [
    {
        id: "ajsdlajsldfj2",
        thumbnail:"https://img.freepik.com/premium-photo/ai-chat-bot-communicate-answer-question-busines-generative-ai_760510-535.jpg",
        title: "What Is Next j and How Does It Work?",
        description: "Next.js is a powerful JavaScript framework that is used for building server-side rendered (SSR) and static websites. It provides a seamless development experience by combining the best features of React, a popular JavaScript library for building user interfaces, and Node.js, a runtime environment for executing JavaScript code on the server-side. Next.js simplifies the process of creating dynamic web applications by offering features like automatic code splitting, server-side rendering, and static site generation. It allows developers to write their applications using React components and provides a routing system to handle different pages and routes. Next.js also offers built-in support for CSS modules, which enables developers to write modular and scoped CSS styles for their components. Overall, Next.js is a versatile framework that empowers developers to build high-performance web applications with ease.",
        categories: ["Technical", "Web"]
    },
    {
        id: "klajdlk",
        thumbnail:"https://img.freepik.com/free-photo/view-nature-landscape-with-river_23-2150763810.jpg",
        title: "What Is Next j and How Does It Work?",
        description: "Next.js is a powerful JavaScript framework that is used for building server-side rendered (SSR) and static websites. It provides a seamless development experience by combining the best features of React, a popular JavaScript library for building user interfaces, and Node.js, a runtime environment for executing JavaScript code on the server-side. Next.js simplifies the process of creating dynamic web applications by offering features like automatic code splitting, server-side rendering, and static site generation. It allows developers to write their applications using React components and provides a routing system to handle different pages and routes. Next.js also offers built-in support for CSS modules, which enables developers to write modular and scoped CSS styles for their components. Overall, Next.js is a versatile framework that empowers developers to build high-performance web applications with ease.",
        categories: ["Technical", "Web"]
    },
    {
        id: "jiuhfkjdk",
        thumbnail:"https://img.freepik.com/free-photo/futuristic-finance-digital-market-graph-user-interface-with-diagram-technology-hud-graphic-concept_90220-1365.jpg",
        title: "What Is Next j and How Does It Work?",
        description: "Next.js is a powerful JavaScript framework that is used for building server-side rendered (SSR) and static websites. It provides a seamless development experience by combining the best features of React, a popular JavaScript library for building user interfaces, and Node.js, a runtime environment for executing JavaScript code on the server-side. Next.js simplifies the process of creating dynamic web applications by offering features like automatic code splitting, server-side rendering, and static site generation. It allows developers to write their applications using React components and provides a routing system to handle different pages and routes. Next.js also offers built-in support for CSS modules, which enables developers to write modular and scoped CSS styles for their components. Overall, Next.js is a versatile framework that empowers developers to build high-performance web applications with ease.",
        categories: ["Technical", "Web"]
    },
    {
        id: "djbahfkabd",
        thumbnail:"https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg",
        title: "What Is Next j and How Does It Work?",
        description: "Next.js is a powerful JavaScript framework that is used for building server-side rendered (SSR) and static websites. It provides a seamless development experience by combining the best features of React, a popular JavaScript library for building user interfaces, and Node.js, a runtime environment for executing JavaScript code on the server-side. Next.js simplifies the process of creating dynamic web applications by offering features like automatic code splitting, server-side rendering, and static site generation. It allows developers to write their applications using React components and provides a routing system to handle different pages and routes. Next.js also offers built-in support for CSS modules, which enables developers to write modular and scoped CSS styles for their components. Overall, Next.js is a versatile framework that empowers developers to build high-performance web applications with ease.",
        categories: ["Technical", "Web"]
    },
    
    
    
]
