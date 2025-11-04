// A function component is a function that outputs or has HTML code
export default function Card({ name, id, type, hp, attack, defense }) {
  return `<section>
            <h1>${name} #${id}</h1>    
            <h2>Stats</h2>
            <ul>
                <li><Type: ${type}/li>
                <li>HP: ${hp}</li>
                <li>Attack: ${attack}</li>
                <li>Defense: ${defense}</li>
            </ul>
        </section>`;
}
