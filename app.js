let audience_btn = document.getElementById('audience_btn');
let show_bx_1 =document.getElementsByClassName('show_bx_1')[0];

audience_btn.addEventListener('click',()=> {
    show_bx_1.classList.toggle('show_bx_active')
})

function auto_grow(e) {
    e.style.height = "5px";
    e.style.height = (e.scrollHeight)+ "px";
}

const audience_check_off = () => {
    Array.from(document.getElementsByClassName('check_audience_i')).forEach((i) => {
        i.style.color = 'white';
    })
}

Array.from(document.getElementsByClassName('check_audience')).forEach((i,a) => {
    i.addEventListener('click',()=> {
        audience_check_off();
        document.getElementsByClassName('check_audience_i')[a].style.color = "#E35335";
        if (a === 0) {
            audience_btn.innerHTML = `Everyone <i class="fa-solid fa-angle-down">`;
            audience_btn.style.color = "#E35335";
            audience_btn.style.borderColor = "#E35335";
        } else {
            audience_btn.innerHTML = `Followers <i class="fa-solid fa-angle-down">`;
            audience_btn.style.color = "green";
            audience_btn.style.borderColor = "green";
        }
        show_bx_1.classList.toggle('show_bx_active')
    })
})

let select_reply_btn = document.getElementsByClassName('select_reply_btn')[0];
let who_can_reply_bx = document.getElementsByClassName('who_can_reply_bx')[0];



select_reply_btn.addEventListener('click', ()=> {
    who_can_reply_bx.classList.toggle('show_bx_active')
})


const who_can_reply_off = () => {
    Array.from(document.getElementsByClassName('who_can_reply_i')).forEach((i) => {
        i.style.color = 'white';
    })
}

Array.from(document.getElementsByClassName('who_can_reply')).forEach((i,a) => {
    i.addEventListener('click',()=> {
        who_can_reply_off();
        document.getElementsByClassName('who_can_reply_i')[a].style.color = "#E35335";
        if (a === 0) {
            select_reply_btn.innerHTML = `<i class="fa-solid fa-earth-asia"></i> Everyone can reply`;
        } else if(a === 1) {
            select_reply_btn.innerHTML = `<i class="fa-solid fa-user-check"></i> Following`;
        } else {
            select_reply_btn.innerHTML = `@ Only people you mention`;
        }
        who_can_reply_bx.classList.toggle('show_bx_active')
    })
})

let tweet_text_area = document.getElementById('tweet_text_area');
let tweet_post = document.getElementById('tweet_post');
let text_limit = document.getElementById('text_limit');

tweet_text_area.addEventListener('keyup', ()=> {
    if (tweet_text_area.value.lenght > 0) {
        tweet_post.style.background = "rgb(227, 83, 53)";
    } else {
        tweet_post.style.background = "rgb(227, 83, 53, .5)";  
    }

    let a = tweet_text_area.value.lenght;
    let b = parseInt((a/2));
    let c = (100-b);
    text_limit.innerText = c + "%";

    if (c === 0) {
        text_limit.style.color = "red";
    } else {
        text_limit.style.color = "rgb(0,0,0,.8)";
        
    }
})