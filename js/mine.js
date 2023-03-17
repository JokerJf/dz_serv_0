
// let btn = doc.querySelector('.btn')
// btn.addEventListener('click', () => {
//     fetch('http://localhost:3002/tovar', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({
//             "id": "1",
//             "title": "hod"
//         })
//     })
// })
let doc = document
// masiv 

let arr = []
// arr = [
//     {
//         id: 0,
//         Tel: +9989055555555,
//         Name_famyl: "joker",
//         Email: "joker@.com",
//         Prof_Name: "joker",
//         Password: "123456789",
//         Img: "./img/prof.jpg"
//     }, {
//         id: 1,
//         Tel: "+9989055555555",
//         Name_famyl: "joker",
//         Email: "j",
//         Prof_Name: "djokerd",
//         Password: "123456789",
//         Img: "./img/prof2.jpg"
// //     },{
//   "akk": [
//     {
//       "id": 0,
//       "Tel": "+9989055555555",
//       "Name_famyl": "joker",
//       "Email": "jj",
//       "Prof_Name": "joker",
//       "Password": "123",
//       "Img": "./img/prof.jpg"
//     },
//     {
//       "id": 2,
//       "Tel": "+9989055555555",
//       "Name_famyl": "joker",
//       "Email": "jj",
//       "Prof_Name": "djokerd",
//       "Password": "123",
//       "Img": "./img/prof.jpg"
//     },
//     {
//       "id": 1,
//       "Tel": "+9989055555555",
//       "Name_famyl": "joker",
//       "Email": "js",
//       "Prof_Name": "djokerd",
//       "Password": "123",
//       "Img": "./img/prof2.jpg"
//     },
//     {
//       "id": 12,
//       "Tel": "0",
//       "Name_famyl": "jjjj",
//       "Email": "jjjj",
//       "Prof_Name": "jjjj",
//       "Password": "jjjj",
//       "Img": "./img/prof2.jpg"
//     }
//   ]
// }
// ]

let zz = 0
// Для принятие данных 
function res() {


    fetch('http://localhost:3002/akk')
        .then(res => res.json())
        .then(res => {
            if (arr.length != 0) {
                arr = []
            }
            for (let item of res) {
                arr.push(item)
            }

        });
    console.log(arr);
}
res()

// модерация страници
let zer_id = 0
// удалить акк !! есть оштбка крит не возможео исправит
let del_bt = doc.querySelector('.stranica .btn_2')
function dell() {
    console.log('z2');
    console.log(zer_id);
    fetch(`http://localhost:3002/akk/${zer_id}`, {
        method: "DELETE"
    })
    modal.classList.add('dis_none')
    box_lobby.classList.remove('dis_none')
    stranica.classList.add('dis_none')

    // for (let it in arr) {
    //     console.log('z1');
    //     if (arr[it].id == Fox.id) {

    //         console.log('z2');
    //         arr.splice(it, 1);
    //         console.log('z3');
    //         console.log(arr);
    //     }
    // }
    console.log(arr);
    console.log('z3');
    res()

}

del_bt.addEventListener('click', dell)


// главные блоки 
let stranica = doc.querySelector('.stranica')
let modal = doc.querySelector('.modal')
let box_lobby = doc.querySelector('.box_lobby')

// войти в акк
let box_lobby_btn = doc.querySelector('.box_lobby .block_2 form .btn')
function rer(event) {
    event.preventDefault();
    let zero = 0
    let box_gibrid = doc.querySelector('.box_lobby .block_2 form .gibrid')
    let box_password = doc.querySelector('.box_lobby .block_2 form .password')
    for (let item of arr) {
        if (item.Prof_Name == box_gibrid.value || item.Email == box_gibrid.value) {
            if (item.Password == box_password.value) {
                box_gibrid.value = ''
                box_password.value = ''
                logaut(item)
            } else {
                alert('Неверный паполь')
            }
        } else {
            zero = zero + 1
        }
        if (zero == arr.length) {
            alert('Неверный логин/имя/телефон')
        }

    }

}
box_lobby_btn.addEventListener('click', rer)




