public class ShuffleArray {
    public static void main(String[] args) {
        // Given array.
        int[] array = {1,2,3,4,5,6,7};

        // Calling static method without creating object and loop through a shuffled array.
        for (int num : shuffleArray(array)) {
            System.out.println(num);
        }
    }

    public static int[] shuffleArray(int[] array) {

        boolean[] uniqueRandom = new boolean[array.length];  //Creating boolean array for check random number is unique.
        int[] shuffledArray = new int[array.length];    //Creating new array to store shuffled element.
        
        for (int i = 0; i < array.length; i++) {    //This loop used to access shuffled array and store value.
            int randomNumber;
            
            do {
                randomNumber = (int) (Math.random() * array.length);    //Create random integer using Math class.
            } while (uniqueRandom[randomNumber]);    //This will check specific random number is created or not.
            
            shuffledArray[i] = array[randomNumber]; //After the unique random number generation.
            uniqueRandom[randomNumber] = true;  //By assigning true to indicate that the specific random number is used.
        }
        return shuffledArray;
    }
}
