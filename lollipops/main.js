new Vue({
    el: '#app',
    data: {
        loop: 0,
        gift: '',
        
        spent: 0,
        
        allLollipops: 23988,
        nowLollipops: 3182,
        leftLollipops: 17408,
        spentLollipops: 3638,
        earnedLollipops: 6820,
        
        snowmansNity: '',
        treesNity: '',
        snowballsNity: '',
        clothNity: '',
        
        snowmansAbraham: '',
        treesAbraham: '',
        snowballsAbraham: '',
        clothAbraham: '',
        
        snowmansKeanu: '',
        treesKeanu: '',
        snowballsKeanu: '',
        clothKeanu: '',
        
        snowmansJonsen: '',
        treesJonsen: '',
        snowballsJonsen: '',
        clothJonsen: '',
        
        snowmansShpili: '',
        treesShpili: '',
        snowballsShpili: '',
        clothShpili: '',
        
        snowmansSakamoto: '',
        treesSakamoto: '',
        snowballsSakamoto: '',
        clothSakamoto: '',
        
    },
    methods: {
        addHours(count, nick = '', oper = '') {
            let now = new Date()
            let next = new Date(now.getTime() + count * (60 * 60 * 1000))
            let nextDate = `${next.getHours() < 10 ? `0${next.getHours()}` : next.getHours()}:${next.getMinutes() < 10 ? `0${next.getMinutes()}` : next.getMinutes()}`
            
            
            switch (nick) {
                case 'nity':
                    this.nowLollipops = +this.nowLollipops + 40
                    this.leftLollipops = +this.allLollipops - (this.nowLollipops + this.spentLollipops)
                    this.earnedLollipops = +this.earnedLollipops + 40
                    switch (oper) {
                        case 'snowmans':
                            this.snowmansNity = nextDate
                        break
                        case 'trees':
                            this.treesNity = nextDate
                        break
                        case 'snowballs':
                            this.snowballsNity = nextDate
                        break
                        case 'cloth':
                            this.clothNity = nextDate
                        break
                    }
                break
                case 'abraham':
                    this.nowLollipops = +this.nowLollipops + 40
                    this.leftLollipops = +this.allLollipops - (this.nowLollipops + this.spentLollipops)
                    this.earnedLollipops = +this.earnedLollipops + 40
                    switch (oper) {
                        case 'snowmans':
                            this.snowmansAbraham = nextDate
                        break
                        case 'trees':
                            this.treesAbraham = nextDate
                        break
                        case 'snowballs':
                            this.snowballsAbraham = nextDate
                        break
                        case 'cloth':
                            this.clothAbraham = nextDate
                        break
                    }
                break
                case 'keanu':
                    this.nowLollipops = +this.nowLollipops + 40
                    this.leftLollipops = +this.allLollipops - (this.nowLollipops + this.spentLollipops)
                    this.earnedLollipops = +this.earnedLollipops + 40
                    switch (oper) {
                        case 'snowmans':
                            this.snowmansKeanu = nextDate
                        break
                        case 'trees':
                            this.treesKeanu = nextDate
                        break
                        case 'snowballs':
                            this.snowballsKeanu = nextDate
                        break
                        case 'cloth':
                            this.clothKeanu = nextDate
                        break
                    }
                break
                case 'jonsen':
                    this.nowLollipops = +this.nowLollipops + 40
                    this.leftLollipops = +this.allLollipops - (this.nowLollipops + this.spentLollipops)
                    this.earnedLollipops = +this.earnedLollipops + 40
                    switch (oper) {
                        case 'snowmans':
                            this.snowmansJonsen = nextDate
                        break
                        case 'trees':
                            this.treesJonsen = nextDate
                        break
                        case 'snowballs':
                            this.snowballsJonsen = nextDate
                        break
                        case 'cloth':
                            this.clothJonsen = nextDate
                        break
                    }
                break
                case 'shpili':
                    this.nowLollipops = +this.nowLollipops + 40
                    this.leftLollipops = +this.allLollipops - (this.nowLollipops + this.spentLollipops)
                    this.earnedLollipops = +this.earnedLollipops + 40
                    switch (oper) {
                        case 'snowmans':
                            this.snowmansShpili = nextDate
                        break
                        case 'trees':
                            this.treesShpili = nextDate
                        break
                        case 'snowballs':
                            this.snowballsShpili = nextDate
                        break
                        case 'cloth':
                            this.clothShpili = nextDate
                        break
                    }
                break
                case 'sakamoto':
                    this.nowLollipops = +this.nowLollipops + 40
                    this.leftLollipops = +this.allLollipops - (this.nowLollipops + this.spentLollipops)
                    this.earnedLollipops = +this.earnedLollipops + 40
                    switch (oper) {
                        case 'snowmans':
                            this.snowmansSakamoto = nextDate
                        break
                        case 'trees':
                            this.treesSakamoto = nextDate
                        break
                        case 'snowballs':
                            this.snowballsSakamoto = nextDate
                        break
                        case 'cloth':
                            this.clothSakamoto = nextDate
                            this.loop = +this.loop + 1
                        break
                    }
                break
                default:
                    this.gift = nextDate
                break
                
            }
        },
        reset() {
            this.loop = 0
            this.gift = ''
            
            this.snowmansNity = ''
            this.treesNity = ''
            this.snowballsNity = ''
            this.clothNity = ''
            
            this.snowmansAbraham = ''
            this.treesAbraham = ''
            this.snowballsAbraham = ''
            this.clothAbraham = ''
            
            this.snowmansKeanu = ''
            this.treesKeanu = ''
            this.snowballsKeanu = ''
            this.clothKeanu = ''
            
            this.snowmansJonsen = ''
            this.treesJonsen = ''
            this.snowballsJonsen = ''
            this.clothJonsen = ''
            
            this.snowmansShpili = ''
            this.treesShpili = ''
            this.snowballsShpili = ''
            this.clothShpili = ''
            
            this.snowmansSakamoto = ''
            this.treesSakamoto = ''
            this.snowballsSakamoto = ''
            this.clothSakamoto = ''
        },
        Spent() {
            this.spentLollipops = +this.spentLollipops + +this.spent
            this.nowLollipops = this.nowLollipops - this.spent
            this.spent = 0
        }
    },
    mounted() {
        // loop and gift
        if (localStorage.loop) {
            this.loop = localStorage.loop
        }
        if (localStorage.gift) {
            this.gift = localStorage.gift
        }
        
        // lollipops
        if (localStorage.nowLollipops) {
            this.nowLollipops = localStorage.nowLollipops
        }
        if (localStorage.leftLollipops) {
            this.leftLollipops = localStorage.leftLollipops
        }
        if (localStorage.earnedLollipops) {
            this.earnedLollipops = localStorage.earnedLollipops
        }
        if (localStorage.spentLollipops) {
            this.spentLollipops = localStorage.spentLollipops
        }
        
        // nity
        if (localStorage.snowmansNity) {
            this.snowmansNity = localStorage.snowmansNity
        }
        if (localStorage.treesNity) {
            this.treesNity = localStorage.treesNity
        }
        if (localStorage.snowballsNity) {
            this.snowballsNity = localStorage.snowballsNity
        }
        if (localStorage.clothNity) {
            this.clothNity = localStorage.clothNity
        }
        
        // abraham
        if (localStorage.snowmansAbraham) {
            this.snowmansAbraham = localStorage.snowmansAbraham
        }
        if (localStorage.treesAbraham) {
            this.treesAbraham = localStorage.treesAbraham
        }
        if (localStorage.snowballsAbraham) {
            this.snowballsAbraham = localStorage.snowballsAbraham
        }
        if (localStorage.clothAbraham) {
            this.clothAbraham = localStorage.clothAbraham
        }
        
        // keanu
        if (localStorage.snowmansKeanu) {
            this.snowmansKeanu = localStorage.snowmansKeanu
        }
        if (localStorage.treesKeanu) {
            this.treesKeanu = localStorage.treesKeanu
        }
        if (localStorage.snowballsKeanu) {
            this.snowballsKeanu = localStorage.snowballsKeanu
        }
        if (localStorage.clothKeanu) {
            this.clothKeanu = localStorage.clothKeanu
        }
        
        // jonsen 
        if (localStorage.snowmansJonsen) {
            this.snowmansJonsen = localStorage.snowmansJonsen
        }
        if (localStorage.treesJonsen) {
            this.treesJonsen = localStorage.treesJonsen
        }
        if (localStorage.snowballsJonsen) {
            this.snowballsJonsen = localStorage.snowballsJonsen
        }
        if (localStorage.clothJonsen) {
            this.clothJonsen = localStorage.clothJonsen
        }
        
        // shpili
        if (localStorage.snowmansShpili) {
            this.snowmansShpili = localStorage.snowmansShpili
        }
        if (localStorage.treesShpili) {
            this.treesShpili = localStorage.treesShpili
        }
        if (localStorage.snowballsShpili) {
            this.snowballsShpili = localStorage.snowballsShpili
        }
        if (localStorage.clothShpili) {
            this.clothShpili = localStorage.clothShpili
        }
        
        // sakamoto
        if (localStorage.snowmansSakamoto) {
            this.snowmansSakamoto = localStorage.snowmansSakamoto
        }
        if (localStorage.treesSakamoto) {
            this.treesSakamoto = localStorage.treesSakamoto
        }
        if (localStorage.snowballsSakamoto) {
            this.snowballsSakamoto = localStorage.snowballsSakamoto
        }
        if (localStorage.clothSakamoto) {
            this.clothSakamoto = localStorage.clothSakamoto
        }
        
    },
    watch: {
        // loop
        loop(newData) {
            localStorage.loop = newData
        },
        gift(newData) {
            localStorage.gift = newData
        },
        
        // loop
        nowLollipops(newData) {
            localStorage.nowLollipops = newData
        },
        leftLollipops(newData) {
            localStorage.leftLollipops = newData
        },
        earnedLollipops(newData) {
            localStorage.earnedLollipops = newData
        },
        spentLollipops(newData) {
            localStorage.spentLollipops = newData
        },
        
        // nity
        snowmansNity(newData) {
            localStorage.snowmansNity = newData
        },
        treesNity(newData) {
            localStorage.treesNity = newData
        },
        snowballsNity(newData) {
            localStorage.snowballsNity = newData
        },
        clothNity(newData) {
            localStorage.clothNity = newData
        },
        
        // abraham
        snowmansAbraham(newData) {
            localStorage.snowmansAbraham = newData
        },
        treesAbraham(newData) {
            localStorage.treesAbraham = newData
        },
        snowballsAbraham(newData) {
            localStorage.snowballsAbraham = newData
        },
        clothAbraham(newData) {
            localStorage.clothAbraham = newData
        },
        
        // keanu
        snowmansKeanu(newData) {
            localStorage.snowmansKeanu = newData
        },
        treesKeanu(newData) {
            localStorage.treesKeanu = newData
        },
        snowballsKeanu(newData) {
            localStorage.snowballsKeanu = newData
        },
        clothKeanu(newData) {
            localStorage.clothKeanu = newData
        },
        
        // jonsen
        snowmansJonsen(newData) {
            localStorage.snowmansJonsen = newData
        },
        treesJonsen(newData) {
            localStorage.treesJonsen = newData
        },
        snowballsJonsen(newData) {
            localStorage.snowballsJonsen = newData
        },
        clothJonsen(newData) {
            localStorage.clothJonsen = newData
        },
        
        // shpili
        snowmansShpili(newData) {
            localStorage.snowmansShpili = newData
        },
        treesShpili(newData) {
            localStorage.treesShpili = newData
        },
        snowballsShpili(newData) {
            localStorage.snowballsShpili = newData
        },
        clothShpili(newData) {
            localStorage.clothShpili = newData
        },
        
        // sakamoto
        snowmansSakamoto(newData) {
            localStorage.snowmansSakamoto = newData
        },
        treesSakamoto(newData) {
            localStorage.treesSakamoto = newData
        },
        snowballsSakamoto(newData) {
            localStorage.snowballsSakamoto = newData
        },
        clothSakamoto(newData) {
            localStorage.clothSakamoto = newData
        },
    }
})