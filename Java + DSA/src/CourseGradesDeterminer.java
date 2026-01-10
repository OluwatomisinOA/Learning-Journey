import java.util.Scanner;

public class CourseGradesDeterminer {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Course Grade Determiner ===");

        System.out.print("How many courses' grades are you checking for? ");
        int courseCount = sc.nextInt();

        double[] allMarks = new double[courseCount];

        for (int i = 0; i < courseCount; i++) {
            System.out.print("Enter marks for course " + (i + 1) + ": ");
            allMarks[i] = sc.nextDouble();
        }

        System.out.println("--- Grade Report ---");
        for (int i = 0; i < allMarks.length; i++) {

            System.out.print("Course " + (i + 1) + " (" + allMarks[i] + "): ");
            displayGrade(allMarks[i]);
        }

        sc.close();
    }

    public static void displayGrade(double marks) {

        if (marks < 0 || marks > 100) {
            System.out.println("Invalid mark!");
        } else if (marks >= 70) {
            System.out.println("Grade: A");
        } else if (marks >= 60) {
            System.out.println("Grade: B");
        } else if (marks >= 50) {
            System.out.println("Grade: C");
        } else if (marks >= 45) {
            System.out.println("Grade: D");
        } else if (marks >= 40) {
            System.out.println("Grade: E");
        } else {
            System.out.println("Grade: F");
        }

    }

}
