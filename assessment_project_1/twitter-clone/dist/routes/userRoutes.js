"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios")); // We will use axios to fetch data from the API
const router = express_1.default.Router();
// Fetch all users
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data); // Send back the user data
    }
    catch (error) {
        res.status(500).send('Error fetching users');
    }
}));
// Fetch posts for a specific user
router.get('/posts/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const response = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        res.json(response.data); // Send back the posts for the selected user
    }
    catch (error) {
        res.status(500).send('Error fetching posts');
    }
}));
// Fetch comments for a specific post
router.get('/comments/:postId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    try {
        const response = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        res.json(response.data); // Send back the comments for the selected post
    }
    catch (error) {
        res.status(500).send('Error fetching comments');
    }
}));
exports.default = router;
