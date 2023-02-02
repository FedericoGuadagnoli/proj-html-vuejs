import { reactive } from "vue";
export const store = reactive({


    Headerlinks: [
        {
            id: '1',
            text: 'home',
            icon: 'chevron.png'
        },
        {
            id: '2',
            text: 'about',
            icon: 'chevron.png'
        },
        {
            id: '3',
            text: 'service',
            icon: 'chevron.png'
        },
        {
            id: '4',
            text: 'portfolio',
            icon: 'chevron.png'
        },
        {
            id: '5',
            text: 'shop',
            icon: 'chevron.png'
        },
        {
            id: '6',
            text: 'blog',
            icon: 'chevron.png'
        },
        {
            id: '7',
            text: 'contact',
        },
    ],

    brandsIcon: ['fa-brands fa-facebook-f', 'fa-brands fa-twitter', 'fa-brands fa-instagram', 'fa-brands fa-pinterest-p'],

    naturalProducts: ['fe3.jpg', 'fe1.jpg', 'fe2.jpg', 'fe1.jpg'],
    categoriesProducts: ['all product', 'apple', 'food', 'orange', 'vegetable'],
    shopProducts: [
        {
            id: '1',
            image: 's5.jpg',
            name: 'fress apple',
            prize: '$18'
        },
        {
            id: '2',
            image: 's2.jpg',
            name: 'fress cobies',
            oldPrize: '$18',
            prize: '$18',
            label: 'sale'
        },
        {
            id: '3',
            image: 's8.jpg',
            name: 'fresh waterlemon',
            prize: '$15'
        },
        {
            id: '4',
            image: 's1.jpg',
            name: 'organic juice',
            oldPrize: '$20',
            prize: '$15',
            label: 'sale'
        },
        {
            id: '5',
            image: 's4.jpg',
            name: 'fresh blueberries',
            oldPrize: '$19',
            prize: '$14',
            label: 'sale'
        },
        {
            id: '6',
            image: 's10.jpg',
            name: 'organic letus',
            prize: '$23'
        },
        {
            id: '7',
            image: 's9.jpg',
            name: 'red gajor',
            oldPrize: '$29',
            prize: '$26',
            label: 'sale'
        },
        {
            id: '8',
            image: 's7.jpg',
            name: 'naga pepper',
            prize: '$21'
        }
    ],
    strengths: [
        {
            number: '29+',
            text: 'years of experience',
            img: 'counter-shap1.png'
        },
        {
            number: '200+',
            text: 'everyday online delivery',
            img: 'counter-shap1.png'
        },
        {
            number: '20k',
            text: 'client satyisfaction',
            img: 'counter-shap1.png'
        },
        {
            number: '30+',
            text: 'award winning',
        }
    ],
    discounts: [
        {
            text: 'Fresh gurden tomato combo offer... $37',
            link: 'shop now',
            image: 'offer-img01.jpg'
        },
        {
            text: 'Some organic healty fruits combo offer... $37',
            link: 'shop now',
            image: 'offer-img02.jpg'
        }
    ],
    news: [
        {
            img: 'blo1-390x250.jpg',
            name: 'gogrin',
            date: '17 Dec 2022',
            title: 'Where I live, I am surrounded by fesh,organic food,so I eat really well.',
            text: 'lorem ipsum dolor sit anet,consectetur adipisicing elit,sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis',
            link: 'read more'
        },
        {
            img: 'blo2-390x250.jpg',
            name: 'gogrin',
            date: '16 Dec 2022',
            title: 'What we get at home is 100% organic food. We are also 90% vegetarian',
            text: 'lorem ipsum dolor sit anet,consectetur adipisicing elit,sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis',
            link: 'read more'
        },
        {
            img: 'blo3-390x250.jpg',
            name: 'gogrin',
            date: '15 Dec 2022',
            title: 'If we as a society are willing to have a preference for organic food farmer.',
            text: 'lorem ipsum dolor sit anet,consectetur adipisicing elit,sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis',
            link: 'read more'
        }

    ],
    logos: ['brand1.png', 'brand4.png', 'brand3.png', 'brand1.png', 'brand2.png'],

    Footerlinks: ['organic food shop', 'out team & condition', 'gogrin faw section', 'our team member', 'our latest news feed'],
    blogs: [
        {
            title: 'out latest blog',
        },
        {
            image: 'blo1-70x70.jpg',
            text: 'Where I live, I am surrounded by fesh,organic food,so I eat really well.',
            date: 'december 17,2022'
        },
        {
            image: 'blo2-70x70.jpg',
            text: 'What we get at home is 100% organic food. We are also 90% vegetarian',
            date: 'december 16,2022'
        }
    ],
    gallery: ['blo1-70x70.jpg', 'blo9-70x70.jpg', 'blo8-70x70.jpg', 'blo7-70x70.jpg', 'blo4-70x70.jpg', 'blo3-70x70.jpg'],
    info:
    {
        copyright: 'Copyright © gogrin all rights reserved',
    },
    links: ['service', 'pricing table', 'contact']
});