const main = document.querySelector('main');

const joke1 = ("What did the janitor say when he jumped out of the closet? Supplies!");
const joke2 = ("What do you call a factory that makes okay products? A satisfactory.");
const joke3 = ("How does the moon cut his hair? Eclipse it.");

const template = `
    <section>
        <h1 class="header">My Jokes</h1>
        <ul>
            <li>${joke1}</li>
            <li>${joke2}</li>
            <li>${joke3}</li>
        </ul>
    </section>
`;