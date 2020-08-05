import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaCard from "./components/IdeaCard/IdeaCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import IdeaModel from "./models/idea.model";
import CategoryCreator from "./components/CategoryCreator/CategoryCreator";

function App() {

    const ideas = [];
    ideas.push(new IdeaModel('1', '2018', 'SKR', 'Komunikacija se odvija u JSON notaciji.\n' +
        'Potrebno je da napravite  Web aplikaciju koja će pristupati ovom API-ju i omogućiti pretraživanje baze podataka o filmovima, na osnovu: naziva filma, godini, žanru, glumcima i opisu sadržaja\n' +
        'Izgled korisničkog interfejsa i navigaciju definišete samostalno.\n' +
        'Potrebno je da se na frontend strani obezbedi sortiranje prikazanih podataka po svim kolonama, kako u rastućem, tako i u opadajućem redosledu.\n' +
        'Aplikacija nema nikakav login', 7, 'Education', ''))
    ideas.push(new IdeaModel('2', '2018', 'SKR', 'Komunikacija se odvija u JSON notaciji.\n' +
        'Potrebno je da napravite  Web aplikaciju koja će pristupati ovom API-ju i omogućiti pretraživanje baze podataka o filmovima, na osnovu: naziva filma, godini, žanru, glumcima i opisu sadržaja\n' +
        'Izgled korisničkog interfejsa i navigaciju definišete samostalno.\n' +
        'Potrebno je da se na frontend strani obezbedi sortiranje prikazanih podataka po svim kolonama, kako u rastućem, tako i u opadajućem redosledu.\n' +
        'Aplikacija nema nikakav login', 7, 'Work', ''))
    ideas.push(new IdeaModel('3', '2018', 'SKR', 'Komunikacija se odvija u JSON notaciji.\n' +
        'Potrebno je da napravite  Web aplikaciju koja će pristupati ovom API-ju i omogućiti pretraživanje baze podataka o filmovima, na osnovu: naziva filma, godini, žanru, glumcima i opisu sadržaja\n' +
        'Izgled korisničkog interfejsa i navigaciju definišete samostalno.\n' +
        'Potrebno je da se na frontend strani obezbedi sortiranje prikazanih podataka po svim kolonama, kako u rastućem, tako i u opadajućem redosledu.\n' +
        'Aplikacija nema nikakav login', 7, 'Fun', ''))
    ideas.push(new IdeaModel('4', '2018', 'SKR', 'Komunikacija se odvija u JSON notaciji.\n' +
        'Potrebno je da napravite  Web aplikaciju koja će pristupati ovom API-ju i omogućiti pretraživanje baze podataka o filmovima, na osnovu: naziva filma, godini, žanru, glumcima i opisu sadržaja\n' +
        'Izgled korisničkog interfejsa i navigaciju definišete samostalno.\n' +
        'Potrebno je da se na frontend strani obezbedi sortiranje prikazanih podataka po svim kolonama, kako u rastućem, tako i u opadajućem redosledu.\n' +
        'Aplikacija nema nikakav login', 7, 'Trip', ''))
    ideas.push(new IdeaModel('5', '2018', 'SKR', 'Komunikacija se odvija u JSON notaciji.\n' +
        'Potrebno je da napravite  Web aplikaciju koja će pristupati ovom API-ju i omogućiti pretraživanje baze podataka o filmovima, na osnovu: naziva filma, godini, žanru, glumcima i opisu sadržaja\n' +
        'Izgled korisničkog interfejsa i navigaciju definišete samostalno.\n' +
        'Potrebno je da se na frontend strani obezbedi sortiranje prikazanih podataka po svim kolonama, kako u rastućem, tako i u opadajućem redosledu.\n' +
        'Aplikacija nema nikakav login', 7, 'Personal Life', ''))
    ideas.push(new IdeaModel('6', '2018', 'SKR', 'Komunikacija se odvija u JSON notaciji.\n' +
        'Potrebno je da napravite  Web aplikaciju koja će pristupati ovom API-ju i omogućiti pretraživanje baze podataka o filmovima, na osnovu: naziva filma, godini, žanru, glumcima i opisu sadržaja\n' +
        'Izgled korisničkog interfejsa i navigaciju definišete samostalno.\n' +
        'Potrebno je da se na frontend strani obezbedi sortiranje prikazanih podataka po svim kolonama, kako u rastućem, tako i u opadajućem redosledu.\n' +
        'Aplikacija nema nikakav login', 7, 'Other', ''))
  return (
    <div className="App">
        <CategoryCreator />
        {
            ideas.map(idea => <IdeaCard key={idea.id} idea={idea} />)
        }
    </div>
  );
}

export default App;
