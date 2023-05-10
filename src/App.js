import './App.css';
import {Routes, Route} from 'react-router';
import Login from './pages/login/login';
import Movies from './pages/movies/movies';
import MovieDetails from './pages/movieDetails/movieDetails';
import CreateMovies from './pages/createMovies/createMovies';
import PussInBoots from './assets/images/pussinboots.jpg';
import Avatar from './assets/images/avatar.webp';
import BlackDemon from './assets/images/blackdemon.jpg';
import EvilDeadRise from './assets/images/evildeadrise.avif';
import GuardiansOfTheGalaxy from './assets/images/guardiansofthegalaxy.jpg';
import JohnWick from './assets/images/johnwick.jpg';
import LittleMermaid from './assets/images/littlemermaid.webp';
import LoveAgain from './assets/images/loveagain.avif';
import TheLostCity from './assets/images/thelostcity.jpg';

function App() {
  let data = [
    {id: 1, 
      title: 'Puss in Boots', 
      year: 2022, 
      genre: 'animation', 
      img: PussInBoots, 
      description: 'Puss teams up with his friends, Humpty Dumpty and Kitty Softpaws, in order to defeat two criminals, Jack and Jill, and retrieve the magical beans that they possess.'},
    {id: 2, 
      title: 'Avatar', 
      year: 2023, 
      genre: 'fantasy', 
      img: Avatar, 
      description: 'Avatar is an American media franchise created by James Cameron, which consists of a planned series of epic science fiction films produced by Lightstorm Entertainment and distributed by 20th Century Studios, as well as associated merchandise, video games and theme park attractions.'},
    {id: 3, 
      title: 'Black Demon', 
      year: 2023, 
      genre: 'detective', 
      img: BlackDemon, 
      description: 'Oilman Paul Sturges idyllic family vacation turns into a living nightmare when they encounter a gigantic megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get back to shore alive before it strikes again.'},
    {id: 4, 
      title: 'EvilDeadRise', 
      year: 2023, 
      genre: 'horror', 
      img: EvilDeadRise, 
      description: 'A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.'},
    {id: 5, 
      title: 'Guardians of the galaxy', 
      year: 2023, 
      genre: 'science fiction', 
      img: GuardiansOfTheGalaxy, 
      description: 'Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.'},
    {id: 6, 
      title: 'John Wick', 
      year: 2023, 
      genre: 'action', 
      img: JohnWick, 
      description: 'John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered around John Wick, a former hitman who is forced back into the criminal underworld he had previously abandoned.'},
    {id: 7, 
      title: 'Little Mermaid', 
      year: 2023, 
      genre: 'fantasy', 
      img: LittleMermaid, 
      description: 'Ursula, the sea witch, makes a devious deal with Princess Ariel allowing her to meet Eric, the human prince she loves. Unaware of her true intentions, Ariel lands herself in trouble.'},
    {id: 8, 
      title: 'Love Again', 
      year: 2023, 
      genre: 'drama', 
      img: LoveAgain, 
      description: 'Love Again is a 2023 American romantic comedy-drama film written and directed by James C. Strouse. It is an English-language remake of the 2016 German film SMS für Dich, itself based on a novel by Sofie Cramer.'},
    {id: 9, 
      title: 'The Lost City', 
      year: 2022, 
      genre: 'action', 
      img: TheLostCity, 
      description: 'Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient citys lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.'},
]



  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/movies'} element={<Movies data={data}/>}/>
            <Route path={'/movieDetails'} element={<MovieDetails />}/>
            <Route path={'/movieDetails/:id'} element={<MovieDetails data={data}/>}/>
            <Route path={'/createMovies'} element={<CreateMovies data={data}/>}/>
            <Route path={'*'} element={<div><h1>Not Found</h1></div>}/>
        </Routes>
    </div>
  );
}

export default App;
