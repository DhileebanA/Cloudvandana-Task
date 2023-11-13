public class PanagramChecker {
	public static void main(String[] args) {
		// Given Sentence.
		String sentence = "The quick brown fox jumps over the lazy dog";

		// Object Creation for invoke PanagramChecker class's method.
		PanagramChecker rom = new PanagramChecker();

		if (rom.isPanagram(sentence)) {
			System.out.println("Given sentence is a panagram!");
		} else {
			System.out.println("Given sentence is not a panagram");
		}
	}
	
	public boolean isPanagram(String sentence) {

		String alphabates = "abcdefghijklmnopqrstuvwxyz";	//For check all alphabets.
		int numberOfAlpha = 0;		

		for (int i = 0; i < alphabates.length(); i++) {		//Loop to iterate over individual letters in alphabets.

			boolean isRepeat = false;	//To reset the repeat

			for (int j = 0; j < sentence.length(); j++) {	//Loop to iterate over individual letters in sentence.

				if (!isRepeat && alphabates.charAt(i) == sentence.charAt(j)) { 	//To check one alphabets character is equal to each sentence's character.
					
					numberOfAlpha ++;	//Count unique alphabet in sentence.

					isRepeat = true;	//Once the sentence's character is counted it will disable the If statement until the loop is finished.
				}
			}
		}
		if (numberOfAlpha == 26) {		//After completion of loops total number of alphabets is compared with 26.
			return true;
		} else {
			return false;
		}
	}

}