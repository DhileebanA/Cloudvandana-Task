// Given sentence.
var sentence = "This is a sunny day";
// For output.
console.log(reverseSentence(sentence));

function reverseSentence(sentence){
    let word = "", reversedSentence = "";
    sentence +=" ";     // Adding extra space help to identify the final word using space.

    for (let char of sentence) {
        if (char != " ") {
            word += char;   //Here we can directly reverse the word by changing char position. But I did it in separate method.
        } else {
            reversedSentence += reverseWord(word) + char;    //Adding reversed words in sentence.
            word = "";
        }
    }
    return reversedSentence;
}
            
function reverseWord(word){
    let reversedWord = "";
    // For each loop to iterate each character of the word.
    for (let char of word) {
        reversedWord = char + reversedWord; // Reversing the word by concadinate character before the string.
    }
    return reversedWord;
}