const posts = [];

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    if(title && category && resume && publisher && date) {
        storePost(title, category, resume, publisher, date)
        cleanFields()
    } else {
        alert("Preencha todos os campos!")
    }
}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("date").value = "";
} 

function storePost(title, category, resume, publisher, date) {
    const post = {
        title,
        category,
        resume,
        publisher,
        date
    }

    posts.push(post)

    console.log(posts)
}