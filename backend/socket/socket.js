import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["https://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

export const getReceiverSocketId =(receiverId)=>{
    return userSocketMap[receiverId];
} 

const userSocketMap = {}; // { userId: socketId }

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id;
    }

    // Notify all clients about online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        Object.keys(userSocketMap).forEach((key) => {
            if (userSocketMap[key] === socket.id) {
                delete userSocketMap[key];
            }
        });
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };
