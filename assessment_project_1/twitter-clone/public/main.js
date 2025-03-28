document.addEventListener('DOMContentLoaded', function () {
    var userSelect = document.getElementById('userSelect');
    var postList = document.getElementById('postList');
    var commentList = document.getElementById('commentList');
    // Fetch users and populate the select dropdown
    fetch('/api/users')
        .then(function (response) { return response.json(); })
        .then(function (users) {
        users.forEach(function (user) {
            var option = document.createElement('option');
            option.value = user.id.toString();
            option.textContent = user.username;
            userSelect.appendChild(option);
        });
        // Set default user (user with ID 1)
        userSelect.value = '1';
        fetchPosts(1); // Fetch posts for user ID 1
    })
        .catch(function (error) { return console.error('Error fetching users:', error); });
    // Fetch posts for a specific user
    function fetchPosts(userId) {
        fetch("/api/posts/".concat(userId))
            .then(function (response) { return response.json(); })
            .then(function (posts) {
            postList.innerHTML = ''; // Clear previous posts
            posts.forEach(function (post) {
                var li = document.createElement('li');
                li.textContent = post.title;
                li.addEventListener('click', function () { return fetchComments(post.id); }); // On click, fetch comments for this post
                postList.appendChild(li);
            });
        })
            .catch(function (error) { return console.error('Error fetching posts:', error); });
    }
    // Fetch comments for a specific post
    function fetchComments(postId) {
        fetch("/api/comments/".concat(postId))
            .then(function (response) { return response.json(); })
            .then(function (comments) {
            commentList.innerHTML = ''; // Clear previous comments
            comments.forEach(function (comment) {
                var li = document.createElement('li');
                li.innerHTML = "<strong>".concat(comment.name, "</strong>: ").concat(comment.body);
                commentList.appendChild(li);
            });
        })
            .catch(function (error) { return console.error('Error fetching comments:', error); });
    }
    // Event listener for user selection change
    userSelect.addEventListener('change', function (event) {
        var selectedUserId = parseInt(event.target.value);
        fetchPosts(selectedUserId); // Fetch posts for the selected user
        commentList.innerHTML = ''; // Clear comments when user changes
    });
});
