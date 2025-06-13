const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main().then((res) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let allChats = [
    {
        from: "Anjali",
        to: "Ravi",
        msg: "Hey! Have you completed the backend integration?",
        created_at: new Date(),
    },
    {
        from: "Ravi",
        to: "Anjali",
        msg: "Yes, just pushed the final commit on GitHub.",
        created_at: new Date(),
    },
    {
        from: "Neha",
        to: "Arjun",
        msg: "Let’s connect at 5 PM for the project discussion?",
        created_at: new Date(),
    },
    {
        from: "Arjun",
        to: "Neha",
        msg: "Sure! I’ll be there on time.",
        created_at: new Date(),
    },
    {
        from: "Karan",
        to: "Team",
        msg: "Don’t forget to update your tasks on Trello!",
        created_at: new Date(),
    }
];

Chat.insertMany(allChats);