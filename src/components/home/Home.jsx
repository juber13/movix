import './Home.css'
export const Home = () => {
    return (
        <div className="home-content flex">
           <div className="container flex flex-col">
            <h2>Welcome.</h2>
            <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
            <form className='flex'>
                <input type="text" placeholder="search for a movie or tv show" />
                <button className="btn btn-gradient">Search</button>
            </form>
           </div>
        </div>
    )
}
