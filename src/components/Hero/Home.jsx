import './home.css'
import Movies from '../Movies';
export const Home = () => {
    return (
        <>

        <div className="home-content flex flex-col" style={{backgroundImage: ``}}>
            <div className="container flex flex-col">
                <h2>Welcome.</h2>
                <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
                <form className='flex'>
                    <input type="text" placeholder="search for a movie or TV show" />
                    <button className="btn btn-gradient">Search</button>
                </form>
            </div>
        </div>
         <Movies/>
        </>
    )
}
