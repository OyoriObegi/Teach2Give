document.addEventListener('DOMContentLoaded', () => {
    const userSelect = document.getElementById('userSelect') as HTMLSelectElement;
    const postList = document.getElementById('postList') as HTMLUListElement;
    const commentList = document.getElementById('commentList') as HTMLUListElement;
  
    // Fetch users and populate the select dropdown
    fetch('/api/users')
      .then(response => response.json())
      .then(users => {
        users.forEach((user: { id: number, username: string }) => {
          const option = document.createElement('option');
          option.value = user.id.toString();
          option.textContent = user.username;
          userSelect.appendChild(option);
        });
  
        // Set default user (user with ID 1)
        userSelect.value = '1';
        fetchPosts(1); // Fetch posts for user ID 1
      })
      .catch(error => console.error('Error fetching users:', error));
  
    // Fetch posts for a specific user
    function fetchPosts(userId: number) {
      fetch(`/api/posts/${userId}`)
        .then(response => response.json())
        .then(posts => {
          postList.innerHTML = ''; // Clear previous posts
          posts.forEach((post: { id: number, title: string }) => {
            const li = document.createElement('li');
            li.textContent = post.title;
            li.addEventListener('click', () => fetchComments(post.id)); // On click, fetch comments for this post
            postList.appendChild(li);
          });
        })
        .catch(error => console.error('Error fetching posts:', error));
    }
  
    // Fetch comments for a specific post
    function fetchComments(postId: number) {
      fetch(`/api/comments/${postId}`)
        .then(response => response.json())
        .then(comments => {
          commentList.innerHTML = ''; // Clear previous comments
          comments.forEach((comment: { id: number, name: string, body: string }) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${comment.name}</strong>: ${comment.body}`;
            commentList.appendChild(li);
          });
        })
        .catch(error => console.error('Error fetching comments:', error));
    }
  
    // Event listener for user selection change
    userSelect.addEventListener('change', (event) => {
      const selectedUserId = parseInt((event.target as HTMLSelectElement).value);
      fetchPosts(selectedUserId); // Fetch posts for the selected user
      commentList.innerHTML = ''; // Clear comments when user changes
    });
  });
  