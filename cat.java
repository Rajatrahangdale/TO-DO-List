
public class cat {
    String name;
    int age;

    public void sayMeo() {
        System.out.println("Meow");
        System.out.println("name = " + name + "\n" + "age = " + age);
    }

    public void jump() {
        System.out.println("Jump");
    }

    public static void main(String[] args) {
        cat smudge = new cat();
        smudge.age = 3;
        smudge.name = "Smudge";

        smudge.sayMeo();
        smudge.jump();
    }

}
