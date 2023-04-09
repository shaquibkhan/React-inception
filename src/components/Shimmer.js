const Shimmer = () => {
    return (
        <div className="res-container">
            {
                Array(15).fill("").map(e => (
                    <div className="shimmer-card">
                        <div className="shimmer-body">
                        <h3></h3>
                        <h4></h4>
                        <h4></h4>
                        <h4></h4>
                        <h4></h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Shimmer;