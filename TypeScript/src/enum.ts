//enums 
enum Direction {
    Up,
    Down,
    Left,
    Right
}
//The final value stored at runtime is still a number (0, 1, 2, 3).
function dosomething(keypress:Direction){
    if(keypress == Direction.Up){

    }
}

dosomething(Direction.Up)
console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)

enum Direction{
    up = "up",
    down = "down",
    left = "left",
    right = "right"

}