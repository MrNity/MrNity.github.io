// <i class="fa-solid fa-check"></i>
// <i class="fa-solid fa-x"></i>
// <i class="fa-solid fa-minus"></i>
// Считать количество часов от ближайшей будущей указанной минуты и умножать на количество указанных монет/дружбы в час, считая сколько их сейчас в наличии прибавляя к тому что было
Vue.component('plans', {
template: 
`<div class="tab-pane fade" id="plans" role="tabpanel" aria-labelledby="plans-tab">
                <div class="content ml-0">
                    <h3 class="m-3">Планы</h3>
                   <ul class="fa-ul">
                   
<li><span class="fa-li"><i class="fa-solid fa-check"></i></span> Преобразователи на все акки</li>
<hr>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Монеты в чайнике</li>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Дружба в чайнике</li>
<li><span class="fa-li"><i class="fa-solid fa-check"></i></span> Растения</li>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Крафт мебели</li>
<hr>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> QR коты для синхронизации данных</li>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Смена темы</li>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Календарь Аждахи (где-то надо чет придумать)</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Добавить параметр прочность щита у щитовиков в таблице</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Добавить Синь Янь, Бей Доу, Дори, Кандакию</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Планы на дни недели с напоминаниями</li>
<hr>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Уведомления</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Готовая смола за 5 минут</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Фулл смола за 30 минут</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Преобразователь за 30 минут</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Монеты/дружба за 60-120-180 минут</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Крафт за 5 минут</li>
<hr>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Синхронизация с Гугл Диском</li>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Залить на Firebase (в идеале)</li>
<li>Если заработает на Firebase</li>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Бот </li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Добавить в прогу автообновление</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Добавить в прогу экспорт круток (своя история круток вместо паймон.мое)</li>
<li>Если крутки</li>
<li><span class="fa-li"><i class="fa-solid fa-x"></i></span> Добавить импорт данных с паймон.мое</li>
<hr>
<li><span class="fa-li"><i class="fa-solid fa-minus"></i></span> Изменить дизайн сайта</li>

                    </ul>
                </div>
            </div>`
})