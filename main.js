const app = Vue.createApp({
        data() {
            return {
                tasks: [
                    {
                    id: 0,    
                    title: 'COOKIERUN KINGDOM',
                    img: '/images/cookiekingdom.png',
                    url:'https://www.cookierun-kingdom.com/th/',
                    description: 'เกมใหม่จาก คุกกี้รัน ที่มียอดดาวน์โหลดกว่าร้อยล้านครั้ง! พบกับเรื่องราวหลากรสชาติของเหล่าคุกกี้ที่ปะทุขึ้น ณ อาณาจักรแสนหวานได้แล้วตอนนี้!',
                    done: false,
                    },
                    {
                    id: 1,    
                    title: 'DOTA2', 
                    img: '/images/DOTA2.jpg',
                    url:'https://www.dota2.com/play/',
                    description:'DOTA 2 เป็นเกมแนว Action-RTS หรือ MOBA ที่เป็นการพัฒนาต่อยอดมาจากเกม DOTA ซึ่งรู้จักกันมานานในวงการเกมออนไลน์ ในภาคนี้เป็นการพัฒนาโดยทีมผู้สร้างเดิมอย่าง Iceforg ภายใต้สังกัด Valve ซึ่งมีชื่อเสียงการันตีถึงคุณภาพ',
                    done: false,
                    },
                    {
                    id: 2,
                    title: 'GENSHIN IMPACT',
                    img: '/images/Genshin_Impact.png',
                    url:'https://genshin.mihoyo.com/th/home',
                    description:'"Genshin Impact" คือเกมผจญภัยแนว RPG แบบโอเพ่นเวิลด์ใหม่ ซึ่งผลิตโดยบริษัท miHoYo คุณจะได้สัมผัสการผจญภัยบนโลกแห่งจิตนาการที่มีนามว่า "โลกแห่ง Teyvat" ในโลกโอเพ่นเวิลด์แสนกว้างใหญ่นี้ คุณจะได้เดินทางไปยังประเทศทั้งเจ็ด พบปะผู้คนหลากหลายรูปแบบ ได้รับพลังที่หลากหลาย ร่วมมือกับเพื่อนต่อสู้กับศัตรูที่ร้ายกาจ และตามหาพี่น้องที่หายไป',
                    done: false,
                    },
                    {
                    id: 3,    
                    title: 'Little Nightmares', 
                    img: '/images/littlenightmares1.jpg',
                    url:'https://en.bandainamcoent.eu/little-nightmares/little-nightmares',
                    description:'ดื่มด่ำไปกับ Little Nightmares เรื่องราวแห่งฝันร้ายอันดำมืดที่จะต้องเผชิญหน้ากับความกลัวในวัยเด็กของคุณ! ช่วย Six หลบหนีจาก The Maw - เรือลึกลับขนาดใหญ่ที่อาศัยอยู่โดยวิญญาณหิวโหยที่กำลังมองหาอาหารมื้อต่อไป',
                    done: false,
                    },
                    {
                    id: 4,    
                    title: 'Little Nightmares 2', 
                    img: '/images/littlenightmares2.jpg',
                    url:'https://en.bandainamcoent.eu/little-nightmares/little-nightmares-ii',
                    description:'little Nightmares II เป็นเกมผจญภัยสุดระทึกที่คุณรับบทเป็น Mono เด็กหนุ่มที่ติดอยู่ในโลกที่บิดเบี้ยว จงร่วมมือกับ Six เพื่อนใหม่ เพื่อออกเดินทางค้นหาที่มาของ The Signal ที่มาของฝันร้ายในครั้งนี้',
                    done: false,
                    }
                    
                ],
                
                inputSearch: '',
                notFound: false,
                show: false,
                currentIndex: 0
            }
        },
        methods: {
            searchText(searchText) {
                this.inputSearch = searchText;
            },
            closeImage(){
                this.show = false;
            },
            imgClicked(index) {
                this.currentIndex = index;
            },
            showImages(showImg) {
                this.show = showImg;
            }
        },
        computed: {
            countDone(){
                return this.tasks.filter( t => t.done ).length
            },
            countItem(){
                return this.tasks.length
            },
            searchMenu() {
                this.notFound = false;
                if (this.inputSearch == '') {
                    return this.tasks;
                } else {
                    let menu = this.tasks.filter(n => n.title.toLowerCase().includes(this.inputSearch.toLowerCase()));
                    if (menu == '') {
                        this.notFound = true;
                    } else {
                        return menu;
                    }
                }
            }
        }
    }
)