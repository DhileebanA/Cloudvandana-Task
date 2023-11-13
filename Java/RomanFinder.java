public class RomanFinder {
	public static void main(String[] args) {

		// Given Roman between 1 to 5000.
		String roman = "MMMMCMXCIX";

		// Object Creation for invoke RomanFinder class's method.
		RomanFinder rom = new RomanFinder();
		System.out.println(rom.romanToint(roman));
	}
	
	public int romanToint(String roman) {
		final int i = 1, v = 5, x = 10, l = 50, c = 100, d = 500, m = 1000; //Creating constant values for Roman letters.

		int currentRomanValue = 0, previousRomanValue = 0, totalRomanValue = 0;
		String lowRoman = roman.toLowerCase();

		for (int index = roman.length()-1; index >= 0; index--) {	//Loop to iterate Roman letters in reverse.

			switch (lowRoman.charAt(index)) {		//To set the current Roman value for a particular Roman letter.
			case 'i':
				currentRomanValue = i;
				break;
			case 'v':
				currentRomanValue = v;
				break;
			case 'x':
				currentRomanValue = x;
				break;
			case 'l':
				currentRomanValue = l;
				break;
			case 'c':
				currentRomanValue = c;
				break;
			case 'd':
				currentRomanValue = d;
				break;
			case 'm':
				currentRomanValue = m;
				break;
			default:
				break;
			}
			if (previousRomanValue <= currentRomanValue) {	//Check the values and add the final value.
				totalRomanValue += currentRomanValue;
			} else {
				totalRomanValue -= currentRomanValue;
			}
			previousRomanValue = currentRomanValue;		//To set the previous Roman value for next loop.
		}
		return totalRomanValue;		//After the loop is completed the total value is returned.
	}

}