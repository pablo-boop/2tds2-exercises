const posts = [];
let postIndex = -1;

function savePost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    if(title && category && resume && publisher && date) {
        if(postIndex == -1) {
            storePost(title, category, resume, publisher, date)
            cleanFields()
            showPosts()
        } else {
            posts[postIndex] = {
                title,
                category,
                resume,
                publisher,
                date
            }
        }
        cleanFields()
        showPosts()
        postIndex = -1;
    } else {
        alert("Preencha todos os campos!")
        cleanFields()
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

function showPosts() {
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
            <div class="itemPost">
                <h2>${post.title}</h2>
                    <p><strong>Categoria: </strong>${post.category}</p>
                    <p><strong>Resumo: </strong>${post.resume}</p>
                    <p><strong>Autor: </strong>${post.publisher}</p>
                    <p><strong>Data de publicação: </strong>${post.date}</p>

                <button onclick="editPost(${index})">Editar</button>
                <button onclick="deletePost(${index})">Excluir</button>
            </div>`;
    })

    document.getElementById("list").innerHTML = showContent;
}

function editPost(index) {
    const post = posts[index]

    document.getElementById("title").value = post.title;
    document.getElementById("category").value = post.category;
    document.getElementById("resume").value = post.resume;
    document.getElementById("publisher").value = post.publisher;
    document.getElementById("date").value = post.date;

    postIndex = index;
}