const commentForm = document.getElementById("new-comment-form")


commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const body = {
        postId: document.getElementById("postId").value,
        body: document.getElementById("commentBody").value
    }
    fetch("/post/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }).then(window.location.replace('/'))
});