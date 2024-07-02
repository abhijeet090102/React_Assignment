import Article from './ArticleList.css';
function ArticleList(props) {
    const {titl,conts,auth} = props;
    return (
        <>
            <div className="articlelist">
                <h1 class="article">Article List</h1>
                <p>Title : {titl}</p>
                <p>Content : {conts}</p>
                <p>Author Name :{auth.name}</p>
                <p>Author Bio: {auth.bio}</p>
            </div>
        </>
    )
}
export default ArticleList;