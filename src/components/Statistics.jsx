import style from './Statistics.module.css';

export function Statistics({ title, stats }) {

  function getRandom() {
    const r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>Upload stats</h2>}

      <ul className={style['stat-list']}>
        {stats.map(stat =>
          <li key={stat.id} style={ {background: getRandom()} }>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}</span>
          </li>
        )}

      </ul>
    </section>
  );
}
