"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
//configure dotenv
dotenv_1.default.config();
const port = process.env.PORT;
console.log(port); //  3000
//create server
//# sourceMappingURL=server.js.map