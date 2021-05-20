Vue.component('modal', {
    template: '#modal-template'
})

const app = new Vue({
    el: '#app_project',
    data: {
        title: 'Projects',
        showModal: false,
        temp_title: '',
        temp_image: '',
        temp_links: [],
        temp_texts: [],
        projectLists: [
            { id: 0, 
                title: 'Inventory Management System', 
                image: './assets/images/kp-view.gif',
                links: [
                    { reflink: 'https://github.com/darke-f/KP_WEBJSMU',
                        refname: 'GitHub'
                    }
                ],
                texts: [
                `Internship as web application developer`,
                'Created functions for web-app to make print format report of transactions',
                'Tools : PHP, JavaScript, Bootstrap, MySQL, Laravel'
            ]},
            { id: 1, 
                title: 'Face Recognition from IP Camera', 
                image: './assets/images/face_recog.gif',
                links: [
                    { reflink: 'https://github.com/dsteve98/vk-face-recog',
                        refname: 'GitHub'
                    }
                ],
                texts: [
                `Face recognition from IP camera placed in Department's building`,
                'Group Project for Computer Vision Class',
                'Tools : Python (OpenCV, Keras)'
            ]},
            { id: 2, 
                title: 'Indonesian Sign Language Recognition', 
                image: './assets/images/handsign.gif',
                links: [
                    { reflink: 'https://github.com/dsteve98/Sign-Language-Recognition-YOLOv3',
                        refname: 'GitHub'
                    },
                    { reflink: 'https://iopscience.iop.org/article/10.1088/1757-899X/1077/1/012029',
                        refname: 'Paper'
                    }
                ],
                texts: [
                'Program to recognize Indonesian sign language into text',
                'Bachelor Final Project',
                'Detection source: image, video (file and webcam)',
                'Presented in ICITDA 2020',
                'Tools : Python (OpenCV, Numpy), Darknet'
            ]},
            { id: 3, 
                title: 'Chinese Restaurant in Toronto', 
                image: './assets/images/chrestaurant.gif',
                links: [
                    { reflink: 'https://github.com/dsteve98/Coursera_Capstone',
                        refname: 'GitHub'
                    },
                    { reflink: 'https://github.com/dsteve98/Coursera_Capstone/blob/main/Battle%20of%20Neighborhood%20Presentation.pdf',
                        refname: 'Presentation'
                    }
                ],
                texts: [
                'Program to determine the best place to open an Chinese Restaurant in Toronto',
                'Self-project for completing IBM Professional Data Science Certification',
                'Notebook: bit.ly/cproTBN',
                'Tools : Python (Library: Pandas, Numpy, requests, sklearn, folium, matplotlib). Foursquare API'
            ]}
        ]
    },
    methods: {
        showModalData(modalData) {
            this.temp_title =  modalData.title;
            this.temp_image = modalData.image;
            this.temp_links = modalData.links;
            this.temp_texts = modalData.texts;
        }
    }
})
