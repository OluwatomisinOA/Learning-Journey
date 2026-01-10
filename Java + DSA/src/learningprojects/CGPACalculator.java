package learningprojects;

import java.util.Scanner;

public class CGPACalculator {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== CGPA Calculator ===");

        System.out.print("Enter the number of coures: ");
        int numCourses = sc.nextInt();

        double totalPoints = 0;
        double totalUnits = 0;

        for (int i = 1; i <= numCourses; i++) {

            System.out.print("Enter the units for course " + i + ": ");
            double units = sc.nextDouble();

            System.out.print("Enter grade points for course " + i + "(on 5.0 scale): ");
            double gradePoints = sc.nextDouble();

            totalPoints += gradePoints * units;
            totalUnits += units;

        }

        double cgpa = totalPoints / totalUnits;
        System.out.println("Your CGPA is: " + cgpa);

        sc.close();
    }

}
