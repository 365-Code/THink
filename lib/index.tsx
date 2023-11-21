
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