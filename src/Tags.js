function Tags({tags}) {
    
    return (
        <div className=".tags">
            {tags.map((tag, index) => {
                return <span className="tag" key={index}>#{tag}</span>
            })}
        </div>
    )
}

export default Tags;