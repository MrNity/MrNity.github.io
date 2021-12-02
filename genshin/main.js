new Vue({
    el: '#app',
    data: {
        char: '',
        hp: 0,
        at: 0,
        def: 0,
        moe: 0,
        bonusHeal: 0,
        bonusRecHeal: 0,
        //
        talantE: 1,
        talantQ: 1,
        constellation: 0,
        //
        amberRank: 0,
        // 
        Shield: 0,
        LongShield: 0,
        
        AP: 0,
        
        Heal: 0,
        HealRec: 0,
        
        HealPerTick: 0,
        HealPerAtck: 0,
        
        HealRecPerTick: 0,
        HealRecPerAtck: 0,
        
    },
    methods: {
        BarbaraCalc() {
            let lvE = +this.talantE
            let lvQ = +this.talantQ
            
        },
        BennettCalc() {
            let lvE = +this.talantE
            let lvQ = +this.talantQ
            
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
            
            let shield = +this.hp * Diona.E.lvl[lvE-1].shield.base + Diona.E.lvl[lvE-1].shield.flat
            
            this.Shield = shield
            this.LongShield = shield + shield * Diona.E.hold
            
            let heal = +this.hp * Diona.Q.lvl[lvQ-1].healPerTick.base + Diona.Q.lvl[lvQ-1].healPerTick.flat
            let bh = +this.bonusHeal / 100
            let brh = +this.bonusRecHeal / 100
            this.HealPerTick = heal + heal * bh
            this.HealRecPerTick = +this.HealPerTick + this.HealPerTick * brh
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
            
            let baff = at * Sara.E.lvl[lvE-1].abr
            
            this.AP = baff
        },
        SayuCalc() {
            let lvQ = +this.talantQ
            let at = +this.at
            let bh = +this.bonusHeal
            let brh = +this.bonusRecHeal
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
            
        },
        ZhongliCalc() {
            let lvE = +this.talantE
            
        },
        
        SaveCharInfo() {
            switch (this.char) {
                
            }
        },
        ShowAll() {
            
        }
    },
    mounted() {
        
        
        
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
            }
        },
        def(newData) {
            this.NoelleCalc() 
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
            }
        },
    }
})
