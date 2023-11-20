
export default function splitWords(sentence: string, count: number){
        
    let arr = sentence.split(" ", count);
    sentence = "";

    arr.forEach(word => {
        sentence = sentence + " " + word;
    });

    sentence += " ....."

    return sentence
}