function logaut(Fox) {
    box_lobby.classList.add('dis_none')
    modal.classList.add('dis_none')
    box_lobby.classList.add('dis_none')
    stranica.classList.remove('dis_none')
    let profel_img = doc.querySelector('.stranica .profel .prof_img')
    let profel_name = doc.querySelector('.stranica .profel .prof_name')
    profel_img.src = Fox.Img
    profel_name.innerHTML = Fox.Prof_Name


    zer_id = Fox.id

    // выход с акк
    let vihod = doc.querySelector('.stranica .btn_1')
    vihod.addEventListener('click', () => {
        modal.classList.add('dis_none')
        box_lobby.classList.remove('dis_none')
        stranica.classList.add('dis_none')
    })
}


// для отрисовки и загрузки картинки
let nn
let fz = doc.querySelector('.modal .file')
fz.addEventListener('change', () => {
    console.log('aa');
    console.log(fz.files[0]);

    let render = new FileReader()
    render.onload = function (e) {
        console.log('zz');
        // let kk = doc.querySelector('.stranica .prof_img')
        nn = e.target.result
        // nn = `<img src="${e.target.result}" alet="фото">`
    }
    render.readAsDataURL(fz.files[0])
    console.log('zzs');
})


// регистрация акк

let span_btn_reg = doc.querySelector('.box_lobby .now_play span')
span_btn_reg.addEventListener('click', () => {
    modal.classList.remove('dis_none')
    box_lobby.classList.add('dis_none')
    stranica.classList.add('dis_none')



})



let down_img = []
let btn_reg = doc.querySelector('.modal .modal_btn')
btn_reg.addEventListener('click', () => {
    let forma = doc.querySelector('.modal form')



    // function sav() { // сломаный преобразователь
    //     let fil = doc.querySelector('.file')
    //     let ren = new FileReader()
    //     ren.readAsDataURL(fil.files[0])
    //     let p = []
    //     ren.onload = ev => {
    //         p.push(ev.target.result);
    //         return down_img.push(p)
    //     }
    //     console.log(down_img);
    //     return
    // }
    // sav()
    // console.log(down_img[0]);
    // заглушка временого id


    if (forma.nam_fam.value != '' && forma.gibrid.value != '' && forma.prof_name.value != '' && forma.password.value != '') {
        let id_zed = []
        for (let item of arr) {
            id_zed.push(item.id)
        }
        id_zed = Math.max.apply(null, id_zed);




        function eva() {
            console.log('zz');
            id_zed = id_zed + 1
            fetch('http://localhost:3002/akk', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "id": id_zed,
                    "Tel": "0",
                    "Name_famyl": forma.nam_fam.value,
                    "Email": forma.gibrid.value,
                    "Prof_Name": forma.prof_name.value,
                    "Password": forma.password.value,
                    "Img": nn
                })
            })
            res()
        }
        eva()
        res()
        forma.nam_fam.value = ''
        forma.gibrid.value = ''
        forma.prof_name.value = ''
        forma.password.value = ''
        alert('акк создан')
    } else {
        alert('Заполните данные')
    }





})






// let btn = doc.querySelector('.zee')
// btn.addEventListener('click', () => {
//     id_zed = id_zed + 1
//     fetch('http://localhost:3002/tovar', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({
//             "id": id_zed,
//             "Tel": "0",
//             "Name_famyl":forma.nam_fam.value,
//             "Email":forma.gibrid.value,
//             "Prof_Name":forma.prof_name.value,
//             "Password":forma.password.value,
//             "Img": "./img/prof2.jpg"
//         })
//     })
// })













// возврат в началку

let text_nazad = doc.querySelector('.modal .text_nazad')
text_nazad.addEventListener('click', () => {
    modal.classList.add('dis_none')
    box_lobby.classList.remove('dis_none')
    stranica.classList.add('dis_none')

})












// let test = doc.querySelector('.zee')
// test.addEventListener('click',()=>{
//     let profel_img = doc.querySelector('.stranica .profel .prof_img')
//     profel_img.src = arr[0].Img
//     let profel_name = doc.querySelector('.stranica .profel .prof_name')
//     profel_name.innerHTML = arr[0].Prof_Name


// })


// let aa = []
// let btn = doc.querySelector('.btn')
// btn.addEventListener('click',()=>{
//     let fil = doc.querySelector('.file')
//     let ren = new FileReader()
//     ren.readAsDataURL(fil.files[0])

//     ren.onload = ev => {
//         console.log(ev.target.result);
//         aa.push(ev.target.result)
//         let zed = doc.querySelector('.zed')
//         let img = doc.createElement('img')
//         img.src = aa[0]
//         zed.append(img)
//     }
//     console.log(aa);
// })

















