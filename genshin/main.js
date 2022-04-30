new Vue({
    el: '#app',
    data: {
        link: '',
        
        char: '',
        hp: 0,
        at: 0,
        def: 0,
        moe: 0,
        bonusHeal: 0,
        bonusRecHeal: 0,
        bonusRecHealResonance: 0,
        //
        talantE: 1,
        talantQ: 1,
        constellation: 0,
        // 
        Shield: 0,
        LongShield: 0,
        
        AP: 0,  // Бафф силы атаки
        CE: 0,  // Бафф элементального урона
        
        // Юнь пассивка
        t1: 0,  // 
        t2: 0,  // 
        t3: 0,  // 
        t4: 0,  // 
        
        //
        Heal: 0,
        HealRec: 0,
        HealRecResonance: 0,
        HealRecOnlyResonance: 0,
        
        HealPerTick: 0,
        HealRecPerTick: 0,
        HealRecPerTickResonance: 0,
        HealRecOnlyPerTickResonance: 0,
        
        HealPerAtck: 0,
        HealRecPerAtck: 0,
        HealRecPerAtckResonance: 0,
        HealRecOnlyPerAtckResonance: 0,
        //
        Barbara: {},
        Bennett: {},
        Jean: {},
        Diona: {},
        Kokomi: {},
        Noelle: {},
        Sara: {},
        Sayu: {},
        Xingqiu: {},
        Qiqi: {},
        Zhongli: {},
        Shenhe: {},
        Yunjin: {},
        showAll: false,
    },
    methods: {
        BarbaraCalc() {
            let lvE = +this.talantE
            let lvQ = +this.talantQ
            
            let bh = +this.bonusHeal / 100
            let brh = +this.bonusRecHeal / 100
            let brhr = +this.bonusRecHealResonance / 100
            
            let hp = +this.hp
            
            // HEAL in Q
            let heal = hp * Barbara.Q.lvl[lvQ-1].heal.base + Barbara.Q.lvl[lvQ-1].heal.flat
            
            let healBonus = heal + heal * bh
            let healRec = healBonus + heal * brh
            
            this.Heal = healBonus
            this.HealRec = healRec
            this.HealRecResonance = healRec + heal * brhr
            this.HealRecOnlyResonance = healBonus + heal * brhr
            
            // TICK in E
            let healTick = hp * Barbara.E.lvl[lvE-1].heal.base + Barbara.E.lvl[lvE-1].heal.flat
            
            let healTickBonus = healTick + healTick * bh
            let healRecPerTick = healTickBonus + healTick * brh
            
            this.HealPerTick = healTickBonus
            this.HealRecPerTick = healRecPerTick
            
            this.HealRecPerTickResonance = healRecPerTick + healTick * brhr
            this.HealRecOnlyPerTickResonance = healTickBonus + healTick * brhr
            
            // ATCK in E
            let healPerAtck = hp * Barbara.E.lvl[lvE-1].healPerAtck.base + Barbara.E.lvl[lvE-1].healPerAtck.flat
            
            let healPerAtckBonus = healPerAtck + healPerAtck * bh
            let healRecPerAtckBonus = healPerAtckBonus + healPerAtck * brh
            
            this.HealPerAtck = healPerAtckBonus
            this.HealRecPerAtck = healRecPerAtckBonus
            this.HealRecPerAtckResonance = healRecPerAtckBonus + healPerAtck * brhr
            this.HealRecOnlyPerAtckResonance = healPerAtckBonus + healPerAtck * brhr
        },
        BennettCalc() {
            let lvQ = +this.talantQ
            let constellation = +this.constellation
            
            let hp = +this.hp
            let at = +this.at
            
            let healTick = hp * Bennett.Q.lvl[lvQ-1].healPerTick.base + Bennett.Q.lvl[lvQ-1].healPerTick.flat
            this.HealPerTick = healTick
            
            let bonus = 0
            if (constellation >= 1) {
                bonus = 0.2
            }
            let ap = (at + bonus * at) * Bennett.Q.lvl[lvQ-1].abr
            this.AP = ap
        },
        JeanCalc() {
            let lvQ = +this.talantQ
            let bh = +this.bonusHeal / 100
            let brh = +this.bonusRecHeal / 100
            let at = +this.at
            
            let heal = at * Jean.Q.lvl[lvQ-1].heal.base + Jean.Q.lvl[lvQ-1].heal.flat
            
            let healTick = at * Jean.Q.lvl[lvQ-1].healPerTick.base + Jean.Q.lvl[lvQ-1].healPerTick.flat
            let healPerAtck = at * Jean.hold
            
            heal = heal + heal * bh
            this.Heal = heal
            
            healRec = heal + heal * brh
            this.HealRec = healRec
            
            healTick = healTick + healTick * bh
            this.HealPerTick = healTick
            this.HealRecPerTick = healTick + healTick * brh
            
            
            healPerAtck = healPerAtck + healPerAtck * bh
            this.HealPerAtck = healPerAtck
            this.HealRecPerAtck = healPerAtck + healPerAtck * brh
            
        },
        DionaCalc() {
            let lvE = +this.talantE
            let lvQ = +this.talantQ
//            let con = +this.constellation
            
            let shield = +this.hp * Diona.E.lvl[lvE-1].shield.base + Diona.E.lvl[lvE-1].shield.flat
            
            this.Shield = shield
            this.LongShield = shield + shield * Diona.E.hold
            
            let heal = +this.hp * Diona.Q.lvl[lvQ-1].healPerTick.base + Diona.Q.lvl[lvQ-1].healPerTick.flat
            let bh = +this.bonusHeal / 100
            let brh = +this.bonusRecHeal / 100
            this.HealPerTick = heal + heal * bh
            this.HealRecPerTick = +this.HealPerTick + this.HealPerTick * brh
        },
        KokomiCalc() {
            let lvE = +this.talantE
            let lvQ = +this.talantQ
//            let con = +this.constellation
            
        },
        NoelleCalc() {
            let lvE = +this.talantE
            
            let shield = +this.def * Noelle.E.lvl[lvE-1].shield.base + Noelle.E.lvl[lvE-1].shield.flat
            let heal = +this.def * Noelle.E.lvl[lvE-1].heal.base + Noelle.E.lvl[lvE-1].heal.flat
            
            this.Shield = shield
            heal = heal + (heal * this.bonusHeal / 100)
            this.HealPerAtck = heal
            this.HealRecPerAtck = heal + (heal * this.bonusRecHeal / 100)
            
        },
        SaraCalc() {
            let lvE = +this.talantE
            let at = +this.at
            
            let critElectro = 0
            if (this.constellation == 6) {
                critElectro = 60
            }
            
            let baff = at * Sara.E.lvl[lvE-1].abr
            
            this.AP = baff
            this.CE = critElectro
        },
        SayuCalc() {
            let lvQ = +this.talantQ
            let at = +this.at
            let bh = +this.bonusHeal / 100
            let brh = +this.bonusRecHeal / 100
            let moe = +this.moe
            
            let heal = at * Sayu.Q.lvl[lvQ-1].heal.base + Sayu.Q.lvl[lvQ-1].heal.flat
            heal = heal + heal * bh
            healRec = heal + heal * brh
            this.Heal = heal
            this.HealRec = healRec + healRec * brh
            
            let healTick = at * Sayu.Q.lvl[lvQ-1].healPerTick.base + Sayu.Q.lvl[lvQ-1].healPerTick.flat
            healTick = healTick + healTick * bh
            this.HealPerTick = healTick + healTick * brh
            this.HealRecPerTick = healTick + healTick * brh
            
            let healPerAtck = moe * Sayu.holdMoe + Sayu.hold
            this.HealPerAtck = healPerAtck
            this.HealRecPerAtck = healPerAtck + healPerAtck * brh
            
        },
        XingqiuCalc() {
            let per = 0.06
            let hp = +this.hp
            let bh = +this.bonusHeal / 100
            let brh = +this.bonusRecHeal / 100
            
            let heal = hp * per
            heal = heal + heal * bh
            
            this.Heal = heal
            this.HealRec = heal + heal * brh
        },
        QiqiCalc() {
            let lvE = +this.talantE
            let at = +this.at
            let bh = +this.bonusHeal / 100
            let brh = +this.bonusRecHeal / 100
            
            let heal = at * Qiqi.E.lvl[lvE-1].heal.base + Qiqi.E.lvl[lvE-1].heal.flat
            
            heal = heal + heal * bh
            healRec = heal + heal * brh
            this.Heal = heal
            this.HealRec = healRec + healRec * brh
            
            let healPerAtck = at * Qiqi.E.lvl[lvE-1].healPerAtck.base + Qiqi.E.lvl[lvE-1].healPerAtck.flat
            healPerAtck = healPerAtck + healPerAtck * bh
            this.HealPerAtck = healPerAtck + healPerAtck * brh
            this.HealRecPerAtck = healPerAtck + healPerAtck * brh
        },
        ZhongliCalc() {
            let lvE = +this.talantE
            
            let shield = +this.hp * Zhongli.E.lvl[lvE-1].shield.base + Zhongli.E.lvl[lvE-1].shield.flat
            
            this.Shield = shield + shield * Zhongli.E.hold
        },
        
        ShenheCalc() {
            let lvE = +this.talantE
            let at = +this.at
            
            let baff = at * Shenhe.E.lvl[lvE-1].abr
            
            this.CE = baff      // элементальный урон (крио)
            
        },
        YunjinCalc() {
            let lvE = +this.talantE
            let lvQ = +this.talantQ
            let def = +this.def
            
            let shield = +this.hp * Yunjin.E.lvl[lvE-1].shield.base + Yunjin.E.lvl[lvE-1].shield.flat
            this.Shield = shield
            
            let baff = def * Yunjin.Q.lvl[lvQ-1].abr
            this.AP = baff
            
            this.t1 = def * Yunjin.hold.t1
            this.t2 = def * Yunjin.hold.t2
            this.t3 = def * Yunjin.hold.t3
            this.t4 = def * Yunjin.hold.t4
            
        },
        
        SaveCharInfo() {
            switch (this.char) {
                case 'Barbara':
                    let barbara = {
                        hp: +this.hp,
                        bonusHeal: +this.bonusHeal,
                        bonusRecHeal: +this.bonusRecHeal,
                        bonusRecHealResonance: +this.bonusRecHealResonance,
                        talantE: +this.talantE,
                        talantQ: +this.talantQ,
                        Heal: +this.Heal,
                        HealRec: +this.HealRec,
                        HealRecResonance: +this.HealRecResonance,
                        HealRecOnlyResonance: +this.HealRecOnlyResonance,
                        HealPerTick: +this.HealPerTick,
                        HealRecPerTick: +this.HealRecPerTick,
                        HealRecPerTickResonance: +this.HealRecPerTickResonance,
                        HealRecOnlyPerTickResonance: +this.HealRecOnlyPerTickResonance,
                        HealPerAtck: +this.HealPerAtck,
                        HealRecPerAtck: +this.HealRecPerAtck,
                        HealRecPerAtckResonance: +this.HealRecPerAtckResonance,
                        HealRecOnlyPerAtckResonance: +this.HealRecOnlyPerAtckResonance
                    }
                    localStorage.barbara = JSON.stringify(barbara)
                break
                case 'Bennett':
                    let bennett = {
                        hp: +this.hp,
                        at: +this.at,
                        HealPerTick: +this.HealPerTick,
                        talantQ: +this.talantQ,
                        AP: +this.AP,
                        constellation: +this.constellation
                    }
                    localStorage.bennett = JSON.stringify(bennett)
                break
                case 'Jean':
                    let jean = {
                        at: +this.at,
                        bonusHeal: +this.bonusHeal,
                        bonusRecHeal: +this.bonusRecHeal,
                        talantQ: +this.talantQ,
                        Heal: +this.Heal,
                        HealRec: +this.HealRec,
                        HealPerTick: +this.HealPerTick,
                        HealPerAtck: +this.HealPerAtck,
                        HealRecPerTick: +this.HealRecPerTick,
                        HealRecPerAtck: +this.HealRecPerAtck
                    }
                    localStorage.jean = JSON.stringify(jean)
                break
                case 'Diona':
                    let diona = {
                        hp: +this.hp,
                        bonusHeal: +this.bonusHeal,
                        bonusRecHeal: +this.bonusRecHeal,
                        talantE: +this.talantE,
                        talantQ: +this.talantQ,
                        constellation: +this.constellation,
                        Shield: +this.Shield,
                        LongShield: +this.LongShield,
                        HealPerTick: +this.HealPerTick,
                        HealRecPerTick: +this.HealRecPerTick
                    }
                    localStorage.diona = JSON.stringify(diona)
                break
                case 'Noelle':
                    let noelle = {
                        def: +this.def,
                        bonusHeal: +this.bonusHeal,
                        bonusRecHeal: +this.bonusRecHeal,
                        talantE: +this.talantE,
                        Shield: +this.Shield,
                        Heal: +this.Heal,
                        HealRec: +this.HealRec,
                        HealPerAtck: +this.HealPerAtck,
                        HealRecPerAtck: +this.HealRecPerAtck
                    }
                    localStorage.noelle = JSON.stringify(noelle)
                break
                case 'Sara':
                    let sara = {
                        at: +this.at,
                        talantE: +this.talantE,
                        AP: +this.AP,
                        constellation: +this.constellation,
                        CE: +this.CE
                    }
                    localStorage.sara = JSON.stringify(sara)
                break
                case 'Sayu':
                    let sayu = {
                        at: +this.at,
                        moe: +this.moe,
                        bonusHeal: +this.bonusHeal,
                        bonusRecHeal: +this.bonusRecHeal,
                        Heal: +this.Heal,
                        HealRec: +this.HealRec,
                        HealPerTick: +this.HealPerTick,
                        HealPerAtck: +this.HealPerAtck,
                        HealRecPerTick: +this.HealRecPerTick,
                        HealRecPerAtck: +this.HealRecPerAtck
                    }
                    localStorage.sayu = JSON.stringify(sayu)
                break
                case 'Xingqiu':
                    let xingqiu = {
                        hp: +this.hp,
                        Heal: +this.Heal,
                        HealRec: +this.HealRec
                    }
                    localStorage.xingqiu = JSON.stringify(xingqiu)
                break
                case 'Qiqi':
                    let qiqi = {
                        at: +this.at,
                        bonusHeal: +this.bonusHeal,
                        bonusRecHeal: +this.bonusRecHeal,
                        talantE: +this.talantE,
                        Heal: +this.Heal,
                        HealRec: +this.HealRec,
                        HealPerAtck: +this.HealPerAtck,
                        HealRecPerAtck: +this.HealRecPerAtck
                    }
                    localStorage.qiqi = JSON.stringify(qiqi)
                break
                case 'Zhongli':
                    let zhongli = {
                        hp: +this.hp,
                        talantE: +this.talantE,
                        Shield: +this.Shield
                    }
                    localStorage.zhongli = JSON.stringify(zhongli)
                break
                case 'Shenhe':
                    let shenhe = {
                        at: +this.at,
                        talantE: +this.talantE,
                        CE: +this.CE,
                    }
                    localStorage.shenhe = JSON.stringify(shenhe)
                break
                case 'Yun Jin':
                    let yunjin = {
                        def: +this.def,
                        hp: +this.hp,
                        talantE: +this.talantE,
                        talantQ: +this.talantQ,
                        Shield: +this.Shield,
                        AP: +this.AP,
                        t1: +this.t1,
                        t2: +this.t2,
                        t3: +this.t3,
                        t4: +this.t4,
                    }
                    localStorage.yunjin = JSON.stringify(yunjin)
                break
            }
            alert(`Данные персонажа сохранены в браузере!`)
            this.ShowAll(false)
        },
        LoadCharInfo() {
            switch (this.char) {
                case 'Barbara':
                    let barbara = JSON.parse(localStorage.barbara)
                    this.hp = barbara.hp
                    this.bonusHeal = barbara.bonusHeal
                    this.bonusRecHeal = barbara.bonusRecHeal
                    this.bonusRecHealResonance = barbara.bonusRecHealResonance
                    this.talantE = barbara.talantE
                    this.talantQ = barbara.talantQ
                    this.Heal = barbara.Heal
                    this.HealRec = barbara.HealRec
                    this.HealRecResonance = barbara.HealRecResonance
                    this.HealRecOnlyResonance = barbara.HealRecOnlyResonance
                    this.HealPerTick = barbara.HealPerTick
                    this.HealRecPerTick = barbara.HealRecPerTick
                    this.HealRecPerTickResonance = barbara.HealRecPerTickResonance
                    this.HealRecOnlyPerTickResonance = barbara.HealRecOnlyPerTickResonance
                    this.HealPerAtck = barbara.HealPerAtck
                    this.HealRecPerAtck = barbara.HealRecPerAtck
                    this.HealRecPerAtckResonance = barbara.HealRecPerAtckResonance
                    this.HealRecOnlyPerAtckResonance = barbara.HealRecOnlyPerAtckResonance
                break
                case 'Bennett':
                    let bennett = JSON.parse(localStorage.bennett)
                    this.hp = bennett.hp,
                    this.at = bennett.at,
                    this.HealPerTick = bennett.HealPerTick,
                    this.talantQ = bennett.talantQ,
                    this.AP = bennett.AP
                    this.constellation = bennett.constellation
                break
                case 'Jean':
                    let jean = JSON.parse(localStorage.jean)
                    this.at = jean.at
                    this.bonusHeal = jean.bonusHeal
                    this.bonusRecHeal = jean.bonusRecHeal
                    this.talantQ = jean.talantQ
                    this.Heal = jean.Heal
                    this.HealRec = jean.HealRec
                    this.HealPerTick = jean.HealPerTick
                    this.HealPerAtck = jean.HealPerAtck
                    this.HealRecPerTick = jean.HealRecPerTick
                    this.HealRecPerAtck = jean.HealRecPerAtck
                break
                case 'Diona':
                    let diona = JSON.parse(localStorage.diona)
                    this.hp = diona.hp
                    this.bonusHeal = diona.bonusHeal
                    this.bonusRecHeal = diona.bonusRecHeal
                    this.talantE = diona.talantE
                    this.talantQ = diona.talantQ
                    this.constellation = diona.constellation
                    this.Shield = diona.Shield
                    this.LongShield = diona.LongShield
                    this.HealPerTick = diona.HealPerTick
                    this.HealRecPerTick = diona.HealRecPerTick
                break
                case 'Noelle':
                    let noelle = JSON.parse(localStorage.noelle)
                    this.def = noelle.def
                    this.bonusHeal = noelle.bonusHeal
                    this.bonusRecHeal = noelle.bonusRecHeal
                    this.talantE = noelle.talantE
                    this.Shield = noelle.Shield
                    this.Heal = noelle.Heal
                    this.HealRec = noelle.HealRec
                    this.HealPerAtck = noelle.HealPerAtck
                    this.HealRecPerAtck = noelle.HealRecPerAtck
                break
                case 'Sara':
                    let sara = JSON.parse(localStorage.sara)
                    this.at = sara.at,
                    this.talantE = sara.talantE,
                    this.AP = sara.AP
                    this.constellation = sara.constellation
                    this.CE = sara.CE
                break
                case 'Sayu':
                    let sayu = JSON.parse(localStorage.sayu)
                    this.at = sayu.at,
                    this.moe = sayu.moe,
                    this.bonusHeal = sayu.bonusHeal,
                    this.bonusRecHeal = sayu.bonusRecHeal,
                    this.Heal = sayu.Heal,
                    this.HealRec = sayu.HealRec,
                    this.HealPerTick = sayu.HealPerTick,
                    this.HealPerAtck = sayu.HealPerAtck,
                    this.HealRecPerTick = sayu.HealRecPerTick,
                    this.HealRecPerAtck = sayu.HealRecPerAtck
                break
                case 'Xingqiu':
                    let xingqiu = JSON.parse(localStorage.xingqiu)
                    this.hp = xingqiu.hp,
                    this.Heal = xingqiu.Heal,
                    this.HealRec = xingqiu.HealRec
                break
                case 'Qiqi':
                    let qiqi = JSON.parse(localStorage.qiqi)
                    this.at = qiqi.at,
                    this.bonusHeal = qiqi.bonusHeal,
                    this.bonusRecHeal = qiqi.bonusRecHeal,
                    this.talantE = qiqi.talantE,
                    this.Heal = qiqi.Heal,
                    this.HealRec = qiqi.HealRec,
                    this.HealPerAtck = qiqi.HealPerAtck,
                    this.HealRecPerAtck = qiqi.HealRecPerAtck
                break
                case 'Zhongli':
                    let zhongli = JSON.parse(localStorage.zhongli)
                    this.hp = zhongli.hp
                    this.talantE = zhongli.talantE
                    this.Shield = zhongli.Shield
                break
                case 'Shenhe':
                    let shenhe = JSON.parse(localStorage.shenhe)
                    this.at = shenhe.at
                    this.talantE = shenhe.talantE
                    this.CE = shenhe.CE
                break
                case 'Yun Jin':
                    let yunjin = JSON.parse(localStorage.yunjin)
                    this.def = yunjin.def
                    this.hp = yunjin.hp
                    this.talantE = yunjin.talantE
                    this.talantQ = yunjin.talantQ
                    this.Shield = yunjin.Shield
                    this.AP = yunjin.AP
                    this.t1 = yunjin.t1
                    this.t2 = yunjin.t2
                    this.t3 = yunjin.t3
                    this.t4 = yunjin.t4
                break
            }
            alert(`Данные персонажа загружены в форму!`)
        },
        ShowAll(show = true) {
            if (show) {
                this.showAll = !this.showAll
            }
            this.Barbara = localStorage.barbara != undefined ? JSON.parse(localStorage.barbara) : {}
            this.Bennett = localStorage.bennett != undefined ? JSON.parse(localStorage.bennett) : {}
            this.Jean = localStorage.jean != undefined ? JSON.parse(localStorage.jean) : {}
            this.Diona = localStorage.diona != undefined ? JSON.parse(localStorage.diona) : {}
            this.Noelle = localStorage.noelle != undefined ? JSON.parse(localStorage.noelle) : {}
            this.Sara = localStorage.sara != undefined ? JSON.parse(localStorage.sara) : {}
            this.Sayu = localStorage.sayu != undefined ? JSON.parse(localStorage.sayu) : {}
            this.Xingqiu = localStorage.xingqiu != undefined ? JSON.parse(localStorage.xingqiu) : {}
            this.Qiqi = localStorage.qiqi != undefined ? JSON.parse(localStorage.qiqi) : {}
            this.Zhongli = localStorage.zhongli != undefined ? JSON.parse(localStorage.zhongli) : {}
            this.Shenhe = localStorage.shenhe != undefined ? JSON.parse(localStorage.shenhe) : {}
            this.Yunjin = localStorage.yunjin != undefined ? JSON.parse(localStorage.yunjin) : {}
        },
        CheckInfo() {
            if (localStorage.barbara == undefined) {
                localStorage.barbara = JSON.stringify({
                    hp: 0,
                    bonusHeal: 0,
                    bonusRecHeal: 0,
                    bonusRecHealResonance: 0,
                    talantE: 0,
                    talantQ: 0,
                    Heal: 0,
                    HealRec: 0,
                    HealRecResonance: 0,
                    HealRecOnlyResonance: 0,
                    HealPerTick: 0,
                    HealRecPerTick: 0,
                    HealRecPerTickResonance: 0,
                    HealRecOnlyPerTickResonance: 0,
                    HealPerAtck: 0,
                    HealRecPerAtck: 0,
                    HealRecPerAtckResonance: 0,
                    HealRecOnlyPerAtckResonance: 0
                })
            }
            if (localStorage.bennett == undefined) {
                localStorage.bennett = JSON.stringify({
                    hp: 0,
                    at: 0,
                    HealPerTick: 0,
                    talantQ: 0,
                    AP: 0,
                    constellation: 0
                })
            }
            if (localStorage.jean == undefined) {
                localStorage.jean = JSON.stringify({
                    at: 0,
                    bonusHeal: 0,
                    bonusRecHeal: 0,
                    talantQ: 0,
                    Heal: 0,
                    HealRec: 0,
                    HealPerTick: 0,
                    HealPerAtck: 0,
                    HealRecPerTick: 0,
                    HealRecPerAtck: 0
                })
            }
            if (localStorage.diona == undefined) {
                localStorage.diona = JSON.stringify({
                    hp: 0,
                    bonusHeal: 0,
                    bonusRecHeal: 0,
                    talantE: 0,
                    talantQ: 0,
                    constellation: 0,
                    Shield: 0,
                    LongShield: 0,
                    HealPerTick: 0,
                    HealRecPerTick: 0
                })
            }
            if (localStorage.noelle == undefined) {
                localStorage.noelle = JSON.stringify({
                    def: 0,
                    bonusHeal: 0,
                    bonusRecHeal: 0,
                    talantE: 0,
                    Shield: 0,
                    Heal: 0,
                    HealRec: 0,
                    HealPerAtck: 0,
                    HealRecPerAtck: 0
                })
            }
            if (localStorage.sara == undefined) {
                localStorage.sara = JSON.stringify({
                    at: 0,
                    talantE: 0,
                    AP: 0,
                    constellation: 0,
                    CE: 0
                })
            }
            if (localStorage.sayu == undefined) {
                localStorage.sayu = JSON.stringify({
                    at: 0,
                    moe: 0,
                    bonusHeal: 0,
                    bonusRecHeal: 0,
                    Heal: 0,
                    HealRec: 0,
                    HealPerTick: 0,
                    HealPerAtck: 0,
                    HealRecPerTick: 0,
                    HealRecPerAtck: 0
                })
            }
            if (localStorage.xingqiu == undefined) {
                localStorage.xingqiu = JSON.stringify({
                    hp: 0,
                    Heal: 0,
                    HealRec: 0
                })
            }
            if (localStorage.qiqi == undefined) {
                localStorage.qiqi = JSON.stringify({
                    at: 0,
                    bonusHeal: 0,
                    bonusRecHeal: 0,
                    talantE: 0,
                    Heal: 0,
                    HealRec: 0,
                    HealPerAtck: 0,
                    HealRecPerAtck: 0
                })
            }
            if (localStorage.shenhe == undefined) {
                localStorage.shenhe = JSON.stringify({
                    at: 0,
                    talantE: 0,
                    CE: 0,
                })
            }
            if (localStorage.yunjin == undefined) {
                localStorage.yunjin = JSON.stringify({
                    def: 0,
                    hp: 0,
                    talantE: 0,
                    talantQ: 0,
                    Shield: 0,
                    AP: 0,
                    t1: 0,
                    t2: 0,
                    t3: 0,
                    t4: 0,
                })
            }
            if (localStorage.zhongli == undefined) {
                localStorage.zhongli = JSON.stringify({
                    hp: 0,
                    talantE: 0,
                    Shield: 0,
                })
            }
        }
    },
    mounted() {
        this.CheckInfo()
    },
    watch: {
        hp(newData) {
            switch (this.char) {
                case 'Barbara': 
                    this.BarbaraCalc() 
                break
                case 'Bennett': 
                    this.BennettCalc() 
                break
                case 'Diona': 
                    this.DionaCalc() 
                break
                case 'Xingqiu': 
                    this.XingqiuCalc() 
                break
                case 'Zhongli': 
                    this.ZhongliCalc() 
                break
                case 'Yun Jin':
                    this.YunjinCalc()
                break
            }
        },
        at(newDate) {
            switch (this.char) {
                case 'Bennett': 
                    this.BennettCalc() 
                break
                case 'Jean': 
                    this.JeanCalc() 
                break
                case 'Sara': 
                    this.SaraCalc() 
                break
                case 'Sayu': 
                    this.SayuCalc() 
                break
                case 'Qiqi': 
                    this.QiqiCalc() 
                break
                case 'Shenhe': 
                    this.ShenheCalc() 
                break
            }
        },
        def(newData) {
            switch (this.char) {
                case 'Noelle':
                    this.NoelleCalc() 
                break
                case 'Yun Jin':
                    this.YunjinCalc()
                break
            }
        },
        moe(newData) {
            this.SayuCalc() 
        },
        bonusHeal(newData) {
            switch (this.char) {
                case 'Barbara': 
                    this.BarbaraCalc() 
                break
                case 'Bennett': 
                    this.BennettCalc() 
                break
                case 'Jean': 
                    this.JeanCalc() 
                break
                case 'Diona': 
                    this.DionaCalc() 
                break
                case 'Noelle': 
                    this.NoelleCalc() 
                break
                case 'Sayu': 
                    this.SayuCalc() 
                break
                case 'Xingqiu': 
                    this.XingqiuCalc() 
                break
                case 'Qiqi': 
                    this.QiqiCalc() 
                break
            }
        },
        bonusRecHeal(newData) {
            switch (this.char) {
                case 'Barbara': 
                    this.BarbaraCalc() 
                break
                case 'Bennett': 
                    this.BennettCalc() 
                break
                case 'Jean': 
                    this.JeanCalc() 
                break
                case 'Diona': 
                    this.DionaCalc() 
                break
                case 'Noelle': 
                    this.NoelleCalc() 
                break
                case 'Sayu': 
                    this.SayuCalc() 
                break
                case 'Xingqiu': 
                    this.XingqiuCalc() 
                break
                case 'Qiqi': 
                    this.QiqiCalc() 
                break
            }
        },
        bonusRecHealResonance(newData) {
            this.BarbaraCalc()
        },
        talantE(newData) {
            switch (this.char) {
                case 'Barbara': 
                    this.BarbaraCalc() 
                    break
                case 'Bennett': 
                    this.BennettCalc() 
                break
                case 'Jean': 
                    this.JeanCalc() 
                break
                case 'Diona': 
                    this.DionaCalc() 
                break
                case 'Noelle': 
                    this.NoelleCalc() 
                break
                case 'Sara': 
                    this.SaraCalc() 
                break
                case 'Sayu': 
                    this.SayuCalc() 
                break
                case 'Xingqiu': 
                    this.XingqiuCalc() 
                break
                case 'Qiqi': 
                    this.QiqiCalc() 
                break
                case 'Zhongli': 
                    this.ZhongliCalc() 
                break
                case 'Shenhe': 
                    this.ShenheCalc() 
                break
                case 'Yun Jin': 
                    this.YunjinCalc() 
                break
            }
        },
        talantQ(newData) {
            switch (this.char) {
                case 'Barbara': 
                    this.BarbaraCalc() 
                    break
                case 'Bennett': 
                    this.BennettCalc() 
                break
                case 'Jean': 
                    this.JeanCalc() 
                break
                case 'Diona': 
                    this.DionaCalc() 
                break
                case 'Noelle': 
                    this.NoelleCalc() 
                break
                case 'Sara': 
                    this.SaraCalc() 
                break
                case 'Sayu': 
                    this.SayuCalc() 
                break
                case 'Xingqiu': 
                    this.XingqiuCalc() 
                break
                case 'Qiqi': 
                    this.QiqiCalc() 
                break
                case 'Zhongli': 
                    this.ZhongliCalc() 
                break
                case 'Yun Jin': 
                    this.YunjinCalc() 
                break
            }
        },
        constellation(newData) {
            switch (this.char) {
                case 'Barbara': 
                    this.BarbaraCalc() 
                    break
                case 'Bennett': 
                    this.BennettCalc() 
                break
                case 'Jean': 
                    this.JeanCalc() 
                break
                case 'Diona': 
                    this.DionaCalc() 
                break
                case 'Noelle': 
                    this.NoelleCalc() 
                break
                case 'Sara': 
                    this.SaraCalc() 
                break
                case 'Sayu': 
                    this.SayuCalc() 
                break
                case 'Xingqiu': 
                    this.XingqiuCalc() 
                break
                case 'Qiqi': 
                    this.QiqiCalc() 
                break
                case 'Zhongli': 
                    this.ZhongliCalc() 
                break
                case 'Shenhe': 
                    this.ShenheCalc() 
                break
            }
        },
    }
})
