function Tags({tags = [ "boomdotdev", "task", "tags", "react" ]}) {
    
    return (
        <div className=".tags">
            {tags.map((tag, index) => {
                return <span className="tag" key={index}>#{tag}</span>
            })}
        </div>
    )
}

export default Tags;