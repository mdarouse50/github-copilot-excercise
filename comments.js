// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express server
const app = express();
// 3. Define a port
const port = 3000;
// 4. Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
// 6. Run the server
// node comments.js
// 7. Open a browser and go to http://localhost:3000
// 8. The server should respond with "Hello World" 
// 9. If you want to stop the server, press Ctrl+C in the terminal

// 10. Add a new route to the server
app.get('/comments', (req, res) => {
    res.send('Comments');
});
// 11. Refresh the browser and go to http://localhost:3000/comments
// 12. The server should respond with "Comments" 
// 13. If you want to stop the server, press Ctrl+C in the terminal

// 14. Add a new route to the server
app.get('/comments/1', (req, res) => {
    res.send('First comment');
});
// 15. Refresh the browser and go to http://localhost:3000/comments/1
// 16. The server should respond with "First comment" 
// 17. If you want to stop the server, press Ctrl+C in the terminal

// 18. Add a new route to the server
app.get('/comments/2', (req, res) => {
    res.send('Second comment');
});
// 19. Refresh the browser and go to http://localhost:3000/comments/2
// 20. The server should respond with "Second comment" 
// 21. If you want to stop the server, press Ctrl+C in the terminal

// 22. Add a new route to the server
app.get('/comments/3', (req, res) => {
    res.send('Third comment');
});
// 23. Refresh the browser and go to http://localhost:3000/comments/3
// 24. The server should respond with "Third comment" 
// 25. If you want to stop the server, press Ctrl+C