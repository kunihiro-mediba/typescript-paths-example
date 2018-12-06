import { Alpha } from "@root/alpha";
import { Beta } from "@foo/beta";
import { Delta } from "@bar/delta";

enum Message {
    Default = "Hello",
}

console.log(Message.Default);

Alpha.say();
Beta.say();
Delta.say();
