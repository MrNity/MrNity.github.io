Vue.component('menu-nav', {
    template: `
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="resin-tab" data-toggle="tab" href="#resin" role="tab" aria-controls="resin" aria-selected="false"><img src="imgs/Item_Fragile_Resin.webp" width="20" height="20" alt=""> Таймеры</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="wish-tab" data-toggle="tab" href="#wish" role="tab" aria-controls="wish" aria-selected="false">Пожелания для опроса</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="links-tab" data-toggle="tab" href="#links" role="tab" aria-controls="links" aria-selected="false">Полезные ссылки</a>
    </li>
    <li class="nav-item">
        <a class="nav-link " id="TableHeal-tab" data-toggle="tab" href="#TableHeal" role="tab" aria-controls="TableHeal" aria-selected="true"><i class="fa-solid fa-briefcase-medical"></i> Таблица хила и баффов</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="videos-tab" data-toggle="tab" href="#videos" role="tab" aria-controls="videos" aria-selected="false">Видосы</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="crystals-tab" data-toggle="tab" href="#crystals" role="tab" aria-controls="crystals" aria-selected="false"><img src="imgs/Item_Radiant_Spincrystal.webp" width="20" height="20" alt=""> Лучистые кристаллы</a>
    </li>
    <li class="nav-item">
<!--                <a class="nav-link" id="keki-tab" data-toggle="tab" href="#keki" role="tab" aria-controls="keki" aria-selected="false">Сколько примогемов мы получаем</a>-->
        <a class="nav-link" id="keki-tab" href="https://docs.google.com/spreadsheets/d/1DPJOtHTLB_y-MTcUheSBrMPFvV_EtBlcYA6Xy1F0R_c/edit?pli=1#gid=472936237" target="_blank"><i class="fa-solid fa-link"></i> Сколько примогемов мы получаем</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="SoftForWish-tab" data-toggle="tab" href="#SoftForWish" role="tab" aria-controls="SoftForWish" aria-selected="false"> <img src="imgs/Item_Primogem.webp" width="20" height="20" alt=""> Прога круток 1 кликом</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false"><i class="fas fa-cog"></i> Настройки</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="plans-tab" data-toggle="tab" href="#plans" role="tab" aria-controls="plans" aria-selected="false"><i class="fa-solid fa-calendar-check"></i> Планы</a>
    </li>
<!--
    <li class="nav-item">
        <a class="nav-link disabled" id="builds-tab" data-toggle="tab" href="#builds" role="tab" aria-controls="builds" aria-selected="false">Билды</a>
    </li>
-->
</ul>
`
})