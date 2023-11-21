
export function splitWords(sentence: string, count: number){
        
    let arr = sentence.split(" ", count);
    sentence = "";

    arr.forEach(word => {
        sentence = sentence + " " + word;
    });

    sentence += " ....."

    return sentence
}


export const logo = "https://img.freepik.com/free-photo/young-woman-abstract-autumn-beauty-nature-generated-by-ai_188544-10645.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated"
export const footerBg = "https://img.freepik.com/free-vector/realistic-polygonal-background_52683-59998.jpg?size=626&ext=jpg&ga=GA1.1.1835354613.1698558582&semt=ais"
export const avatar = "https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg"
export const blogThumbnail = "https://img.freepik.com/free-photo/row-rings-with-word-love-them_1340-38627.jpg"
export const blogCards = [
    "https://img.freepik.com/premium-photo/ai-chat-bot-communicate-answer-question-busines-generative-ai_760510-535.jpg",
    "https://img.freepik.com/free-photo/view-nature-landscape-with-river_23-2150763810.jpg",
    "https://img.freepik.com/free-photo/futuristic-finance-digital-market-graph-user-interface-with-diagram-technology-hud-graphic-concept_90220-1365.jpg",
    "https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg",
]