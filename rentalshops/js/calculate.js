$(document).ready(function() {
    
    let start_amount = 50
    
    let amounts = []
    
    let options = [
        {
            id: 1,
            title: 'Онлайн поддержка 24/7',
            amount: 10
        },
        {
            id: 2,
            title: 'Собственное доменное имя',
            amount: 4
        },
        {
            id: 3,
            title: 'Чат-бот для общения с клиентами',
            amount: 60
        },
        {
            id: 4,
            title: 'Управление магазином через чат-ботов в мессенджерах',
            amount: 25
        },
        {
            id: 5,
            title: 'Возможность продажи через чат-ботов в мессенджерах',
            amount: 25
        },
        {
            id: 6,
            title: 'Доступ к премиум шаблонам',
            amount: 10
        },
        {
            id: 7,
            title: 'Конструктор сайта',
            amount: 5
        },
        {
            id: 8,
            title: 'Конструктор чат-бота',
            amount: 10
        },
    ]
    
    
    $('.options').on('click', '.elips-white', function() {
        let id = $(this).data('id')
        let title = $(this).html()
        let amount = $(this).data('amount')
        
        amounts.push(amount)
        
        $('.options').children(`.elips-white[data-id=${id}]`).remove()
        $('.selected-options').append(`<p class="text-white elips-purple" data-id="${id}" data-amount="${amount}">${title} <a class="delete-option">x</a></p>`)
        Recount()
    })
    $('.selected-options').on('click', 'p.elips-purple > .delete-option', function() {
        let id = $(this).parent('.elips-purple').data('id')
        let title = $(this).parent('.elips-purple').html().replace(' <a class="delete-option">x</a>', '')
        let amount = $(this).parent('.elips-purple').data('amount')
        
        amounts.splice(amounts.indexOf(amount), 1)
        
        $('.selected-options').children(`.elips-purple[data-id="${id}"]`).remove()
        $('.options').append(`<button class="text-white elips-white" data-id="${id}" data-amount="${amount}">${title}</button>`)
        Recount()
    })
    
    function Spawn() {
        $('.options').html('')
        options.forEach(ob => {
            $('.options').append(`<button class="text-white elips-white" data-id="${ob.id}" data-amount="${ob.amount}">${ob.title}</button>`)
        })
    }
    
    function Recount() {
        let total = start_amount
        amounts.forEach(a => {
            total += a
        })
        $('#totalAmount').html(`${total}$/Мес.`)
    }
    
    Spawn()
    Recount()
})