function Tags({tags}) {
    
    return (
        <div className="tags">
            <span className="tag">#{tags[0]}</span>
            <span className="tag">#{tags[1]}</span>
            <span className="tag">#{tags[2]}</span>
            <span className="tag">#{tags[3]}</span>
        </div>
    )
}

export default Tags;