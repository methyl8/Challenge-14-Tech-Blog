const delBtn = document.getElementById("delete-btn")
const postForm = document.getElementById("edit-post-form")
const id = document.getElementById("postId").value;

delBtn.addEventListener("click", function (e) {
    fetch("/post/" + id, {
        method: "DELETE"
    }).then(window.location.replace('/'))
});

postForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const body = {
        title: document.getElementById("postTitle").value,
        body: document.getElementById("postBody").value
    }
    fetch("/post/" + id, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }).then(window.location.replace('/'))
});