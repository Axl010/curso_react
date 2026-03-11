const firstName = 'Actcel';
const lastName = 'Dev';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canadá',
}

export function MyAwesomeApp() {
    return (
        <>
            <hr />
            <h2> {firstName} </h2>
            <h3> {lastName} </h3>

            <p>{favoriteGames.join(', ')}</p>

            <h2>{isActive ? 'Activo' : 'No activo'}</h2> {/*Los valores internos no generan codigo interno en REACT*/}
        
            <p>{JSON.stringify(address)}</p>
        </>
    );
}