class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

// class Image2 implements SelectableControl {
//     private state = 5;
//     select() { };
// }