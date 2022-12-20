function Coffee({fav, say}) {
    return (
        <div>
            <h1>{fav}는 말이야!</h1>
            <p>{say}</p>
        </div>
    );
}

const CoffeeList = [
    {
        id: 1,
        name : "Latte",
        comment : "라떼는 1이야",
        rating: 5
    },
    {
        id: 2,
        name: "Americano",
        comment: "아메리카노는 2야",
        rating: 4.7
    },
    {
        id: 3,
        name: "Cappuccino",
        comment: "카푸치노는 3이야",
        rating: 3.2
    }
]

function App() {
    return (
        <div className="App">
            <p>연습입니다. 안녕하세요</p>
            {CoffeeList.map(menu => <Coffee key={menu.id} fav={menu.name} say={menu.comment}/>)}
        </div>
    );
}



export default App;