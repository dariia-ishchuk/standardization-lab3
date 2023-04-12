import './App.css';
import DateConvertor from "./convertor/DateConvertor";

function App() {

    let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
    let result = re.exec('2015-01-02');

    console.log(result)

    return (
        <div className="App-header">
            <div className="DateConvertor">
                <DateConvertor></DateConvertor>
            </div>

            <div className="info">
                <div><b>Прізвище, імʼя: </b>Іщук Дарія</div>
                <div><b>Напрямок, за яким планує розвиватись: </b>Розробка мікросервісних додатків на Spring Boot</div>
                <div><b>Персональну сертифікацію, яку планує складати: </b>Oracle Certified Associate, Java SE 8 Programmer Certification</div>
                <div>
                    <p><b>Переваги отримання сертефікату:</b> </p>
                    <ul>
                        <li>може підвищити відомість серед роботодавців і
                            допомогти знайти роботу в індустрії програмування
                        </li>
                        <li>може допомогти збільшити свої знання та розуміння Java-програмування,
                            а також покращити професійні навички в області розробки програмного забезпечення
                        </li>
                        <li>може допомогти отримати підвищенням заробітної плати
                        </li>
                        <li>може допомогти отримати доступ до нових можливостей в індустрії програмування,
                            включаючи роботу в технологічних компаніях та проектах з високим рівнем складності
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
