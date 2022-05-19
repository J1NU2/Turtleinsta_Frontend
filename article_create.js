function handleArticleCreate() {
    console.log("게시물 작성 완료")

    const title = document.getElementById("article_title").value
    const content = document.getElementById("article_content").value

    // console.log(title)
    // console.log(content)

    postArticle(title, content)
}