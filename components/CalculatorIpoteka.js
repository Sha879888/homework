import TField from "./custom/TField";
import "./CalculatorStyle.css"

/*
ВАЖНО: Годовая ставка:
Ипотека - 9.6
Автокредит - 3.5
Потребительский - 14.5

Сумма ипотеки\Сумма автокредита = Стоимость - Первоначальный взнос


Ежемесячный платеж= Сумму кредита*Ежемесячная ставка*Общая ставка/ (Общая ставка - 1)
Общая ставка = (1+ Ежемесячная ставка) ^ Срок ипотеки * 12 месяцев
Ежемесячная ставка (для ставки 9.6 годовых) = 9.6 / 12 / 100 = 0.008
*/

let CalculatorIpoteka = (props) => {

  const calc = () => {
    let inp = document.getElementsByClassName('Сумма')[0];
    let inp2 = document.getElementsByClassName('Срок')[0];
    let inp3 = document.getElementsByClassName('Взнос')[0];
    let count = document.getElementsByClassName('Результат')[0];

    let СуммаКредита = inp.value - inp3.value;
    let СрокИпотеки = inp2.value;
    let ЕжемесячнаяСтавка = 9.6 / 12 / 100;
    let ОбщаяСтавка = Math.pow(1 + ЕжемесячнаяСтавка, СрокИпотеки * 12);
    let ЕжемесячныйПлатеж = СуммаКредита * ЕжемесячнаяСтавка * ОбщаяСтавка / (ОбщаяСтавка - 1);

    if (inp.value.length > 0 && inp2.value.length > 0 && inp3.value.length > 0) {
      count.innerHTML = ЕжемесячныйПлатеж.toFixed(2) + " ₽";
    }
  };
    return (
      <div className="Calculator">
        <TField text="Сколько вам нужно:" size="46" cls="Сумма"/>
        
        <TField text="На срок: (Лет)" size="46" cls="Срок"/>

        <TField text="Первоначальный взнос:" size="46" cls="Взнос"/>

        <button className="Рассчитать" onClick={calc}>Рассчитать {props.text}</button>
        <button className="Заявка">Подать заявку</button>

        <div className="Resultat">
          <h3>Ежемесячный платёж</h3>
          <h4 className="Результат">0.00 ₽</h4>

          <h6>Результаты расчёта на калькуляторе всегда предварительные: 
            точную ставку и сумму кредита банк сможет назвать только после того, как вы подадите заявку. 
            Банк оценивает каждого заёмщика индивидуально — для этого он изучает кредитную историю и кредитный рейтинг того, 
            кто подал заявку на кредит.</h6>
        </div>
      </div>
    );
  }
  
  export default CalculatorIpoteka;
  

  /*
    <h6>Рассчитайте свой кредит</h6>
        <input type="text" className="name" size="10"/>
  */