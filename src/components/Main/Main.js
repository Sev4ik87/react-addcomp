import React, { Component } from 'react';
import { InfoArticle } from '../InfoArticle/InfoArticle'; 
import './Main.css';


class Main extends Component {
  render() {
    const movie = {
      plot: 'Фильм «Спасти́ рядово́го Ра́йана»  — американская эпическая военная драма 1998 года режиссёра Стивена Спилберга .По некоторым данным, картина основана на реальных событиях, произошедших с братьями Ниландами, когда после одновременной смерти пятерых братьев Салливан были приняты правила о распределении членов одной семьи по разным подразделениям и об отзыве последнего оставшегося в живых из них с фронта. Фильм удостоен пяти премий «Оскар» за лучшую режиссуру, работу оператора, звук, монтаж и монтаж звука. В декабре 2014 года внесён в Национальный реестр фильмов США, обладающих культурным, историческим или эстетическим значением. Фильм принёс популярность актёру Мэтту Деймону. ',
      actors: ['Том Хэнкс', 'Мэтт Деймон', 'Вин Дизель','Эдвард Бёрнс'],
      info: {
        country: 'США',
        studio: 'DreamWorks Pictures',
        genre: 'Военная драма',
        year: '1998г',
      },
    };

    return (
      <main className="main">
        <img src="/rayan.jpeg" alt="Фильм" className="movie-image" />
        <InfoArticle title="Сюжет" content={movie.plot} />
        <InfoArticle title="Перечень актеров" content={movie.actors.join(', ')} />
        <InfoArticle
          title="Общая информация"
          content={`Страна: ${movie.info.country}, Студия: ${movie.info.studio}, Жанр: ${movie.info.genre}, Год выпуска: ${movie.info.year}`}
        />
      </main>
    );
  }
}

export default Main;
